import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from '../icons';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'Чи можна підключити кілька камер одночасно?',
    answer: 'Так, система підтримує підключення до 4 камер одночасно з можливістю перемикання між ними в реальному часі. Всі камери синхронізуються та передають дані централізовано.',
  },
  {
    question: 'Яка роздільна здатність відео та частота кадрів?',
    answer: 'Система забезпечує Full HD 1080p роздільну здатність при 30 кадрах на секунду. При необхідності можна налаштувати різні режими якості для оптимізації трафіку.',
  },
  {
    question: 'Чи працює обладнання в темряві та умовах низької освітленості?',
    answer: 'Так, камери мають вбудовану ІЧ-підсвітку для роботи в умовах низької освітленості. Додатково доступні зовнішні ІЧ-прожектори для роботи в повній темряві.',
  },
  {
    question: 'Який термін гарантії та технічної підтримки?',
    answer: 'Надається 3 роки гарантії на всі компоненти системи. Технічна підтримка доступна 24/7 з можливістю дистанційного налаштування та діагностики обладнання.',
  },
  {
    question: 'Чи можна інтегрувати з існуючими системами спостереження?',
    answer: 'Система має відкриті API та підтримує стандартні протоколи інтеграції. Можна легко підключити до існуючих центрів спостереження та систем керування.',
  },
  {
    question: 'Які вимоги до мережевої інфраструктури?',
    answer: 'Для роботи потрібен стабільний інтернет зі швидкістю від 5 Мбіт/с. Система підтримує як проводне підключення через Ethernet, так і бездротове через Wi-Fi або 4G.',
  },
];

const itemFade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.07, ease: 'easeOut' as const },
  }),
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badge}>FAQ</span>
          <h2 className={styles.title}>Часті запитання</h2>
        </motion.div>

        <div className={styles.list}>
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className={`${styles.item} ${openIndex === idx ? styles.itemOpen : ''}`}
              custom={idx}
              variants={itemFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
            >
              <button
                className={styles.question}
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`${styles.chevron} ${openIndex === idx ? styles.chevronOpen : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className={styles.answerInner}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
