import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SvmLogoMark, Menu, X } from '../icons';
import styles from './Navigation.module.css';

const navItems = [
  { href: '#hero', label: 'Головна' },
  { href: '#models', label: 'Моделі' },
  { href: '#faq', label: 'Часті запитання' },
  { href: '#contact', label: 'Контакти' },
];

const Navigation = () => {
  const [opened, setOpened] = useState(false);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpened(false);
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <button
            className={styles.brand}
            onClick={() => scrollToSection('#hero')}
            aria-label="На головну"
          >
            <SvmLogoMark size={36} className={styles.logoMark} />
            <div className={styles.logoTextGroup}>
              <span className={styles.logoText}>SVM</span>
              <span className={styles.logoSub}>SYSTEMS</span>
            </div>
          </button>

          <div className={styles.desktopLinks}>
            {navItems.map((item) => (
              <button
                key={item.href}
                className={styles.navLink}
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className={styles.burger}
            onClick={() => setOpened(true)}
            aria-label="Відкрити меню"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {opened && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            >
              <div className={styles.drawerHeader}>
                <div className={styles.drawerBrand}>
                  <SvmLogoMark size={32} className={styles.logoMark} />
                  <div className={styles.logoTextGroup}>
                    <span className={styles.logoText}>SVM</span>
                    <span className={styles.logoSub}>SYSTEMS</span>
                  </div>
                </div>
                <button
                  className={styles.closeBtn}
                  onClick={() => setOpened(false)}
                  aria-label="Закрити меню"
                >
                  <X size={24} />
                </button>
              </div>

              <div className={styles.drawerLinks}>
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.href}
                    className={styles.drawerLink}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
