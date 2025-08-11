import { motion } from 'framer-motion';
import { Container, Title, Text, Grid, Stack, Group, Box, Divider, ActionIcon } from '@mantine/core';
import { IconVideoPlus, IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';

const Footer = () => {
  return (
    <Box
      component="footer"
      style={{
        background: 'var(--military-light)',
        borderTop: '1px solid rgba(255, 215, 0, 0.2)',
      }}
      py={80}
      px={{ base: 24, md: 80 }}
    >
      <Container size="xl">
        <Grid gutter="xl" mb={40}>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Stack gap="md">
                <Group gap="md">
                  <ActionIcon
                    size={48}
                    variant="gradient"
                      gradient={{ from: 'gold', to: 'orange', deg: 45 }}
                      radius="xl"
                      className="glow-gold"
                    >
                      <IconVideoPlus size={24} />
                    </ActionIcon>
                    <Title order={3} size="h3" style={{ color: 'white' }}>
                      SVM
                    </Title>
                  </Group>
                  <Text size="lg" c="dimmed" lh={1.6}>
                    Українські сучасні мобільні комплекси відеоспостереження.
                  </Text>
                </Stack>
              </motion.div>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Stack gap="md">
                  <Title order={4} size="h4" style={{ color: 'var(--primary-gold)' }}>
                    Контакти
                  </Title>
                  <Stack gap="sm">
                    <Group gap="sm">
                      <IconPhone size={16} style={{ color: 'var(--primary-gold)' }} />
                      <Text size="sm" c="dimmed">+380 63 389 60 15</Text>
                    </Group>
                    <Group gap="sm">
                      <IconMail size={16} style={{ color: 'var(--primary-gold)' }} />
                      <Text size="sm" c="dimmed">svm.ml.0754@gmail.com</Text>
                    </Group>
                    <Group gap="sm">
                      <IconMapPin size={16} style={{ color: 'var(--primary-gold)' }} />
                    <Text size="sm" c="dimmed">Київ, вул. Лебединська, 6</Text>
                  </Group>
                </Stack>
              </Stack>
            </motion.div>
          </Grid.Col>         
          <Grid.Col span={{ base: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Stack gap="md">
                <Title order={4} size="h4" style={{ color: 'var(--primary-gold)' }}>
                  Підтримка
                </Title>
                <Stack gap="sm">
                  <Text size="sm" c="dimmed">Технічна підтримка 24/7</Text>
                  <Text size="sm" c="dimmed">Гарантія 3 роки</Text>
                  <Text size="sm" c="dimmed">Навчання персоналу</Text>
                  <Text size="sm" c="dimmed">Сервісне обслуговування</Text>
                </Stack>
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>
        
        <Divider color="rgba(255, 215, 0, 0.2)" mb={40} />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Group justify="space-between" align="center" wrap="wrap">
            <Text size="sm" c="dimmed">
              © 2025 Українські мобільні комплекси відеоспостереження. Всі права захищені.
            </Text>
            <Group gap="md">
              <Text size="sm" c="dimmed">Політика конфіденційності</Text>
              <Text size="sm" c="dimmed">Умови використання</Text>
            </Group>
          </Group>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer; 