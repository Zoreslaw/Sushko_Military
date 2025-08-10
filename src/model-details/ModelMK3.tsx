import { Badge, Box, Card, Group, Image, List, Progress, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCheck, IconScan, IconZoomScan, IconCompass } from '@tabler/icons-react';
import photo from '../assets/OR4EJM0.jpg';

const ModelMK3 = () => {
  return (
    <Box>
      <Stack gap="lg">
        <Group justify="space-between" align="flex-start">
          <div>
            <Badge size="lg" variant="gradient" gradient={{ from: 'gold', to: 'orange', deg: 45 }}>MK3</Badge>
            <Title order={2} mt="sm">Перископ MK3</Title>
            <Text c="dimmed" mt="xs">Професійний рівень з розширеною оптикою</Text>
          </div>
          <Group gap="sm">
            <Badge variant="light" color="gold">Pro-оптика</Badge>
            <Badge variant="light" color="gold">Низька помітність</Badge>
            <Badge variant="light" color="gold">Дальність+</Badge>
          </Group>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Card className="glass" padding="lg">
            <Image src={photo} alt="MK3" radius="md" />
          </Card>
          <Stack>
            <Card padding="lg" className="glass">
              <Group>
                <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconScan size={18} /></ThemeIcon>
                <Text fw={600}>Оптика та спостереження</Text>
              </Group>
              <List spacing="xs" mt="sm" icon={<ThemeIcon color="gold" variant="light" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>}>
                <List.Item>Покращена схема відбиття з високою світлопередачею</List.Item>
                <List.Item>Зменшення відблисків і помітності на полі</List.Item>
                <List.Item>Підвищена дальність спостереження без втрати чіткості</List.Item>
              </List>
            </Card>

            <Card padding="lg" className="glass">
              <Group>
                <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconZoomScan size={18} /></ThemeIcon>
                <Text fw={600}>Точність</Text>
              </Group>
              <Progress value={92} color="gold" mt="sm" />
              <Text c="dimmed" size="sm" mt="xs">Польові тести на довгій дистанції</Text>
            </Card>
          </Stack>
        </SimpleGrid>

        <Card padding="lg" className="glass">
          <Group mb="sm">
            <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconCompass size={18} /></ThemeIcon>
            <Text fw={600}>Технічний огляд</Text>
          </Group>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            <Stack gap={4}>
              <Text size="sm" c="dimmed">Матеріал корпусу</Text>
              <Text fw={600}>Титан + композити</Text>
            </Stack>
            <Stack gap={4}>
              <Text size="sm" c="dimmed">Маса</Text>
              <Text fw={600}>1.4 кг</Text>
            </Stack>
            <Stack gap={4}>
              <Text size="sm" c="dimmed">Світлопередача</Text>
              <Text fw={600}>Вища на 18%</Text>
            </Stack>
          </SimpleGrid>
        </Card>
      </Stack>
    </Box>
  );
};

export default ModelMK3;

