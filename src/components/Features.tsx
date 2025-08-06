import { motion } from 'framer-motion';
import { Container, Title, Grid, Card, Text, Box, Stack, Badge, ActionIcon } from '@mantine/core';
import { IconEye, IconShield, IconThermometer, IconLock } from '@tabler/icons-react';
import TextureBackground from './TextureBackground';

const Features = () => {
  const features = [
    {
      icon: IconEye,
      title: 'Дальність до 500 м',
      description: 'Чітке зображення навіть на великій відстані з високою роздільною здатністю.',
      color: 'gold',
      gradient: { from: 'gold', to: 'orange', deg: 45 }
    },
    {
      icon: IconShield,
      title: 'IP67: Захист',
      description: 'Повний пиловологозахист для роботи в найскладніших умовах.',
      color: 'blue',
      gradient: { from: 'blue', to: 'cyan', deg: 45 }
    },
    {
      icon: IconThermometer,
      title: 'Робота –40…+60 °C',
      description: 'Надійно працює в будь-яких кліматичних умовах та екстремальних температурах.',
      color: 'gold',
      gradient: { from: 'gold', to: 'orange', deg: 45 }
    },
    {
      icon: IconLock,
      title: 'Шифрування',
      description: 'Захист даних за військовими стандартами з високим рівнем безпеки.',
      color: 'blue',
      gradient: { from: 'blue', to: 'cyan', deg: 45 }
    }
  ];

  return (
    <Box
      component="section"
      id="features"
      className="hex-pattern"
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
              Переваги
            </Badge>
            <Title
              order={2}
              size="3rem"
              ta="center"
              style={{ color: 'white' }}
            >
              Чому обирають нас
            </Title>
            <Text
              size="lg"
              ta="center"
              c="dimmed"
              maw={600}
            >
              Наші перископи поєднують найновіші технології з надійністю військових стандартів
            </Text>
          </Stack>
        </motion.div>
        
        <Grid gutter="xl">
          {features.map((feature, index) => (
            <Grid.Col key={feature.title} span={{ base: 12, md: 6, lg: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  padding="xl"
                  radius="xl"
                  className="glass hover-lift"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                  }}
                >
                  {/* Gradient background accent */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${feature.gradient.from} 0%, ${feature.gradient.to} 100%)`,
                    }}
                  />
                  
                  <Stack align="center" gap="lg" style={{ position: 'relative', zIndex: 10 }}>
                    <ActionIcon
                      size={80}
                      variant="gradient"
                      gradient={feature.gradient}
                      radius="xl"
                      className="glow-gold"
                    >
                      <feature.icon size={40} />
                    </ActionIcon>
                    
                    <Stack gap="xs" align="center">
                      <Title order={3} size="h4" ta="center" style={{ color: 'white' }}>
                        {feature.title}
                      </Title>
                      <Text size="sm" ta="center" c="dimmed" lh={1.6}>
                        {feature.description}
                      </Text>
                    </Stack>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
