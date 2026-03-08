import { Suspense, lazy, useEffect, useMemo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from '../icons';
import styles from './ModelOverlay.module.css';

const ModelMini = lazy(() => import('../model-details/ModelMini'));
const ModelMaxi = lazy(() => import('../model-details/ModelMaxi'));
const ModelNich = lazy(() => import('../model-details/ModelNich'));
const ModelTripod300 = lazy(() => import('../model-details/ModelTripod300'));
const ModelTripod600 = lazy(() => import('../model-details/ModelTripod600'));
const ModelTripod750 = lazy(() => import('../model-details/ModelTripod750'));

const slugToComponent: Record<string, React.LazyExoticComponent<() => React.ReactElement>> = {
  mini: ModelMini,
  maxi: ModelMaxi,
  nich: ModelNich,
  'tripod-300': ModelTripod300,
  'tripod-600': ModelTripod600,
  'tripod-750': ModelTripod750,
};

const parseSlugFromHash = (hash: string): string | null => {
  if (!hash) return null;
  const match = hash.match(/^#m\/(.+)$/);
  return match ? match[1] : null;
};

const closeOverlay = () => {
  if (parseSlugFromHash(window.location.hash)) {
    window.history.pushState('', document.title, window.location.pathname + window.location.search);
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }
};

const ModelOverlay = () => {
  const [slug, setSlug] = useState<string | null>(() => parseSlugFromHash(window.location.hash));
  const Component = useMemo(() => (slug ? slugToComponent[slug] ?? null : null), [slug]);

  useEffect(() => {
    const onHashChange = () => setSlug(parseSlugFromHash(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (Component) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [Component]);

  // Close on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') closeOverlay();
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {Component && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => { if (e.target === e.currentTarget) closeOverlay(); }}
        >
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button
              className={styles.closeBtn}
              onClick={closeOverlay}
              aria-label="Закрити"
            >
              <X size={22} />
            </button>

            <div className={styles.scrollArea}>
              <Suspense
                fallback={
                  <div className={styles.loading} />
                }
              >
                <Component />
              </Suspense>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModelOverlay;
