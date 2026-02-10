import ImageCarousel from '../components/ImageCarousel';
import { Gauge, Sparkles, Camera, Bolt, Check } from '../icons';
import s from './shared.module.css';

const TRIPOD_IMAGES = [
  '/tripod-600-1.jpg',
  '/tripod-600-2.jpg',
  '/tripod-600-3.jpg',
];

const ModelTripod600 = () => {
  return (
    <div className={s.wrapper}>
      {/* Header */}
      <div className={s.headerRow}>
        <div>
          <span className={s.badge}>Tripod-600</span>
          <h2 className={s.title}>Професійний штатив</h2>
          <p className={s.description}>
            Високий та міцний штатив для важкого обладнання
          </p>
        </div>
        <div className={s.headerBadges}>
          <span className={s.headerBadge}>60-90 см</span>
          <span className={s.headerBadge}>Ø 75 см</span>
          <span className={s.headerBadge}>20 кг навантаження</span>
          <span className={s.headerBadge}>1600 грн</span>
        </div>
      </div>

      {/* Hero: image + specs */}
      <div className={s.heroGrid}>
        <ImageCarousel images={TRIPOD_IMAGES} altPrefix="Tripod-600 фото" fallbackSrc="/vite.svg" autoPlay autoPlayInterval={5000} />

        <div className={s.infoStack}>
          <div className={s.card}>
            <div className={s.cardHeader}>
              <div className={s.cardIcon}><Gauge size={18} /></div>
              <span className={s.cardTitle}>Технічні характеристики</span>
            </div>
            <div className={s.specGrid}>
              <div className={s.specRow}>
                <span className={s.specLabel}>Робоча висота</span>
                <span className={s.specValue}>60-90 см</span>
              </div>
              <div className={s.specRow}>
                <span className={s.specLabel}>Діаметр розкладеного</span>
                <span className={s.specValue}>75 см</span>
              </div>
              <div className={s.specRow}>
                <span className={s.specLabel}>Навантаження</span>
                <span className={s.specValue}>20 кг</span>
              </div>
            </div>
          </div>

          <div className={s.card}>
            <div className={s.cardHeader}>
              <div className={s.cardIcon}><Sparkles size={18} /></div>
              <span className={s.cardTitle}>Переваги</span>
            </div>
            <ul className={s.checkList}>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Підвищена стійкість завдяки великому діаметру</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Розрахований на важке обладнання</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Регулювання висоти 60–90 см</li>
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
            <div className={s.scenarioTitle}>Тяжке обладнання</div>
            <div className={s.scenarioDesc}>Камери з великими об'єктивами, освітлювальна техніка</div>
          </div>
          <div>
            <div className={s.scenarioTitle}>Складні умови</div>
            <div className={s.scenarioDesc}>Висока стабільність на нерівних поверхнях</div>
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
            <div className={s.priceValue}>1 600 грн</div>
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

export default ModelTripod600;
