import { useEffect, useMemo, useRef, useState } from 'react';
import { Card } from '@mantine/core';
import classes from './ImageCarousel.module.css';

interface ImageCarouselProps {
  images: string[];
  altPrefix?: string;
  fallbackSrc?: string;
  className?: string;
  withIndicators?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number; // ms
  foregroundWidth?: number | string; // fixed foreground box width
  foregroundHeight?: number | string; // fixed foreground box height
}

const clampIndex = (value: number, length: number) => {
  if (length <= 0) return 0;
  if (value < 0) return 0;
  if (value >= length) return length - 1;
  return value;
};

const ImageCarousel = ({
  images,
  altPrefix = 'Изображение',
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

  // Navigation helpers
  const goTo = (next: number) => {
    if (slides.length === 0) return;
    if (loop) {
      const wrapped = (next + slides.length) % slides.length;
      setIndex(wrapped);
    } else {
      setIndex(clampIndex(next, slides.length));
    }
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Autoplay
  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current) {
        next();
      }
    }, autoPlayInterval);
    return () => window.clearInterval(id);
  }, [autoPlay, autoPlayInterval, slides.length, index]);

  // Keyboard navigation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [index]);

  // Pointer swipe
  const onPointerDown = (e: React.PointerEvent) => {
    const t = e.target as HTMLElement;
    if (t && t.closest('button, a, [role="button"], [data-ignore-drag="true"]')) {
      return;
    }
    isDragging.current = true;
    pointerStartX.current = e.clientX;
    dragDeltaX.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || pointerStartX.current == null) return;
    dragDeltaX.current = e.clientX - pointerStartX.current;
    // We render drag offset inline below
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    const threshold = 48; // px
    const delta = dragDeltaX.current;
    dragDeltaX.current = 0;
    if (Math.abs(delta) > threshold) {
      if (delta < 0) {
        next();
      } else {
        prev();
      }
    }
  };

  const total = slides.length;
  const stepPercent = total > 0 ? (100 / total) : 100; // translate percent per one slide
  const percentOffset = total > 0 ? (index * -stepPercent) : 0;
  const dragOffset = isDragging.current && total > 0
    ? (dragDeltaX.current / (containerRef.current?.clientWidth || 1)) * stepPercent
    : 0;

  return (
    <Card
      className={`glass ${classes.carousel} ${className}`}
      padding={0}
      withBorder
      radius="md"
      style={{ overflow: 'hidden' }}
    >
      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        tabIndex={0}
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          outline: 'none',
          userSelect: 'none',
        }}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        {/* Slides track */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
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
              {/* Blurred background covering entire slide */}
              <img
                aria-hidden
                src={src}
                alt=""
                draggable={false}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'blur(12px)',
                  transform: 'scale(1.08)',
                  zIndex: 0,
                  userSelect: 'none',
                }}
              />
              {/* Foreground box with contain-fit image to always show full image */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                }}
              >
                <div
                  style={{
                    width: foregroundWidth,
                    height: foregroundHeight,
                    maxWidth: '100%',
                    maxHeight: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.35)',
                    borderRadius: 8,
                    background: 'rgba(0,0,0,0.15)',
                    backdropFilter: 'blur(2px)',
                  }}
                >
                  <img
                    draggable={false}
                    src={src}
                    alt={`${altPrefix} ${idx + 1}`}
                    style={{
                      height: '100%',
                      width: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      display: 'block',
              userSelect: 'none',
                    }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = fallbackSrc;
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        {total > 1 && (
          <div className={classes.carouselControls} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 8, pointerEvents: 'none' }}>
            <button
              aria-label="Предыдущий слайд"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              disabled={!loop && index === 0}
              style={{
                pointerEvents: 'auto',
                cursor: 'pointer',
                width: 40,
                height: 40,
                borderRadius: 999,
                display: 'grid',
                placeItems: 'center',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                background: 'rgba(255,255,255,0.08)',
                color: 'var(--primary-gold)',
                backdropFilter: 'blur(10px)',
              }}
              data-ignore-drag
            >
              ‹
            </button>
            <button
              aria-label="Следующий слайд"
              onClick={(e) => { e.stopPropagation(); next(); }}
              disabled={!loop && index === total - 1}
              style={{
                pointerEvents: 'auto',
                cursor: 'pointer',
                width: 40,
                height: 40,
                borderRadius: 999,
                display: 'grid',
                placeItems: 'center',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                background: 'rgba(255,255,255,0.08)',
                color: 'var(--primary-gold)',
                backdropFilter: 'blur(10px)',
              }}
              data-ignore-drag
            >
              ›
            </button>
          </div>
        )}

        {/* Indicators */}
        {withIndicators && total > 1 && (
          <div style={{ position: 'absolute', bottom: 12, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 8 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Показать слайд ${i + 1}`}
                onClick={(e) => { e.stopPropagation(); goTo(i); }}
                style={{
                  width: i === index ? 20 : 6,
                  height: 6,
                  borderRadius: i === index ? 3 : 999,
                  border: 'none',
                  background: i === index ? 'var(--primary-gold)' : 'rgba(255,255,255,0.35)',
                  boxShadow: i === index ? '0 0 8px rgba(255, 215, 0, 0.6)' : 'none',
                  transition: 'all 250ms ease',
                  cursor: 'pointer',
                }}
                className={i === index ? classes.carouselIndicator + ' ' : classes.carouselIndicator}
                data-ignore-drag
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ImageCarousel;


