import { motion } from 'framer-motion';
import { Battery, Eye, Bolt, Camera } from '../icons';
import styles from './Features.module.css';

const features = [
  {
    Icon: Battery,
    number: '48',
    unit: 'годин',
    title: 'Автономне живлення',
    desc: 'Безперервна робота без підзарядки в автономному режимі',
  },
  {
    Icon: Eye,
    number: '1000',
    unit: 'м',
    title: 'Дальність огляду',
    desc: 'Контроль території на великих відстанях з високою чіткістю',
  },
  {
    Icon: Bolt,
    number: '5',
    unit: 'хв',
    title: 'Швидке розгортання',
    desc: 'Повна готовність системи за лічені хвилини',
  },
  {
    Icon: Camera,
    number: '4',
    unit: 'камери',
    title: 'Мультикамерність',
    desc: 'Одночасне спостереження з кількох точок у реальному часі',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const Features = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.badge}>Переваги</span>
        <h2 className={styles.sectionTitle}>Чому обирають нас</h2>
      </motion.div>

      <div className={styles.grid}>
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className={styles.feature}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className={styles.iconWrap}>
              <f.Icon size={26} />
            </div>
            <div className={styles.numberRow}>
              <span className={styles.number}>{f.number}</span>
              <span className={styles.unit}>{f.unit}</span>
            </div>
            <h3 className={styles.title}>{f.title}</h3>
            <p className={styles.desc}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
