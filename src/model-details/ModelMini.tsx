import ImageCarousel from '../components/ImageCarousel';
import { Camera, Antenna, Bolt, Network, Sparkles, Gauge, Check } from '../icons';
import s from './shared.module.css';

const SVM_MINI_IMAGES = [
  '/svm-mini.jpg',
  '/svm-mini-1.jpg'
];

const ModelMini = () => {
  return (
    <div className={s.wrapper}>
      {/* Header */}
      <div className={s.headerRow}>
        <div>
          <span className={s.badge}>SVM‑MINI</span>
          <h2 className={s.title}>Мобільний комплекс відеоспостереження</h2>
          <p className={s.description}>
            Компактне рішення для моніторингу під'їзних шляхів та територій у складних віддалених умовах
          </p>
        </div>
        <div className={s.headerBadges}>
          <span className={s.headerBadge}>До 48 год автономно</span>
          <span className={s.headerBadge}>Дальність спостереження до 1 км</span>
          <span className={s.headerBadge}>До 2 камер + 1 IP</span>
        </div>
      </div>

      {/* Hero: image + purpose */}
      <div className={s.heroGrid}>
        <ImageCarousel images={SVM_MINI_IMAGES} altPrefix="SVM-MINI" fallbackSrc="/vite.svg" />

        <div className={s.infoStack}>
          <div className={s.card}>
            <div className={s.cardHeader}>
              <div className={s.cardIcon}><Camera size={18} /></div>
              <span className={s.cardTitle}>Призначення та можливості</span>
            </div>
            <ul className={s.checkList}>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Контроль під'їзних шляхів і територій у складних умовах</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Зона спостереження від 30 м до кількох кілометрів</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Підтримка до 2 аналогових камер та однієї IP‑камери</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Нічний режим: ІЧ‑підсвітка відключена; підтримка ПНБ/тепловізорів з аналоговим відеовиходом</li>
            </ul>
          </div>

          <div className={s.card}>
            <div className={s.cardHeader}>
              <div className={s.cardIcon}><Antenna size={18} /></div>
              <span className={s.cardTitle}>Дальність і автономність</span>
            </div>
            <ul className={s.checkList}>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Автономна робота до 48 годин</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Відстань між оператором і камерою до 50 м</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Deployment */}
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div className={s.cardIcon}><Bolt size={18} /></div>
          <span className={s.cardTitle}>Схема розгортання</span>
        </div>
        <p className={`${s.deploymentText} ${s.deploymentTextPrimary}`}>
          Оператор може знаходитись у віддаленому місці від основного кейсу. Дальність спостереження до 1 км.
        </p>
      </div>

      {/* Connectivity */}
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div className={s.cardIcon}><Network size={18} /></div>
          <span className={s.cardTitle}>Підключення</span>
        </div>
        <ul className={s.checkList}>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Аналоговий відеосигнал до 50 м</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>IP‑відеосигнал до 100 м напряму</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>IP‑відеосигнал від 100 м — через UTP/LAN до 1 км</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Оптоволоконний зв'язок — збільшення відстані до кількох кілометрів</li>
        </ul>
      </div>

      {/* Flexibility */}
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div className={s.cardIcon}><Sparkles size={18} /></div>
          <span className={s.cardTitle}>Гнучкість та комплектація</span>
        </div>
        <ul className={s.checkList}>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Індивідуальне укомплектування залежно від потреб</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Об'єктиви від 3.6 мм до 70 мм; підтримка різних типів</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Універсальний кронштейн: встановлення на стіни, стовпи, дерева, штатив чи щоглу</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Додаткове кріплення з рейкою Weaver; сумісність із ПНБ/тепловізорами (аналоговий вихід)</li>
        </ul>
      </div>

      {/* Monitoring case */}
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div className={s.cardIcon}><Gauge size={18} /></div>
          <span className={s.cardTitle}>Головний кейс моніторингу</span>
        </div>
        <div className={s.monitorSpecGrid}>
          <div>
            <div className={s.monitorSpecLabel}>Екран</div>
            <div className={s.monitorSpecValue}>7" HD, індикація заряду</div>
          </div>
          <div>
            <div className={s.monitorSpecLabel}>Інтерфейси</div>
            <div className={s.monitorSpecValue}>1 кабель з живленням для двох камер</div>
          </div>
          <div>
            <div className={s.monitorSpecLabel}>Заряджання</div>
            <div className={s.monitorSpecValue}>Зарядний пристрій до 10А; 0→90% ≈ 4 год</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ModelMini;
