import { Badge, Box, Card, Group, Image, List, Progress, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCheck, IconSparkles, IconShield, IconGauge } from '@tabler/icons-react';
import photo from '../assets/OR4EJM0.jpg';

const ModelMK1 = () => {
  return (
    <Box>
      <Stack gap="lg">
        <Group justify="space-between" align="flex-start">
          <div>
            <Badge size="lg" variant="gradient" gradient={{ from: 'gold', to: 'orange', deg: 45 }}>MK1</Badge>
            <Title order={2} mt="sm">Перископ MK1</Title>
            <Text c="dimmed" mt="xs">Базова універсальна модель для широкого спектра задач</Text>
          </div>
          <Group gap="sm">
            <Badge variant="light" color="gold">Легка вага</Badge>
            <Badge variant="light" color="gold">Міцний корпус</Badge>
            <Badge variant="light" color="gold">Оптика HD</Badge>
          </Group>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Card className="glass" padding="lg">
            <Image src={photo} alt="MK1" radius="md" />
          </Card>
          <Stack>
            <Card padding="lg" className="glass">
              <Group>
                <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconSparkles size={18} /></ThemeIcon>
                <Text fw={600}>Ключові особливості</Text>
              </Group>
              <List spacing="xs" mt="sm" icon={<ThemeIcon color="gold" variant="light" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>}>
                <List.Item>Оптика з багатошаровим покриттям для чистої та контрастної картинки</List.Item>
                <List.Item>Антиблікове ущільнення та стійкість до вологи</List.Item>
                <List.Item>Ергономічні руківʼя та баланс ваги для довготривалого використання</List.Item>
              </List>
            </Card>

            <Card padding="lg" className="glass">
              <Group>
                <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconShield size={18} /></ThemeIcon>
                <Text fw={600}>Надійність</Text>
              </Group>
              <Progress value={82} color="gold" mt="sm" />
              <Text c="dimmed" size="sm" mt="xs">Результат випробувань у польових умовах</Text>
            </Card>
          </Stack>
        </SimpleGrid>

        <Card padding="lg" className="glass">
          <Group mb="sm">
            <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconGauge size={18} /></ThemeIcon>
            <Text fw={600}>Технічний огляд</Text>
          </Group>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            <Stack gap={4}>
              <Text size="sm" c="dimmed">Матеріал корпусу</Text>
              <Text fw={600}>Алюмінієвий сплав 6xxx</Text>
            </Stack>
            <Stack gap={4}>
              <Text size="sm" c="dimmed">Маса</Text>
              <Text fw={600}>1.2 кг</Text>
            </Stack>
            <Stack gap={4}>
              <Text size="sm" c="dimmed">Температурний режим</Text>
              <Text fw={600}>-20° — +50° C</Text>
            </Stack>
          </SimpleGrid>
        </Card>
      </Stack>
    </Box>
  );
};

export default ModelMK1;

