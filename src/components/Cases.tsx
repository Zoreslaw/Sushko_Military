import { motion } from 'framer-motion';
import { Container, Title, Text, Grid, Card, Stack, Badge, ActionIcon, Group, Box } from '@mantine/core';
import { IconVideo, IconBook, IconMapPin } from '@tabler/icons-react';

const Cases = () => {
  const cases = [
    {
      icon: IconVideo,
      title: 'Польова операція',
      location: 'Західна Україна',
      date: '2025',
      description: 'Використання для спостереження за позиціями противника в реальному часі. Забезпечило надійний контроль території.',
      gradient: { from: 'gold', to: 'orange', deg: 45 }
    },
    {
      icon: IconBook,
      title: 'Навчання ЗСУ',
      location: 'Житомир',
      date: '2025',
      description: 'Тренування підрозділів з використанням сучасного обладнання. Підвищення кваліфікації військовослужбовців.',
      gradient: { from: 'blue', to: 'cyan', deg: 45 }
    }
  ];

  return (
    <Box
      component="section"
      id="cases"
      style={{
        background: 'var(--military-dark)',
      }}
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
              Приклади використання
            </Badge>
            <Title
              order={2}
              size="3rem"
              ta="center"
              style={{ color: 'white' }}
            >
              Реальні кейси
            </Title>
            <Text
              size="lg"
              ta="center"
              c="dimmed"
              maw={600}
            >
              Як наші перископи допомагають у реальних бойових та навчальних умовах
            </Text>
          </Stack>
        </motion.div>
        
        <Grid gutter="xl">
          {cases.map((caseItem, index) => (
            <Grid.Col key={caseItem.title} span={{ base: 12, md: 6 }}>
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
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                    height: '100%',
                  }}
                >
                  <Stack gap="lg" h="100%">
                    <Group justify="space-between" align="flex-start">
                      <ActionIcon
                        size={80}
                        variant="gradient"
                        gradient={caseItem.gradient}
                        radius="xl"
                        className="glow-gold"
                      >
                        <caseItem.icon size={40} />
                      </ActionIcon>
                      
                      <Stack gap="xs" align="flex-end">
                        <Badge
                          size="md"
                          variant="gradient"
                          gradient={caseItem.gradient}
                        >
                          {caseItem.date}
                        </Badge>
                        <Group gap="xs">
                          <IconMapPin size={16} style={{ color: 'var(--primary-gold)' }} />
                          <Text size="sm" c="dimmed">{caseItem.location}</Text>
                        </Group>
                      </Stack>
                    </Group>
                    
                    <Box style={{ flex: 1 }}>
                      <Title order={3} size="h3" mb="md" style={{ color: 'white' }}>
                        {caseItem.title}
                      </Title>
                      <Text size="lg" c="dimmed" lh={1.6}>
                        {caseItem.description}
                      </Text>
                    </Box>
                    
                    <Group gap="md" mt="auto">
                      <Badge
                        size="sm"
                        variant="outline"
                        color="gold"
                        style={{
                          borderColor: 'var(--primary-gold)',
                          color: 'var(--primary-gold)',
                        }}
                      >
                        Успішне виконання
                      </Badge>
                      <Badge
                        size="sm"
                        variant="outline"
                        color="blue"
                        style={{
                          borderColor: 'var(--secondary-blue)',
                          color: 'var(--secondary-blue)',
                        }}
                      >
                        Військовий стандарт
                      </Badge>
                    </Group>
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

export default Cases; 