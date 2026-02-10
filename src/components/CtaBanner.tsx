import { motion } from 'framer-motion';
import { ArrowRight } from '../icons';
import styles from './CtaBanner.module.css';

const CtaBanner = () => (
  <section className={styles.section}>
    <div className={styles.scanLines} />

    {/* Viewfinder corners */}
    <span className={`${styles.bracket} ${styles.tl}`} />
    <span className={`${styles.bracket} ${styles.tr}`} />
    <span className={`${styles.bracket} ${styles.bl}`} />
    <span className={`${styles.bracket} ${styles.br}`} />

    <div className={styles.container}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.heading}>Готові обговорити ваш проект?</h2>
        <p className={styles.desc}>
          Отримайте безкоштовну консультацію та індивідуальну пропозицію для вашого об'єкту
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <button
          className={styles.cta}
          onClick={() =>
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Зв'язатися з нами
          <ArrowRight size={18} />
        </button>
      </motion.div>
    </div>
  </section>
);

export default CtaBanner;
