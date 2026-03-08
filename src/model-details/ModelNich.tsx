import ImageCarousel from '../components/ImageCarousel';
import { Camera, Gauge, Sparkles, Bolt, Check, Battery } from '../icons';
import s from './shared.module.css';

const SVM_NICH_IMAGES = [
  '/svm-nich.jpg',
  '/svm-nich-1.jpg',
  '/svm-nich-2.jpg',
  '/svm-nich-3.jpg',
];

const ModelNich = () => {
  return (
    <div className={s.wrapper}>
      {/* Header */}
      <div className={s.headerRow}>
        <div>
          <span className={s.badge}>SVM‑NICH</span>
          <h2 className={s.title}>Мобільний комплекс відеоспостереження</h2>
          <p className={s.description}>
            Для більш безпечного та ефективного моніторингу під'їзних шляхів у складних умовах
          </p>
        </div>
        <div className={s.headerBadges}>
          <span className={s.headerBadge}>До 1 км</span>
          <span className={s.headerBadge}>50 м від оператора</span>
          <span className={s.headerBadge}>2 канали</span>
        </div>
      </div>

      {/* Hero: image + purpose */}
      <div className={s.heroGrid}>
        <ImageCarousel images={SVM_NICH_IMAGES} altPrefix="SVM-NICH" fallbackSrc="/vite.svg" autoPlay autoPlayInterval={5000} />

        <div className={s.infoStack}>
          <div className={s.card}>
            <div className={s.cardHeader}>
              <div className={s.cardIcon}><Camera size={18} /></div>
              <span className={s.cardTitle}>Призначення та можливості</span>
            </div>
            <ul className={s.checkList}>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Контроль під'їзних шляхів у складних умовах</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Зона спостереження від 30 м до кількох кілометрів</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Двохканальна система відеомоніторингу</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Функція «картинка в картинці» (Picture-in-picture) — обидва потоки одночасно</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Нічний режим: ІЧ-підсвітка відключена, вбудований у корпус тепловізійний модуль</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Працює в автономному режимі</li>
            </ul>
          </div>

          <div className={s.card}>
            <div className={s.cardHeader}>
              <div className={s.cardIcon}><Bolt size={18} /></div>
              <span className={s.cardTitle}>Дальність роботи</span>
            </div>
            <ul className={s.checkList}>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Оператор може знаходитись на відстані до 50 м від камери</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Відеосигнал до 50 м (UTP)</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Дальність спостереження до 1 км</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main monitoring case */}
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div className={s.cardIcon}><Gauge size={18} /></div>
          <span className={s.cardTitle}>Головний кейс моніторингу відеоспостереження</span>
        </div>
        <div className={s.monitorSpecGrid}>
          <div>
            <div className={s.monitorSpecLabel}>Екран</div>
            <div className={s.monitorSpecValue}>7" HD, індикація заряду акумулятора</div>
          </div>
        </div>
        <p className={s.deploymentText}>
          Забезпечує віддалений відеонагляд з екраном 7" та роздільною здатністю HD.
        </p>
      </div>

      {/* Camera modules */}
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div className={s.cardIcon}><Camera size={18} /></div>
          <span className={s.cardTitle}>Модулі камери</span>
        </div>
        <ul className={s.checkList}>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span><strong>Універсальний модуль камери</strong> — універсальне кріплення для горизонтальних та вертикальних поверхонь; встановлення на штатив, щоглу; додаткове кріплення з рейкою Weaver</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span><strong>Модуль камери з тепловізором</strong> — встановлення на штатив, щоглу; додаткове кріплення для оптичних прицілів; вбудований тепловізор</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Універсальний модуль для кріплення на стіни, стовпи, дерева</li>
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
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Можливість використання різних об'єктивів: від 3,6 мм до 70 мм</li>
        </ul>
      </div>

      {/* Power */}
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div className={s.cardIcon}><Battery size={18} /></div>
          <span className={s.cardTitle}>Живлення модуля камери</span>
        </div>
        <ul className={s.checkList}>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Вбудований акумулятор відсутній</li>
          <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Підтримується живлення напруги 21–25,2 В від зовнішніх АКБ, зокрема акумуляторів дронів</li>
        </ul>
      </div>
    </div>
  );
};

export default ModelNich;
