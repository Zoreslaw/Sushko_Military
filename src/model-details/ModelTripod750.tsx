import ImageCarousel from '../components/ImageCarousel';
import { Gauge, Sparkles, Camera, Bolt, Check } from '../icons';
import s from './shared.module.css';

const TRIPOD_IMAGES = [
  'tripod-750-1.jpg',
  'tripod-750-2.jpg',
  'tripod-750-3.jpg',
];

const ModelTripod750 = () => {
  return (
    <div className={s.wrapper}>
      {/* Header */}
      <div className={s.headerRow}>
        <div>
          <span className={s.badge}>Tripod-750</span>
          <h2 className={s.title}>Професійний штатив</h2>
          <p className={s.description}>
            Високий штатив з підвищеною вантажопідйомністю
          </p>
        </div>
        <div className={s.headerBadges}>
          <span className={s.headerBadge}>75-130 см</span>
          <span className={s.headerBadge}>Ø 100 см</span>
          <span className={s.headerBadge}>20 кг навантаження</span>
          <span className={s.headerBadge}>1800 грн</span>
        </div>
      </div>

      {/* Hero: image + specs */}
      <div className={s.heroGrid}>
        <ImageCarousel images={TRIPOD_IMAGES} altPrefix="Tripod-750 фото" fallbackSrc="/vite.svg" autoPlay autoPlayInterval={5000} />

        <div className={s.infoStack}>
          <div className={s.card}>
            <div className={s.cardHeader}>
              <div className={s.cardIcon}><Gauge size={18} /></div>
              <span className={s.cardTitle}>Технічні характеристики</span>
            </div>
            <div className={s.specGrid}>
              <div className={s.specRow}>
                <span className={s.specLabel}>Робоча висота</span>
                <span className={s.specValue}>75-130 см</span>
              </div>
              <div className={s.specRow}>
                <span className={s.specLabel}>Діаметр розкладеного</span>
                <span className={s.specValue}>100 см</span>
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
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Стабільність при високих навантаженнях</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Регулювання висоти 75–130 см</li>
              <li className={s.checkItem}><span className={s.checkIcon}><Check size={12} /></span>Розширена опора: діаметр 100 см</li>
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
            <div className={s.scenarioDesc}>Камери, освітлення, комунікаційні модулі</div>
          </div>
          <div>
            <div className={s.scenarioTitle}>Складні умови</div>
            <div className={s.scenarioDesc}>Висока стабільність на різних поверхнях</div>
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
            <div className={s.priceValue}>1 800 грн</div>
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

export default ModelTripod750;
