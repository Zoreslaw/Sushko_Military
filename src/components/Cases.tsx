import { motion } from 'framer-motion';
import { Video, Book, MapPin } from '../icons';
import styles from './Cases.module.css';

const cases = [
  {
    Icon: Video,
    title: 'Польова операція',
    location: 'Західна Україна',
    date: '2026',
    description: 'Використання для спостереження за позиціями противника в реальному часі. Забезпечило надійний контроль території.',
  },
  {
    Icon: Book,
    title: 'Навчання ЗСУ',
    location: 'Житомир',
    date: '2026',
    description: 'Тренування підрозділів з використанням сучасного обладнання. Підвищення кваліфікації військовослужбовців.',
  },
];

const cardFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' as const },
  }),
};

const Cases = () => (
  <section id="cases" className={styles.section}>
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.badge}>Приклади використання</span>
        <h2 className={styles.title}>Реальні кейси</h2>
        <p className={styles.subtitle}>
          Як наші перископи допомагають у реальних бойових та навчальних умовах
        </p>
      </motion.div>

      <div className={styles.grid}>
        {cases.map((caseItem, i) => (
          <motion.div
            key={caseItem.title}
            className={styles.card}
            custom={i}
            variants={cardFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className={styles.cardTop}>
              <div className={styles.iconCircle}>
                <caseItem.Icon size={28} />
              </div>
              <div className={styles.meta}>
                <span className={styles.dateBadge}>{caseItem.date}</span>
                <div className={styles.location}>
                  <MapPin size={14} />
                  <span>{caseItem.location}</span>
                </div>
              </div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{caseItem.title}</h3>
              <p className={styles.cardDesc}>{caseItem.description}</p>
            </div>

            <div className={styles.cardBadges}>
              <span className={styles.statusBadge}>Успішне виконання</span>
              <span className={styles.statusBadge}>Військовий стандарт</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Cases;
