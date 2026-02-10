import { useEffect, useState } from 'react';
import { getStoredConsent, setStoredConsent } from '../consent/consent';
import styles from './CookieConsent.module.css';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) setVisible(true);
  }, []);

  const acceptAll = () => {
    setStoredConsent({ analytics: true, marketing: true });
    setVisible(false);
  };

  const rejectAll = () => {
    setStoredConsent({ analytics: false, marketing: false });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <p className={styles.text}>
          Ми використовуємо cookie для роботи сайту. Аналітика і маркетинг вмикаються лише за Вашою згодою.
        </p>
        <p className={styles.textSmall}>
          Продовжуючи перегляд, Ви можете погодитись або відхилити додаткові cookie. Налаштування можна змінити пізніше.
        </p>
        <div className={styles.actions}>
          <button className={styles.btnOutline} onClick={rejectAll}>
            Відхилити
          </button>
          <button className={styles.btnPrimary} onClick={acceptAll}>
            Прийняти всі
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
