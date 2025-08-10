import { motion } from 'framer-motion';
import { 
  Container, 
  Title, 
  Text, 
  Grid, 
  TextInput, 
  Textarea, 
  Button, 
  Stack, 
  Group, 
  Box,
  Paper,
  Badge,
  ActionIcon
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconPhone, IconMail, IconClock, IconMapPin, IconSend } from '@tabler/icons-react';

const Contact = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      organization: '',
      message: ''
    },
    validate: {
      name: (value) => value.trim().length < 2 ? 'Ім\'я має бути довшим' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Невірний email'),
      message: (value) => value.trim().length < 10 ? 'Повідомлення має бути довшим' : null,
    },
  });

  const handleSubmit = async (values: any) => {
    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!resp.ok) throw new Error('Network error');
      alert('Дякуємо! Повідомлення надіслано.');
      form.reset();
    } catch (e) {
      alert('Сталася помилка при надсиланні. Спробуйте ще раз пізніше.');
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      className="glass-dark"
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
              Контакти
            </Badge>
            <Title
              order={2}
              size="3rem"
              ta="center"
              style={{ color: 'white' }}
            >
              Зв'яжіться з нами
            </Title>
            <Text
              size="lg"
              ta="center"
              c="dimmed"
              maw={600}
            >
              Отримайте консультацію та індивідуальну пропозицію для вашого проекту
            </Text>
          </Stack>
        </motion.div>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Stack gap="xl">
                <Box>
                  <Title order={3} size="h3" mb="md" style={{ color: 'white' }}>
                    Офіс і виробництво
                  </Title>
                  <Text size="lg" c="dimmed" mb="xl">
                    Київ, вул. Військова, 12
                  </Text>
                </Box>
                
                <Stack gap="lg">
                  <Group gap="md">
                    <ActionIcon
                      size={48}
                      variant="gradient"
                      gradient={{ from: 'gold', to: 'orange', deg: 45 }}
                      radius="xl"
                      className="glow-gold"
                    >
                      <IconPhone size={24} />
                    </ActionIcon>
                    <Box>
                      <Text fw={600} size="lg">Телефон</Text>
                      <Text c="dimmed">+380 44 123 45 67</Text>
                    </Box>
                  </Group>
                  
                  <Group gap="md">
                    <ActionIcon
                      size={48}
                      variant="gradient"
                      gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                      radius="xl"
                      className="glow-blue"
                    >
                      <IconMail size={24} />
                    </ActionIcon>
                    <Box>
                      <Text fw={600} size="lg">Email</Text>
                      <Text c="dimmed">info@periscope.ua</Text>
                    </Box>
                  </Group>
                  
                  <Group gap="md">
                    <ActionIcon
                      size={48}
                      variant="gradient"
                      gradient={{ from: 'gold', to: 'orange', deg: 45 }}
                      radius="xl"
                      className="glow-gold"
                    >
                      <IconClock size={24} />
                    </ActionIcon>
                    <Box>
                      <Text fw={600} size="lg">Графік роботи</Text>
                      <Text c="dimmed">Пн-Пт: 9:00-18:00</Text>
                    </Box>
                  </Group>
                  
                  <Group gap="md">
                    <ActionIcon
                      size={48}
                      variant="gradient"
                      gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                      radius="xl"
                      className="glow-blue"
                    >
                      <IconMapPin size={24} />
                    </ActionIcon>
                    <Box>
                      <Text fw={600} size="lg">Адреса</Text>
                      <Text c="dimmed">Київ, вул. Військова, 12</Text>
                    </Box>
                  </Group>
                </Stack>
                
                <Paper
                  p={32}
                  radius="xl"
                  className="glass"
                  style={{
                    height: 300,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Stack align="center" gap="md">
                    <IconMapPin size={48} style={{ color: 'var(--primary-gold)' }} />
                    <Text ta="center" c="dimmed" size="lg">
                      Карта буде тут
                    </Text>
                  </Stack>
                </Paper>
              </Stack>
            </motion.div>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper
                p={40}
                radius="xl"
                className="glass"
                style={{
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                }}
              >
                <form onSubmit={form.onSubmit(handleSubmit)}>
                  <Stack gap="lg">
                    <TextInput
                      label="Ім'я"
                      placeholder="Ваше ім'я"
                      required
                      size="md"
                      {...form.getInputProps('name')}
                      styles={{
                        input: {
                          background: 'rgba(255, 255, 255, 0.9)',
                          color: 'black',
                          border: 'none',
                        },
                        label: {
                          color: 'white',
                          fontWeight: 600,
                        }
                      }}
                    />
                    
                    <TextInput
                      label="E-mail"
                      placeholder="your@email.com"
                      required
                      size="md"
                      {...form.getInputProps('email')}
                      styles={{
                        input: {
                          background: 'rgba(255, 255, 255, 0.9)',
                          color: 'black',
                          border: 'none',
                        },
                        label: {
                          color: 'white',
                          fontWeight: 600,
                        }
                      }}
                    />
                    
                    <TextInput
                      label="Організація"
                      placeholder="Назва організації"
                      size="md"
                      {...form.getInputProps('organization')}
                      styles={{
                        input: {
                          background: 'rgba(255, 255, 255, 0.9)',
                          color: 'black',
                          border: 'none',
                        },
                        label: {
                          color: 'white',
                          fontWeight: 600,
                        }
                      }}
                    />
                    
                    <Textarea
                      label="Повідомлення"
                      placeholder="Ваше повідомлення"
                      required
                      minRows={4}
                      size="md"
                      {...form.getInputProps('message')}
                      styles={{
                        input: {
                          background: 'rgba(255, 255, 255, 0.9)',
                          color: 'black',
                          border: 'none',
                          resize: 'none',
                        },
                        label: {
                          color: 'white',
                          fontWeight: 600,
                        }
                      }}
                    />
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        fullWidth
                        size="lg"
                        variant="gradient"
                        gradient={{ from: 'gold', to: 'orange', deg: 45 }}
                        className="glow-gold hover-lift"
                        leftSection={<IconSend size={20} />}
                      >
                        Відправити повідомлення
                      </Button>
                    </motion.div>
                  </Stack>
                </form>
              </Paper>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 