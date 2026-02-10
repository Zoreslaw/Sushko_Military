import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './ImageCarousel.module.css';

interface ImageCarouselProps {
  images: string[];
  altPrefix?: string;
  fallbackSrc?: string;
  className?: string;
  withIndicators?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  foregroundWidth?: number | string;
  foregroundHeight?: number | string;
}

const clampIndex = (value: number, length: number) => {
  if (length <= 0) return 0;
  if (value < 0) return 0;
  if (value >= length) return length - 1;
  return value;
};

const ImageCarousel = ({
  images,
  altPrefix = 'Зображення',
  fallbackSrc = '/vite.svg',
  className = '',
  withIndicators = true,
  loop = true,
  autoPlay = false,
  autoPlayInterval = 10000,
  foregroundWidth = 'auto',
  foregroundHeight = '100%',
}: ImageCarouselProps) => {
  const slides = useMemo(() => (images && images.length > 0 ? images : [fallbackSrc]), [images, fallbackSrc]);
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const pointerStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);
  const isDragging = useRef(false);

  const goTo = (next: number) => {
    if (slides.length === 0) return;
    if (loop) {
      setIndex((next + slides.length) % slides.length);
    } else {
      setIndex(clampIndex(next, slides.length));
    }
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current) next();
    }, autoPlayInterval);
    return () => window.clearInterval(id);
  }, [autoPlay, autoPlayInterval, slides.length, index]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [index]);

  const onPointerDown = (e: React.PointerEvent) => {
    const t = e.target as HTMLElement;
    if (t && t.closest('button, a, [role="button"], [data-ignore-drag="true"]')) return;
    isDragging.current = true;
    pointerStartX.current = e.clientX;
    dragDeltaX.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || pointerStartX.current == null) return;
    dragDeltaX.current = e.clientX - pointerStartX.current;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    const delta = dragDeltaX.current;
    dragDeltaX.current = 0;
    if (Math.abs(delta) > 48) {
      delta < 0 ? next() : prev();
    }
  };

  const total = slides.length;
  const stepPercent = total > 0 ? (100 / total) : 100;
  const percentOffset = total > 0 ? (index * -stepPercent) : 0;
  const dragOffset = isDragging.current && total > 0
    ? (dragDeltaX.current / (containerRef.current?.clientWidth || 1)) * stepPercent
    : 0;

  return (
    <div className={`${styles.carousel} ${className}`}>
      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        tabIndex={0}
        className={styles.inner}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            bottom: withIndicators && total > 1 ? 32 : 0,
            display: 'flex',
            height: '100%',
            width: `${total * 100}%`,
            transform: `translate3d(${percentOffset + dragOffset}%, 0, 0)`,
            transition: isDragging.current ? 'none' : 'transform 450ms ease',
          }}
        >
          {slides.map((src, idx) => (
            <div key={`${src}-${idx}`} style={{ position: 'relative', width: `${100 / Math.max(total, 1)}%`, height: '100%' }}>
              <img
                aria-hidden
                src={src}
                alt=""
                draggable={false}
                style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center',
                  filter: 'blur(12px)', transform: 'scale(1.08)', zIndex: 0, userSelect: 'none',
                }}
              />
              <div style={{
                position: 'relative', zIndex: 1, height: '100%', width: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px',
              }}>
                <div style={{
                  width: foregroundWidth, height: foregroundHeight,
                  maxWidth: '100%', maxHeight: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.35)', borderRadius: 8,
                  background: 'rgba(0,0,0,0.15)', backdropFilter: 'blur(2px)',
                }}>
                  <img
                    draggable={false}
                    src={src}
                    alt={`${altPrefix} ${idx + 1}`}
                    style={{
                      height: '100%', width: 'auto', maxWidth: '100%',
                      objectFit: 'contain', objectPosition: 'center', display: 'block', userSelect: 'none',
                    }}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackSrc; }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {total > 1 && (
          <div className={styles.controls}>
            <button
              aria-label="Попередній слайд"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              disabled={!loop && index === 0}
              className={styles.controlBtn}
              data-ignore-drag="true"
            >
              ‹
            </button>
            <button
              aria-label="Наступний слайд"
              onClick={(e) => { e.stopPropagation(); next(); }}
              disabled={!loop && index === total - 1}
              className={styles.controlBtn}
              data-ignore-drag="true"
            >
              ›
            </button>
          </div>
        )}

        {withIndicators && total > 1 && (
          <div className={styles.indicators}>
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Показати слайд ${i + 1}`}
                onClick={(e) => { e.stopPropagation(); goTo(i); }}
                className={`${styles.indicator} ${i === index ? styles.indicatorActive : ''}`}
                data-ignore-drag="true"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
