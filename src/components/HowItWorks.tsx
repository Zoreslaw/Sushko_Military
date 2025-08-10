import { motion } from 'framer-motion';
import { Container, Title, Text, Stack, Card, Group, Box, Badge, ActionIcon } from '@mantine/core';
import { IconSettings, IconWifi, IconEye } from '@tabler/icons-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: IconSettings,
      number: '01',
      title: 'Встановлення',
      description: 'Монтуйте перископ на позицію за допомогою стандартного кріплення. Простий процес встановлення займає не більше 15 хвилин.',
      gradient: { from: 'gold', to: 'orange', deg: 45 }
    },
    {
      icon: IconWifi,
      number: '02',
      title: 'Підключення',
      description: 'Підключіть до мережі та налаштуйте параметри спостереження. Інтуїтивний інтерфейс для швидкого налаштування.',
      gradient: { from: 'blue', to: 'cyan', deg: 45 }
    },
    {
      icon: IconEye,
      number: '03',
      title: 'Моніторинг',
      description: 'Отримуйте відео в реальному часі на будь-якому пристрої. Повний контроль та аналітика спостереження.',
      gradient: { from: 'gold', to: 'orange', deg: 45 }
    }
  ];

  return (
    <Box
      component="section"
      id="how"
      className="bg-chevrons"
      py={120}
      px={{ base: 24, md: 80 }}
    >
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack align="center" gap="md" mb={80}>
            <Badge
              size="lg"
              variant="gradient"
              gradient={{ from: 'gold', to: 'orange', deg: 45 }}
              className="glow-gold"
            >
              Процес
            </Badge>
            <Title
              order={2}
              size="3rem"
              ta="center"
              style={{ color: 'white' }}
            >
              Як це працює
            </Title>
            <Text
              size="lg"
              ta="center"
              c="dimmed"
              maw={600}
            >
              Простий процес встановлення та налаштування для швидкого запуску
            </Text>
          </Stack>
        </motion.div>
        
        <Stack gap="xl">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                padding="xl"
                radius="xl"
                className="glass hover-lift"
                style={{
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                }}
              >
                <Group gap="xl" align="flex-start" wrap="wrap">
                  <Stack align="center" gap="md">
                    <ActionIcon
                      size={80}
                      variant="gradient"
                      gradient={step.gradient}
                      radius="xl"
                      className="glow-gold"
                    >
                      <step.icon size={40} />
                    </ActionIcon>
                    <Badge
                      size="lg"
                      variant="gradient"
                      gradient={step.gradient}
                      className="glow-gold"
                    >
                      {step.number}
                    </Badge>
                  </Stack>
                  
                  <Box style={{ flex: 1, minWidth: 300 }}>
                    <Title order={3} size="h3" mb="md" style={{ color: 'white' }}>
                      {step.title}
                    </Title>
                    <Text size="lg" c="dimmed" lh={1.6}>
                      {step.description}
                    </Text>
                  </Box>
                </Group>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HowItWorks; 