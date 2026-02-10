import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, Send, Check } from '../icons';
import styles from './Contact.module.css';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (form.name.trim().length < 2) e.name = "Ім'я має бути довшим";
    if (!/^\S+@\S+$/.test(form.email)) e.email = 'Невірний email';
    if (form.message.trim().length < 10) e.message = 'Повідомлення має бути довшим';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('submitting');
    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!resp.ok) throw new Error('Network error');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badge}>Контакти</span>
          <h2 className={styles.title}>Зв'яжіться з нами</h2>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={styles.infoTitle}>Контакти</h3>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Phone size={22} /></div>
                <div>
                  <div className={styles.infoLabel}>Телефон</div>
                  <div className={styles.infoValue}>+380 63 389 60 15</div>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Mail size={22} /></div>
                <div>
                  <div className={styles.infoLabel}>Email</div>
                  <div className={styles.infoValue}>svm.ml.0754@gmail.com</div>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Clock size={22} /></div>
                <div>
                  <div className={styles.infoLabel}>Графік роботи</div>
                  <div className={styles.infoValue}>Пн-Пт: 9:00-18:00</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label}>Ім'я</label>
                <input
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  type="text"
                  placeholder="Ваше ім'я"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>
              <div className={styles.field}>
                <label className={styles.label}>E-mail</label>
                <input
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Повідомлення</label>
                <textarea
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  placeholder="Ваше повідомлення"
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  required
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>

              <button
                className={styles.submitBtn}
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>Надсилання...</>
                ) : (
                  <>
                    <Send size={18} />
                    Відправити повідомлення
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    className={styles.toast}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check size={18} />
                    Дякуємо! Повідомлення надіслано.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    className={`${styles.toast} ${styles.toastError}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    Сталася помилка. Спробуйте ще раз.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
