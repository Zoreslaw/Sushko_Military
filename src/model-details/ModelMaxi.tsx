import ImageCarousel from '../components/ImageCarousel';
import { Camera, Antenna, Bolt, Network, Sparkles, Gauge, Battery, Check } from '../icons';
import s from './shared.module.css';

const SVM_IMAGES = [
  '/svm-maxi.jpg',
  '/svm-maxi-1.jpg',
  '/svm-maxi-2.jpg',
  '/svm-maxi-3.jpg',
];

const ModelMaxi = () => {
  return (
    <div className={s.wrapper}>
      {/* Header */}
      <div className={s.headerRow}>
        <div>
          <span className={s.badge}>SVM‑MAXI</span>
          <h2 className={s.title}>Мобільний комплекс відеоспостереження</h2>
          <p className={s.description}>
            Повноцінне рішення для моніторингу під'їзних шляхів та територій у складних віддалених умовах
          </p>
        </div>
        <div className={s.headerBadges}>
          <span className={s.headerBadge}>До 48 год автономно</span>
          <span className={s.headerBadge}>Дальність спостереження до 1 км</span>
          <span className={s.headerBadge}>До 4 камер + 1 IP</span>
        </div>
      </div>

      {/* Hero: image + purpose */}
      <div className={s.heroGrid}>
        <ImageCarousel images={SVM_IMAGES} altPrefix="SVM-MAXI" fallbackSrc="/vite.svg" />

        <div className={s.infoStack}>
          <div className={s.card}>
            <div className={s.cardHeader}>
              <div className={s.cardIcon}><Camera size={18} /></div>
              <span className={s.cardTitle}>Призначення та можливості</span>
            </div>
            <ul className={s.checkList}>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Контроль під'їзних шляхів і територій у складних умовах</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Зона спостереження від 30 м до кількох кілометрів</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Підтримка до 4 аналогових камер та однієї IP‑камери</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Масштабування мережі та об'єднання кількох комплексів SVM‑MAXI</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Нічний режим: ІЧ‑підсвітка відключена; підтримка ПНБ/тепловізорів з аналоговим відеовиходом</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Можливість під'єднання ПК для персональних налаштувань камер та додаткового моніторингу</li>
            </ul>
          </div>

          <div className={s.card}>
            <div className={s.cardHeader}>
              <div className={s.cardIcon}><Antenna size={18} /></div>
              <span className={s.cardTitle}>Дальність і автономність</span>
            </div>
            <ul className={s.checkList}>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Автономна робота до 48 годин</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Відстань між оператором і камерою до 50 м (аналог)</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>IP‑відео: до 100 м напряму; до 1 км через UTP/LAN; кілька кілометрів через оптоволокно</li>
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
          Оператор може знаходитись у віддаленому місці від основного кейсу; мережа масштабується з можливістю об'єднання кількох комплексів SVM‑MAXI. Дальність спостереження до 1 км, з оптоволоконним зв'язком — до кількох кілометрів.
        </p>
      </div>

      {/* Connectivity */}
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div className={s.cardIcon}><Network size={18} /></div>
          <span className={s.cardTitle}>Підключення та мережа</span>
        </div>
        <ul className={s.checkList}>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Аналоговий відеосигнал до 50 м</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>IP‑відеосигнал до 100 м напряму</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>IP‑відеосигнал від 100 м — через UTP/LAN до 1 км</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Оптоволоконний зв'язок — збільшення відстані до кількох кілометрів</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>ПК для персональних налаштувань камер та додаткового моніторингу</li>
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
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Підтримка поворотних IP‑камер та платформ для різних типів камер</li>
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
            <div className={s.monitorSpecValue}>10" HD, індикація заряду</div>
          </div>
          <div>
            <div className={s.monitorSpecLabel}>Інтерфейси</div>
            <div className={s.monitorSpecValue}>2× відео, 2× живлення камер; роз'єми для IP‑камери та ПК</div>
          </div>
          <div>
            <div className={s.monitorSpecLabel}>Заряджання</div>
            <div className={s.monitorSpecValue}>Зарядний пристрій до 10А; 0→90% ≈ 4 год</div>
          </div>
        </div>
        <ul className={s.checkList}>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Два роз'єми для відеосигналу та два — для живлення камер</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Два роз'єми для підключення камер через платформу з живленням</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Два роз'єми для підключення IP‑камери та ПК (віддалений моніторинг)</li>
        </ul>
      </div>

      {/* Optional power case */}
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div className={s.cardIcon}><Battery size={18} /></div>
          <span className={s.cardTitle}>Опційний кейс живлення</span>
        </div>
        <ul className={s.checkList}>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Додаткове живлення для віддалених камер — робота на кілька діб без перезарядки</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Підтримка розгортань з великою кількістю вузлів спостереження</li>
        </ul>
      </div>
    </div>
  );
};

export default ModelMaxi;
