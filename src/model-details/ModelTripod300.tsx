import { Badge, Box, Card, Group, List, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCheck, IconSparkles, IconGauge, IconBolt, IconDeviceCctv } from '@tabler/icons-react';
import ImageCarousel from '../components/ImageCarousel';

// Images for the tripod
const TRIPOD_IMAGES = [
  '/tripod-300-1.jpg',
  '/tripod-300-2.jpg',
  '/tripod-300-3.jpg'
];

const ModelTripod300 = () => {

  return (
    <Box>
      <Stack gap="lg">
        {/* Header */}
        <Group justify="space-between" align="flex-start">
          <div>
            <Badge size="lg" variant="gradient" gradient={{ from: 'gold', to: 'orange', deg: 45 }}>Tripod-300</Badge>
            <Title order={2} mt="sm">Професійний штатив</Title>
            <Text c="dimmed" mt="xs">
              Компактний та надійний штатив для військового обладнання з регульованою висотою
            </Text>
          </div>
          <Group gap="sm">
            <Badge variant="light" color="gold">30-45 см</Badge>
            <Badge variant="light" color="gold">Ø 35 см</Badge>
            <Badge variant="light" color="gold">7 кг навантаження</Badge>
            <Badge variant="light" color="gold">700 грн</Badge>
          </Group>
        </Group>

        {/* Hero row: image slider + specifications */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <ImageCarousel
            images={TRIPOD_IMAGES}
            altPrefix="Tripod-300 фото"
            fallbackSrc="/vite.svg"
            autoPlay
          />

          <Stack>
            <Card padding="lg" className="glass" radius="md" withBorder>
              <Group>
                <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconGauge size={18} /></ThemeIcon>
                <Text fw={600}>Технічні характеристики</Text>
              </Group>
              <SimpleGrid cols={1} spacing="md" mt="sm">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Робоча висота</Text>
                  <Text fw={600}>30-45 см</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Діаметр розкладеного</Text>
                  <Text fw={600}>35 см</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Навантаження</Text>
                  <Text fw={600}>7 кг</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Матеріал ніжок</Text>
                  <Text fw={600}>Алюміній</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Матеріал платформи</Text>
                  <Text fw={600}>Чорний пластик</Text>
                </Group>
              </SimpleGrid>
            </Card>

            <Card padding="lg" className="glass" radius="md" withBorder>
              <Group>
                <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconSparkles size={18} /></ThemeIcon>
                <Text fw={600}>Переваги</Text>
              </Group>
              <List spacing="xs" mt="sm" icon={<ThemeIcon color="gold" variant="light" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>}>
                <List.Item>Компактні розміри для транспортування</List.Item>
                <List.Item>Швидке розгортання за 30 секунд</List.Item>
                <List.Item>Стабільна опора на будь-якій поверхні</List.Item>
                <List.Item>Універсальне кріплення для різного обладнання</List.Item>
                <List.Item>Міцна конструкція для польових умов</List.Item>
              </List>
            </Card>
          </Stack>
        </SimpleGrid>

        {/* Usage scenarios */}
        <Card padding="lg" className="glass" radius="md" withBorder>
          <Group mb="sm">
            <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconDeviceCctv size={18} /></ThemeIcon>
            <Text fw={600}>Сценарії використання</Text>
          </Group>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            <Box>
              <Text fw={600} mb="xs">Відеоспостереження</Text>
              <Text size="sm" c="dimmed">Встановлення камер спостереження на позиціях, контроль під'їзних шляхів</Text>
            </Box>
            <Box>
              <Text fw={600} mb="xs">Оптичні прилади</Text>
              <Text size="sm" c="dimmed">Підтримка тепловізорів, приладів нічного бачення, біноклів</Text>
            </Box>
            <Box>
              <Text fw={600} mb="xs">Комунікаційне обладнання</Text>
              <Text size="sm" c="dimmed">Антени, рації, портативні станції зв'язку</Text>
            </Box>
            <Box>
              <Text fw={600} mb="xs">Освітлення</Text>
              <Text size="sm" c="dimmed">Прожектори, ІЧ-підсвітка, сигнальні ліхтарі</Text>
            </Box>
          </SimpleGrid>
        </Card>

        {/* Price and ordering */}
        <Card padding="lg" className="glass" radius="md" withBorder>
          <Group mb="sm">
            <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconBolt size={18} /></ThemeIcon>
            <Text fw={600}>Замовлення та доставка</Text>
          </Group>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            <Box>
              <Text fw={600} mb="xs" style={{ color: 'var(--primary-gold)' }}>Ціна</Text>
              <Text size="lg" fw={700}>700 грн</Text>
            </Box>
            <Box>
              <Text fw={600} mb="xs">Термін виготовлення</Text>
              <Text size="sm" c="dimmed">1-2 тижні</Text>
            </Box>
            <Box>
              <Text fw={600} mb="xs">Доставка</Text>
              <Text size="sm" c="dimmed">По всій Україні</Text>
            </Box>
          </SimpleGrid>
        </Card>
      </Stack>
    </Box>
  );
};

export default ModelTripod300;
