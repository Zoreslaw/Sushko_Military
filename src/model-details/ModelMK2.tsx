import { Badge, Box, Card, Group, Image, List, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCheck, IconBolt, IconSettings, IconRulerMeasure } from '@tabler/icons-react';
import photo from '../assets/OR4EJM0.jpg';

const ModelMK2 = () => {
  return (
    <Box>
      <Stack gap="lg">
        <Group justify="space-between" align="flex-start">
          <div>
            <Badge size="lg" variant="gradient" gradient={{ from: 'gold', to: 'orange', deg: 45 }}>MK2</Badge>
            <Title order={2} mt="sm">Перископ MK2</Title>
            <Text c="dimmed" mt="xs">Покращена стабілізація та модульні насадки</Text>
          </div>
          <Group gap="sm">
            <Badge variant="light" color="gold">Стабілізація</Badge>
            <Badge variant="light" color="gold">Модульний дизайн</Badge>
            <Badge variant="light" color="gold">IP67</Badge>
          </Group>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Card className="glass" padding="lg">
            <Image src={photo} alt="MK2" radius="md" />
          </Card>
          <Stack>
            <Card padding="lg" className="glass">
              <Group>
                <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconBolt size={18} /></ThemeIcon>
                <Text fw={600}>Стабілізація та контроль</Text>
              </Group>
              <List spacing="xs" mt="sm" icon={<ThemeIcon color="gold" variant="light" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>}>
                <List.Item>Пасивна стабілізація з мультиосьовим демпфуванням</List.Item>
                <List.Item>Швидка зміна насадок без інструментів</List.Item>
                <List.Item>Захист від пилу та води IP67</List.Item>
              </List>
            </Card>

            <Card padding="lg" className="glass">
              <Group>
                <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconSettings size={18} /></ThemeIcon>
                <Text fw={600}>Сумісність</Text>
              </Group>
              <Text c="dimmed" size="sm" mt="xs">Платформа підтримує розширення для різних завдань: нічні фільтри, теленасадки, захисні екрани.</Text>
            </Card>
          </Stack>
        </SimpleGrid>

        <Card padding="lg" className="glass">
          <Group mb="sm">
            <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconRulerMeasure size={18} /></ThemeIcon>
            <Text fw={600}>Технічний огляд</Text>
          </Group>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            <Stack gap={4}>
              <Text size="sm" c="dimmed">Матеріал корпусу</Text>
              <Text fw={600}>Композит + алюміній</Text>
            </Stack>
            <Stack gap={4}>
              <Text size="sm" c="dimmed">Маса</Text>
              <Text fw={600}>1.3 кг</Text>
            </Stack>
            <Stack gap={4}>
              <Text size="sm" c="dimmed">Ступінь захисту</Text>
              <Text fw={600}>IP67</Text>
            </Stack>
          </SimpleGrid>
        </Card>
      </Stack>
    </Box>
  );
};

export default ModelMK2;

