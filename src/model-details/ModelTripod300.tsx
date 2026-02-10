import ImageCarousel from '../components/ImageCarousel';
import { Gauge, Sparkles, Camera, Bolt, Check } from '../icons';
import s from './shared.module.css';

const TRIPOD_IMAGES = [
  '/tripod-300-1.jpg',
  '/tripod-300-2.jpg',
  '/tripod-300-3.jpg',
];

const ModelTripod300 = () => {
  return (
    <div className={s.wrapper}>
      {/* Header */}
      <div className={s.headerRow}>
        <div>
          <span className={s.badge}>Tripod-300</span>
          <h2 className={s.title}>Професійний штатив</h2>
          <p className={s.description}>
            Компактний та надійний штатив для обладнання спостереження з регульованою висотою
          </p>
        </div>
        <div className={s.headerBadges}>
          <span className={s.headerBadge}>30-45 см</span>
          <span className={s.headerBadge}>Ø 35 см</span>
          <span className={s.headerBadge}>7 кг навантаження</span>
          <span className={s.headerBadge}>700 грн</span>
        </div>
      </div>

      {/* Hero: image + specs */}
      <div className={s.heroGrid}>
        <ImageCarousel images={TRIPOD_IMAGES} altPrefix="Tripod-300 фото" fallbackSrc="/vite.svg" autoPlay />

        <div className={s.infoStack}>
          <div className={s.card}>
            <div className={s.cardHeader}>
              <div className={s.cardIcon}><Gauge size={18} /></div>
              <span className={s.cardTitle}>Технічні характеристики</span>
            </div>
            <div className={s.specGrid}>
              <div className={s.specRow}>
                <span className={s.specLabel}>Робоча висота</span>
                <span className={s.specValue}>30-45 см</span>
              </div>
              <div className={s.specRow}>
                <span className={s.specLabel}>Діаметр розкладеного</span>
                <span className={s.specValue}>35 см</span>
              </div>
              <div className={s.specRow}>
                <span className={s.specLabel}>Навантаження</span>
                <span className={s.specValue}>7 кг</span>
              </div>
              <div className={s.specRow}>
                <span className={s.specLabel}>Матеріал ніжок</span>
                <span className={s.specValue}>Алюміній</span>
              </div>
              <div className={s.specRow}>
                <span className={s.specLabel}>Матеріал платформи</span>
                <span className={s.specValue}>Чорний пластик</span>
              </div>
            </div>
          </div>

          <div className={s.card}>
            <div className={s.cardHeader}>
              <div className={s.cardIcon}><Sparkles size={18} /></div>
              <span className={s.cardTitle}>Переваги</span>
            </div>
            <ul className={s.checkList}>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Компактні розміри для транспортування</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Швидке розгортання за 30 секунд</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Стабільна опора на будь-якій поверхні</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Універсальне кріплення для різного обладнання</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Міцна конструкція для складних умов експлуатації</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scenarios */}
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div className={s.cardIcon}><Camera size={18} /></div>
          <span className={s.cardTitle}>Сценарії використання</span>
        </div>
        <div className={s.scenarioGrid}>
          <div>
            <div className={s.scenarioTitle}>Відеоспостереження</div>
            <div className={s.scenarioDesc}>Встановлення камер спостереження на об'єктах, контроль під'їзних шляхів</div>
          </div>
          <div>
            <div className={s.scenarioTitle}>Оптичні прилади</div>
            <div className={s.scenarioDesc}>Підтримка тепловізорів, приладів нічного бачення, біноклів</div>
          </div>
          <div>
            <div className={s.scenarioTitle}>Комунікаційне обладнання</div>
            <div className={s.scenarioDesc}>Антени, рації, портативні станції зв'язку</div>
          </div>
          <div>
            <div className={s.scenarioTitle}>Освітлення</div>
            <div className={s.scenarioDesc}>Прожектори, ІЧ-підсвітка, сигнальні ліхтарі</div>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div className={s.cardIcon}><Bolt size={18} /></div>
          <span className={s.cardTitle}>Замовлення та доставка</span>
        </div>
        <div className={s.priceGrid}>
          <div>
            <div className={s.priceLabel}>Ціна</div>
            <div className={s.priceValue}>700 грн</div>
          </div>
          <div>
            <div className={s.priceSubLabel}>Термін виготовлення</div>
            <div className={s.priceSubValue}>1-2 тижні</div>
          </div>
          <div>
            <div className={s.priceSubLabel}>Доставка</div>
            <div className={s.priceSubValue}>По всій Україні</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelTripod300;
