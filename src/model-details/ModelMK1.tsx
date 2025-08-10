import { Badge, Box, Card, Group, Image, List, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCheck, IconSparkles, IconGauge, IconBolt, IconAntennaBars5, IconDeviceCctv, IconBattery3, IconTopologyStar3 } from '@tabler/icons-react';

// Images are expected in /public; keep strings to avoid build issues if assets are missing
const CASE_IMG_SRC = '/svm-maxi-case.jpg';
const SCHEME_IMG_SRC = '/svm-maxi-sheet-1.jpg';

const ModelMK1 = () => {
  return (
    <Box>
      <Stack gap="lg">
        {/* Header */}
        <Group justify="space-between" align="flex-start">
          <div>
            <Badge size="lg" variant="gradient" gradient={{ from: 'gold', to: 'orange', deg: 45 }}>SVM‑MAXI</Badge>
            <Title order={2} mt="sm">Мобільний комплекс відеоспостереження</Title>
            <Text c="dimmed" mt="xs">
              Повноцінне рішення для тактичного моніторингу під’їзних шляхів та позицій у складних польових умовах
            </Text>
          </div>
          <Group gap="sm">
            <Badge variant="light" color="gold">До 48 год автономно</Badge>
            <Badge variant="light" color="gold">Дальність спостереження до 1 км</Badge>
            <Badge variant="light" color="gold">До 4 камер + 1 IP</Badge>
          </Group>
        </Group>

        {/* Hero row: image + purpose */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Card className="glass overflow-hidden" padding="lg" withBorder radius="md">
            {/* Make image full-bleed within the card */}
            <Card.Section inheritPadding={false} p={0} withBorder={false}>
              <Image
                src={CASE_IMG_SRC}
                alt="SVM‑MAXI кейс моніторингу"
                fit="cover"

                w="100%"
                radius={0}
                fallbackSrc="/vite.svg"
              />
            </Card.Section>
          </Card>

          <Stack>
            <Card padding="lg" className="glass" radius="md" withBorder>
              <Group>
                <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconDeviceCctv size={18} /></ThemeIcon>
                <Text fw={600}>Призначення та можливості</Text>
              </Group>
              <List spacing="xs" mt="sm" icon={<ThemeIcon color="gold" variant="light" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>}>
                <List.Item>Контроль під’їзних шляхів і позицій у складних умовах</List.Item>
                <List.Item>Зона спостереження від 30 м до кількох кілометрів</List.Item>
                <List.Item>Підтримка до 4 аналогових камер та однієї IP‑камери</List.Item>
                <List.Item>Масштабування мережі та об’єднання кількох комплексів SVM‑MAXI</List.Item>
              </List>
              <List spacing="xs" mt="xs" icon={<ThemeIcon color="gold" variant="light" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>}>
                <List.Item>Нічний режим: ІЧ‑підсвітка відключена; підтримка ПНБ/тепловізорів з аналоговим відеовиходом</List.Item>
                <List.Item>Можливість під’єднання ПК для персональних налаштувань камер та додаткового моніторингу</List.Item>
              </List>
            </Card>

            <Card padding="lg" className="glass" radius="md" withBorder>
              <Group>
                <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconAntennaBars5 size={18} /></ThemeIcon>
                <Text fw={600}>Дальність і автономність</Text>
              </Group>
              <List spacing="xs" mt="sm" icon={<ThemeIcon color="gold" variant="light" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>}>
                <List.Item>Автономна робота до 48 годин</List.Item>
                <List.Item>Відстань між оператором і камерою до 50 м (аналог)</List.Item>
                <List.Item>IP‑відео: до 100 м напряму; до 1 км через UTP/LAN; кілька кілометрів через оптоволокно</List.Item>
              </List>
            </Card>
          </Stack>
        </SimpleGrid>

        {/* Deployment scheme */}
        <Card padding="lg" className="glass" withBorder radius="md">
          <Group mb="sm">
            <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconBolt size={18} /></ThemeIcon>
            <Text fw={600}>Схема розгортання</Text>
          </Group>
          <Text c="dimmed" mb="md">
            Оператор може знаходитись у віддаленому місці від основного кейсу; мережа масштабується з можливістю об’єднання кількох комплексів SVM‑MAXI. Дальність спостереження до 1 км, з оптоволоконним зв’язком — до кількох кілометрів.
          </Text>
        </Card>

        {/* Connectivity & Network */}
        <Card padding="lg" className="glass" radius="md" withBorder>
          <Group mb="sm">
            <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconTopologyStar3 size={18} /></ThemeIcon>
            <Text fw={600}>Підключення та мережа</Text>
          </Group>
          <List spacing="xs" icon={<ThemeIcon color="gold" variant="light" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>}>
            <List.Item>Аналоговий відеосигнал до 50 м</List.Item>
            <List.Item>IP‑відеосигнал до 100 м напряму</List.Item>
            <List.Item>IP‑відеосигнал від 100 м — через UTP/LAN до 1 км</List.Item>
            <List.Item>Оптоволоконний зв’язок — збільшення відстані до кількох кілометрів</List.Item>
            <List.Item>ПК для персональних налаштувань камер та додаткового моніторингу</List.Item>
          </List>
        </Card>

        {/* Flexibility & kit */}
        <Card padding="lg" className="glass" radius="md" withBorder>
          <Group mb="sm">
            <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconSparkles size={18} /></ThemeIcon>
            <Text fw={600}>Гнучкість та комплектація</Text>
          </Group>
          <List spacing="xs" icon={<ThemeIcon color="gold" variant="light" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>}>
            <List.Item>Індивідуальне укомплектування залежно від потреб</List.Item>
            <List.Item>Об’єктиви від 3.6 мм до 70 мм; підтримка різних типів</List.Item>
            <List.Item>Підтримка поворотних IP‑камер та платформ для різних типів камер</List.Item>
            <List.Item>Універсальний кронштейн: встановлення на стіни, стовпи, дерева, штатив чи щоглу</List.Item>
            <List.Item>Додаткове кріплення з рейкою Weaver; сумісність із ПНБ/тепловізорами (аналоговий вихід)</List.Item>
          </List>
        </Card>

        {/* Main monitoring case */}
        <Card padding="lg" className="glass" radius="md" withBorder>
          <Group mb="sm">
            <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconGauge size={18} /></ThemeIcon>
            <Text fw={600}>Головний кейс моніторингу</Text>
          </Group>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            <Stack gap={4}>
              <Text size="sm" c="dimmed">Екран</Text>
              <Text fw={600}>10" HD, індикація заряду</Text>
            </Stack>
            <Stack gap={4}>
              <Text size="sm" c="dimmed">Інтерфейси</Text>
              <Text fw={600}>2× відео, 2× живлення камер; роз’єми для IP‑камери та ПК</Text>
            </Stack>
            <Stack gap={4}>
              <Text size="sm" c="dimmed">Заряджання</Text>
              <Text fw={600}>Зарядний пристрій до 10А; 0→90% ≈ 4 год</Text>
            </Stack>
          </SimpleGrid>
          <List spacing="xs" mt="md" icon={<ThemeIcon color="gold" variant="light" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>}>
            <List.Item>Два роз’єми для відеосигналу та два — для живлення камер</List.Item>
            <List.Item>Два роз’єми для підключення камер через платформу з живленням</List.Item>
            <List.Item>Два роз’єми для підключення IP‑камери та ПК (віддалений моніторинг)</List.Item>
          </List>
        </Card>

        {/* Optional power case */}
        <Card padding="lg" className="glass" radius="md" withBorder>
          <Group mb="sm">
            <ThemeIcon variant="gradient" gradient={{ from: 'gold', to: 'orange' }} radius="xl"><IconBattery3 size={18} /></ThemeIcon>
            <Text fw={600}>Опційний кейс живлення</Text>
          </Group>
          <List spacing="xs" icon={<ThemeIcon color="gold" variant="light" size={20} radius="xl"><IconCheck size={14} /></ThemeIcon>}>
            <List.Item>Додаткове живлення для віддалених камер — робота на кілька діб без перезарядки</List.Item>
            <List.Item>Підтримка розгортань з великою кількістю вузлів спостереження</List.Item>
          </List>
        </Card>
      </Stack>
    </Box>
  );
};

export default ModelMK1;
