import { useCallback } from 'react';
import { Card, Badge, Group, Text, Button, Container, SimpleGrid, Title, Box, Stack } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconArrowRight } from '@tabler/icons-react';
import previewImg from '../assets/OR4EJM0.jpg';

interface ModelItemMeta {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  image?: string;
  images?: string[];
  priceUah?: number;
  category: string;
}

interface CategoryData {
  id: string;
  label: string;
  models: ModelItemMeta[];
}

const CATEGORIES: CategoryData[] = [
  {
    id: 'svm',
    label: 'SVM',
    models: [
      {
        slug: 'mk1',
        title: 'SVM‑MAXI',
        subtitle: 'Мобільний комплекс відеоспостереження для польових умов',
        tags: ['До 48 год', 'До 1 км', '4× аналог + 1× IP'],
        image: '/svm-maxi-case.jpg',
        category: 'svm',
      },
      // {
      //   slug: 'mk2',
      //   title: 'Перископ MK2',
      //   subtitle: 'Покращена стабілізація та модульні насадки',
      //   tags: ['Стабілізація', 'Модульний дизайн', 'IP67'],
      //   category: 'svm',
      // },
      // {
      //   slug: 'mk3',
      //   title: 'Перископ MK3',
      //   subtitle: 'Професійний рівень з розширеною оптикою',
      //   tags: ['Pro-оптика', 'Низька помітність', 'Дальність+'],
      //   category: 'svm',
      // },
    ]
  },
  {
    id: 'tripods',
    label: 'ТРИНОГІ',
    models: [
      {
        slug: 'tripod-300',
        title: 'Tripod-300',
        subtitle: 'Робоча висота 30–45 см · Діаметр у розкладеному стані 35 см · Рекомендоване навантаження 7 кг',
        tags: ['30–45 см', 'Ø 35 см', '7 кг'],
        images: ['/tripod-300-1.jpg', '/tripod-300-2.jpg', '/tripod-300-3.jpg'],
        priceUah: 700,
        category: 'tripods',
        image: '/tripod-300-1.jpg',
      },
          {
            slug: 'tripod-600',
            title: 'Tripod-600',
            subtitle: 'Робоча висота 60–90 см · Діаметр у розкладеному стані 75 см · Рекомендоване навантаження 20 кг',
            tags: ['60–90 см', 'Ø 75 см', '20 кг'],
            images: ['/tripod-600-1.jpg', '/tripod-600-2.jpg', '/tripod-600-3.jpg'],
            priceUah: 1600,
            category: 'tripods',
            image: '/tripod-600-1.jpg',
          },
          {
            slug: 'tripod-750',
            title: 'Tripod-750',
            subtitle: 'Робоча висота 75–130 см · Діаметр у розкладеному стані 100 см · Рекомендоване навантаження 20 кг',
            tags: ['75–130 см', 'Ø 100 см', '20 кг'],
            images: ['/tripod-750-1.jpg', '/tripod-750-2.jpg', '/tripod-750-3.jpg'],
            priceUah: 1800,
            category: 'tripods',
            image: '/tripod-750-1.jpg',
          },
    ]
  },
];

const openModelBySlug = (slug: string) => {
  // Use hash deep-link so back/forward works and link can be shared
  const newHash = `#m/${slug}`;
  if (window.location.hash !== newHash) {
    window.location.hash = newHash;
  } else {
    // if already same, force dispatch
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }
};

// Компонент карточки товара
const ProductCard = ({ model, handleOpen }: { model: ModelItemMeta; handleOpen: (slug: string) => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, margin: '-50px' }}
  >
    <Card 
      className="glass" 
      padding="lg" 
      radius="lg" 
      withBorder 
      style={{ 
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Card.Section p={0} style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
        {/* Blurred background */}
        <img
          aria-hidden
          src={model.image ?? previewImg}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'blur(12px)',
            transform: 'scale(1.08)',
            zIndex: 0,
          }}
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/vite.svg'; }}
          draggable={false}
        />
        {/* Foreground image, always fully visible */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 8,
          }}
        >
          <img
            src={model.image ?? previewImg}
            alt={model.title}
            style={{
              height: '100%',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block',
            }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/vite.svg'; }}
            draggable={false}
          />
        </div>
      </Card.Section>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Group justify="space-between" mt="md" mb="xs">
          <Text 
            fw={700} 
            size="lg"
            lineClamp={2}
            style={{
              color: 'white',
              fontSize: '1.25rem',
              letterSpacing: '0.02em',
              flex: 1,
            }}
          >
            {model.title}
          </Text>
          <Group gap={6}>
            {model.tags.slice(0, 2).map((tag) => (
              <Badge 
                key={tag} 
                variant="gradient" 
                gradient={{ from: 'gold', to: 'orange', deg: 45 }}
                size="sm"
                style={{
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {tag}
              </Badge>
            ))}
          </Group>
        </Group>

        <Text 
          c="dimmed" 
          size="sm" 
          lineClamp={3}
          style={{
            color: 'rgba(255, 255, 255, 0.75)',
            lineHeight: 1.5,
            fontSize: '0.95rem',
            flex: 1,
          }}
        >
          {model.subtitle}
        </Text>

        <Group justify="space-between" mt="md" style={{ marginTop: 'auto' }}>
          <Group gap={6}>
            {model.tags.slice(2).map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                color="gold"
                size="xs"
                style={{
                  borderColor: 'var(--primary-gold)',
                  color: 'var(--primary-gold)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                {tag}
              </Badge>
            ))}
          </Group>
          {model.priceUah && (
            <Text fw={700} style={{ color: 'var(--primary-gold)' }}>{model.priceUah.toLocaleString('uk-UA')} грн</Text>
          )}
          <Button 
            rightSection={<IconArrowRight size={18} />} 
            onClick={() => handleOpen(model.slug)}
            variant="gradient"
            gradient={{ from: 'gold', to: 'orange', deg: 45 }}
            size="sm"
            style={{
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Детальніше
          </Button>
        </Group>
      </div>
    </Card>
  </motion.div>
);

const Models = () => {
  const handleOpen = useCallback((slug: string) => openModelBySlug(slug), []);

  return (
    <Box id="models" component="section" style={{ position: 'relative', padding: '6rem 0' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack align="center" gap="xl" mb={64}>
            <div style={{ textAlign: 'center' }}>
              <Badge 
                size="lg" 
                variant="gradient" 
                gradient={{ from: 'gold', to: 'orange', deg: 45 }} 
                className="glow-gold"
                style={{
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '0.9rem',
                }}
              >
                Лінійка моделей
              </Badge>
              <Title 
                order={2} 
                mt="sm"
                style={{
                  color: 'white',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  letterSpacing: '0.02em',
                  lineHeight: 1.1,
                }}
              >
                Оберіть свою комплектацію
              </Title>
            </div>
            
          </Stack>
        </motion.div>

        {/* Основной контент */}
        <Stack gap={0}>
          {CATEGORIES.map((category, categoryIndex) => (
            <div key={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  style={{
                    position: 'relative',
                    padding: '1.5rem 0 4.5rem 0',
                    borderRadius: 'var(--mantine-radius-xl)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 215, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Декоративные углы */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      width: '20px',
                      height: '20px',
                      borderTop: '2px solid var(--primary-gold)',
                      borderLeft: '2px solid var(--primary-gold)',
                      borderRadius: '4px 0 0 0',
                    }}
                  />
                  <Box
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      width: '20px',
                      height: '20px',
                      borderTop: '2px solid var(--primary-gold)',
                      borderRight: '2px solid var(--primary-gold)',
                      borderRadius: '0 4px 0 0',
                    }}
                  />
                  <Box
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      width: '20px',
                      height: '20px',
                      borderBottom: '2px solid var(--primary-gold)',
                      borderLeft: '2px solid var(--primary-gold)',
                      borderRadius: '0 0 0 4px',
                    }}
                  />
                  <Box
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      width: '20px',
                      height: '20px',
                      borderBottom: '2px solid var(--primary-gold)',
                      borderRight: '2px solid var(--primary-gold)',
                      borderRadius: '0 0 4px 0',
                    }}
                  />

                  <Container size="xl">
                    <Stack gap='3rem'>
                      {/* Заголовок категории */}
                      <Box style={{ textAlign: 'center', position: 'relative' }}>                        
                        <Title 
                          order={2} 
                          size="h1"
                          style={{ 
                            color: 'white',
                            fontWeight: 800,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            position: 'relative',
                            display: 'inline-block',
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            lineHeight: 1.1,
                            fontFamily: 'Oswald, Manrope, sans-serif',
                          }}
                        >
                          {category.label}
                        </Title>
                        
                        {/* Подчеркивание */}
                        <Box
                          style={{
                            position: 'absolute',
                            bottom: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '80px',
                            height: '4px',
                            background: 'linear-gradient(90deg, var(--primary-gold) 0%, var(--accent-orange) 100%)',
                            borderRadius: '2px',
                            boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
                          }}
                        />
                      </Box>
                      
                      {/* Сетка товаров */}
                      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
                        {category.models.map((model) => (
                          <ProductCard key={model.slug} model={model} handleOpen={handleOpen} />
                        ))}
                      </SimpleGrid>
                    </Stack>
                  </Container>
                </Box>
              </motion.div>
              
              {/* Дивайдер между категориями - отдельный блок */}
              {categoryIndex < CATEGORIES.length - 1 && (
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '4rem',
                    margin: '2rem 0',
                  }}
                >
                  <Box
                    style={{
                      width: '120px',
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent 0%, var(--primary-gold) 50%, transparent 100%)',
                      position: 'relative',
                    }}
                  >
                    <Box
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '12px',
                        height: '12px',
                        background: 'var(--primary-gold)',
                        borderRadius: '50%',
                        boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)',
                      }}
                    />
                  </Box>
                </Box>
              )}
            </div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Models;

