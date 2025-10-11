import { Badge, Box, Card, Group, List, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCheck, IconSparkles, IconGauge, IconBolt, IconDeviceCctv } from '@tabler/icons-react';
import ImageCarousel from '../components/ImageCarousel';

// Images for the tripod-600 (reuse existing tripod images as placeholders)
const TRIPOD_IMAGES = [
  '/tripod-600-1.jpg',
  '/tripod-600-2.jpg',
  '/tripod-600-3.jpg'
];

const ModelTripod600 = () => {
  return (
    <Box>
      <Stack gap="lg">
        {/* Header */}
        <Group justify="space-between" align="flex-start">
          <div>
            <Badge size="lg" variant="gradient" gradient={{ from: 'gold', to: 'orange', deg: 45 }}>Tripod-600</Badge>
            <Title order={2} mt="sm">Професійний штатив</Title>
            <Text c="dimmed" mt="xs">
              Високий та міцний штатив для важкого обладнання
            </Text>
          </div>
          <Group gap="sm">
            <Badge variant="light" color="gold">60-90 см</Badge>
            <Badge variant="light" color="gold">Ø 75 см</Badge>
            <Badge variant="light" color="gold">20 кг навантаження</Badge>
            <Badge variant="light" color="gold">1600 грн</Badge>
          </Group>
        </Group>

        {/* Hero row: image slider + specifications */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <ImageCarousel
            images={TRIPOD_IMAGES}
            altPrefix="Tripod-600 фото"
            fallbackSrc="/vite.svg"
            autoPlay
            autoPlayInterval={5000}
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
                  <Text fw={600}>60-90 см</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Діаметр розкладеного</Text>
                  <Text fw={600}>75 см</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Навантаження</Text>
                  <Text fw={600}>20 кг</Text>
                </Group>
              </SimpleGrid>
            </Card>

            <Card padding="lg" className="glass" radius="md" withBorder>
              <Group>
                <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconSparkles size={18} /></ThemeIcon>
                <Text fw={600}>Переваги</Text>
              </Group>
              <List spacing="xs" mt="sm" icon={<ThemeIcon color="gold" variant="light" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>}>
                <List.Item>Підвищена стійкість завдяки великому діаметру</List.Item>
                <List.Item>Розрахований на важке обладнання</List.Item>
                <List.Item>Регулювання висоти 60–90 см</List.Item>
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
              <Text fw={600} mb="xs">Тяжке обладнання</Text>
              <Text size="sm" c="dimmed">Камери з великими об’єктивами, освітлювальна техніка</Text>
            </Box>
            <Box>
              <Text fw={600} mb="xs">Польові умови</Text>
              <Text size="sm" c="dimmed">Висока стабільність на нерівних поверхнях</Text>
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
              <Text size="lg" fw={700}>1 600 грн</Text>
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

export default ModelTripod600;


