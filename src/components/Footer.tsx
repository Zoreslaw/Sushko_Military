import { SvmLogoMark, Phone, Mail } from '../icons';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div>
          <div className={styles.brand}>
            <SvmLogoMark size={36} className={styles.logoMark} />
            <div className={styles.logoTextGroup}>
              <h3 className={styles.logoTitle}>SVM</h3>
              <span className={styles.logoSub}>SYSTEMS</span>
            </div>
          </div>
          <p className={styles.description}>
            Українські мобільні комплекси відеоспостереження.
          </p>
        </div>

        <div>
          <h4 className={styles.columnTitle}>Контакти</h4>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <span>+380 63 389 60 15</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <span>svm.ml.0754@gmail.com</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className={styles.columnTitle}>Підтримка</h4>
          <div className={styles.supportList}>
            <span>Технічна підтримка 24/7</span>
            <span>Навчання персоналу</span>
            <span>Сервісне обслуговування</span>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <p className={styles.copyright}>
        &copy; 2026 Українські комплекси відеоспостереження. Всі права захищені.
      </p>
    </div>
  </footer>
);

export default Footer;
