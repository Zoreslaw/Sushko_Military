import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from '../icons';
import styles from './Models.module.css';

interface ModelItemMeta {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  image?: string;
  images?: string[];
  priceUah?: number;
  category: string;
}

interface CategoryData {
  id: string;
  label: string;
  models: ModelItemMeta[];
}

const CATEGORIES: CategoryData[] = [
  {
    id: 'svm',
    label: 'SVM',
    models: [
      {
        slug: 'mk1',
        title: 'SVM\u2011MAXI',
        subtitle: 'Мобільний комплекс відеоспостереження для віддалених об\'єктів',
        tags: ['До 48 год', 'До 1 км', '4\u00d7 аналог + 1\u00d7 IP'],
        image: '/svm-maxi-case.jpg',
        category: 'svm',
      },
    ],
  },
  {
    id: 'tripods',
    label: 'ТРИНОГІ',
    models: [
      {
        slug: 'tripod-300',
        title: 'Tripod-300',
        subtitle: 'Робоча висота 30\u201345 см \u00b7 Діаметр у розкладеному стані 35 см \u00b7 Рекомендоване навантаження 7 кг',
        tags: ['30\u201345 см', '\u00d8 35 см', '7 кг'],
        images: ['/tripod-300-1.jpg', '/tripod-300-2.jpg', '/tripod-300-3.jpg'],
        priceUah: 700,
        category: 'tripods',
        image: '/tripod-300-1.jpg',
      },
      {
        slug: 'tripod-600',
        title: 'Tripod-600',
        subtitle: 'Робоча висота 60\u201390 см \u00b7 Діаметр у розкладеному стані 75 см \u00b7 Рекомендоване навантаження 20 кг',
        tags: ['60\u201390 см', '\u00d8 75 см', '20 кг'],
        images: ['/tripod-600-1.jpg', '/tripod-600-2.jpg', '/tripod-600-3.jpg'],
        priceUah: 1600,
        category: 'tripods',
        image: '/tripod-600-1.jpg',
      },
      {
        slug: 'tripod-750',
        title: 'Tripod-750',
        subtitle: 'Робоча висота 75\u2013130 см \u00b7 Діаметр у розкладеному стані 100 см \u00b7 Рекомендоване навантаження 20 кг',
        tags: ['75\u2013130 см', '\u00d8 100 см', '20 кг'],
        images: ['/tripod-750-1.jpg', '/tripod-750-2.jpg', '/tripod-750-3.jpg'],
        priceUah: 1800,
        category: 'tripods',
        image: '/tripod-750-1.jpg',
      },
    ],
  },
];

const openModelBySlug = (slug: string) => {
  const newHash = `#m/${slug}`;
  if (window.location.hash !== newHash) {
    window.location.hash = newHash;
  } else {
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }
};

const cardFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

const ProductCard = ({ model, handleOpen, index }: { model: ModelItemMeta; handleOpen: (slug: string) => void; index: number }) => (
  <motion.div
    className={styles.card}
    custom={index}
    variants={cardFade}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-40px' }}
  >
    <div className={styles.cardImage}>
      <img
        aria-hidden
        src={model.image || '/vite.svg'}
        alt=""
        className={styles.cardImageBg}
        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/vite.svg'; }}
        draggable={false}
      />
      <div className={styles.cardImageFg}>
        <img
          src={model.image || '/vite.svg'}
          alt={model.title}
          className={styles.cardImageFgImg}
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/vite.svg'; }}
          draggable={false}
        />
      </div>
    </div>

    <div className={styles.cardBody}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{model.title}</h3>
        <div className={styles.cardTags}>
          {model.tags.slice(0, 2).map((tag) => (
            <span key={tag} className={styles.badge}>{tag}</span>
          ))}
        </div>
      </div>

      <p className={styles.cardSubtitle}>{model.subtitle}</p>

      <div className={styles.cardFooter}>
        <div className={styles.cardTags}>
          {model.tags.slice(2).map((tag) => (
            <span key={tag} className={styles.badgeOutline}>{tag}</span>
          ))}
        </div>
        {model.priceUah && (
          <span className={styles.price}>{model.priceUah.toLocaleString('uk-UA')} грн</span>
        )}
        <button className={styles.detailBtn} onClick={() => handleOpen(model.slug)}>
          Детальніше
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </motion.div>
);

const Models = () => {
  const handleOpen = useCallback((slug: string) => openModelBySlug(slug), []);

  return (
    <section id="models" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionBadge}>Лінійка моделей</span>
          <h2 className={styles.sectionTitle}>Оберіть свою комплектацію</h2>
        </motion.div>

        {CATEGORIES.map((category, categoryIndex) => (
          <div key={category.id}>
            <div className={styles.categoryBlock}>
              <motion.div
                className={styles.categoryHeader}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45 }}
              >
                <h2 className={styles.categoryLabel}>{category.label}</h2>
                <div className={styles.categoryUnderline} />
              </motion.div>

              <div className={styles.grid}>
                {category.models.map((model, i) => (
                  <ProductCard key={model.slug} model={model} handleOpen={handleOpen} index={i} />
                ))}
              </div>
            </div>

            {categoryIndex < CATEGORIES.length - 1 && (
              <div className={styles.divider}>
                <div className={styles.dividerLine}>
                  <div className={styles.dividerDot} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Models;
