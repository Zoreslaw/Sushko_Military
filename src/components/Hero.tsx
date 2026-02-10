import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Bolt, Eye, ChevronDown } from '../icons';
import styles from './Hero.module.css';

/* ── Animated counter ── */
function AnimatedNum({ value, duration = 1.6 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / (duration * 1000), 1);
            const ease = 1 - Math.pow(1 - t, 3);          // easeOutCubic
            setDisplay(Math.round(ease * value));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}

/* ── Hero ── */
const Hero = () => (
  <header id="hero" className={styles.hero}>
    <div className={styles.bg} />
    <div className={styles.scanLines} />

    <div className={styles.container}>
      {/* ── Left: text content ── */}
      <div className={styles.left}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Українське виробництво
          </span>

          <h1 className={styles.heading}>
            Мобільні комплекси{'\n'}
            <span className={styles.accent}>відеоспостереження</span>
          </h1>

          <p className={styles.desc}>
            Автономні рішення для контролю території у віддалених локаціях —
            надійні, швидкі у розгортанні, масштабовані
          </p>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <button
            className={styles.cta}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Bolt size={18} />
            Замовити пропозицію
          </button>
          <button
            className={styles.ctaGhost}
            onClick={() => document.querySelector('#models')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Eye size={18} />
            Переглянути моделі
          </button>
        </motion.div>

        <motion.div
          className={styles.metrics}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className={styles.metric}>
            <span className={styles.metricNum}>
              <AnimatedNum value={48} />
            </span>
            <span className={styles.metricUnit}>годин</span>
            <span className={styles.metricLabel}>автономності</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metric}>
            <span className={styles.metricNum}>
              <AnimatedNum value={1000} duration={2} />
            </span>
            <span className={styles.metricUnit}>метрів</span>
            <span className={styles.metricLabel}>дальність</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metric}>
            <span className={styles.metricNum}>
              <AnimatedNum value={5} duration={1} />
            </span>
            <span className={styles.metricUnit}>хвилин</span>
            <span className={styles.metricLabel}>розгортання</span>
          </div>
        </motion.div>
      </div>

      {/* ── Right: product image with HUD ── */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className={styles.imageFrame}>
          {/* HUD corner brackets */}
          <span className={`${styles.bracket} ${styles.tl}`} />
          <span className={`${styles.bracket} ${styles.tr}`} />
          <span className={`${styles.bracket} ${styles.bl}`} />
          <span className={`${styles.bracket} ${styles.br}`} />

          {/* Crosshair */}
          <div className={styles.crosshair}>
            <span className={styles.crossH} />
            <span className={styles.crossV} />
            <span className={styles.crossDot} />
          </div>

          {/* HUD readouts */}
          <span className={styles.hudTop}>SVM — MAXI</span>
          <span className={styles.hudBottom}>AHD-1 &bull; REC</span>

          <img
            src="/svm-maxi-case.jpg"
            alt="SVM MAXI — мобільний комплекс відеоспостереження"
            className={styles.productImg}
            loading="eager"
            draggable={false}
          />
        </div>
      </motion.div>
    </div>

    {/* ── Scroll indicator ── */}
    <motion.button
      className={styles.scrollHint}
      onClick={() => {
        const next = document.querySelector('#hero')?.nextElementSibling;
        next?.scrollIntoView({ behavior: 'smooth' });
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      aria-label="Scroll down"
    >
      <ChevronDown size={22} />
    </motion.button>

    <div className={styles.fadeBottom} />
  </header>
);

export default Hero;
