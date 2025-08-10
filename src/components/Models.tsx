import { useCallback } from 'react';
import { Card, Image, Badge, Group, Text, Button, Container, SimpleGrid, Title, Box } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import previewImg from '../assets/OR4EJM0.jpg';

interface ModelItemMeta {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
}

const MODELS: ModelItemMeta[] = [
  {
    slug: 'mk1',
    title: 'Перископ MK1',
    subtitle: 'Базова універсальна модель для широкого спектра задач',
    tags: ['Легка вага', 'Міцний корпус', 'Оптика HD'],
  },
  {
    slug: 'mk2',
    title: 'Перископ MK2',
    subtitle: 'Покращена стабілізація та модульні насадки',
    tags: ['Стабілізація', 'Модульний дизайн', 'IP67'],
  },
  {
    slug: 'mk3',
    title: 'Перископ MK3',
    subtitle: 'Професійний рівень з розширеною оптикою',
    tags: ['Pro-оптика', 'Низька помітність', 'Дальність+'],
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

const Models = () => {
  const handleOpen = useCallback((slug: string) => openModelBySlug(slug), []);

  return (
    <Box id="models" component="section" style={{ position: 'relative', padding: '6rem 0' }}>
      <Container>
        <Group align="center" justify="space-between" mb="xl">
          <div>
            <Badge size="lg" variant="gradient" gradient={{ from: 'gold', to: 'orange', deg: 45 }} className="glow-gold">
              Лінійка моделей
            </Badge>
            <Title order={2} mt="sm">Оберіть свою комплектацію</Title>
            <Text c="dimmed" mt="xs">
              Кожна модель створена під конкретні сценарії та умови застосування.
            </Text>
          </div>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {MODELS.map((model) => (
            <Card key={model.slug} className="glass" padding="lg" radius="lg" withBorder style={{ overflow: 'hidden' }}>
              <Card.Section>
                <Image src={previewImg} alt={model.title} h={200} fit="cover" />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={700} size="lg">{model.title}</Text>
                <Group gap={6}>
                  {model.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="light" color="gold">{tag}</Badge>
                  ))}
                </Group>
              </Group>

              <Text c="dimmed" size="sm" lineClamp={3}>
                {model.subtitle}
              </Text>

              <Group justify="space-between" mt="md">
                <Group gap={6}>
                  {model.tags.slice(2).map((tag) => (
                    <Badge key={tag} variant="outline" color="gold">{tag}</Badge>
                  ))}
                </Group>
                <Button rightSection={<IconArrowRight size={18} />} onClick={() => handleOpen(model.slug)}>
                  Детальніше
                </Button>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Models;

