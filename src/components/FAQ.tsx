
import { motion } from 'framer-motion';
import { Container, Title, Text, Stack, Badge, Accordion, Box } from '@mantine/core';


const FAQ = () => {


  const faqs = [
    {
      question: 'Чи можна підключити кілька камер одночасно?',
      answer: 'Так, система підтримує підключення до 4 камер одночасно з можливістю перемикання між ними в реальному часі. Всі камери синхронізуються та передають дані централізовано.'
    },
    {
      question: 'Яка роздільна здатність відео та частота кадрів?',
      answer: 'Система забезпечує Full HD 1080p роздільну здатність при 30 кадрах на секунду. При необхідності можна налаштувати різні режими якості для оптимізації трафіку.'
    },
    {
      question: 'Чи працює обладнання в темряві та умовах низької освітленості?',
      answer: 'Так, перископи мають вбудовану ІЧ-підсвітку для роботи в умовах низької освітленості. Додатково доступні зовнішні ІЧ-прожектори для роботи в повній темряві.'
    },
    {
      question: 'Який термін гарантії та технічної підтримки?',
      answer: 'Надається 3 роки гарантії на всі компоненти системи. Технічна підтримка доступна 24/7 з можливістю дистанційного налаштування та діагностики обладнання.'
    },
    {
      question: 'Чи можна інтегрувати з існуючими системами спостереження?',
      answer: 'Система має відкриті API та підтримує стандартні протоколи інтеграції. Можна легко підключити до існуючих центрів спостереження та систем керування.'
    },
    {
      question: 'Які вимоги до мережевої інфраструктури?',
      answer: 'Для роботи потрібен стабільний інтернет зі швидкістю від 5 Мбіт/с. Система підтримує як проводне підключення через Ethernet, так і бездротове через Wi-Fi або 4G.'
    }
  ];

  return (
    <Box
      component="section"
      id="faq"
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
              FAQ
            </Badge>
            <Title
              order={2}
              size="3rem"
              ta="center"
              style={{ color: 'white' }}
            >
              Часті запитання
            </Title>
            <Text
              size="lg"
              ta="center"
              c="dimmed"
              maw={600}
            >
              Відповіді на найбільш поширені питання про наше обладнання
            </Text>
          </Stack>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box className="glass" p="xl" style={{ border: '1px solid rgba(255, 215, 0, 0.2)', borderRadius: 'var(--mantine-radius-xl)' }}>
            <Accordion
              variant="separated"
              radius="md"
              styles={{
                item: {
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                  borderRadius: 'var(--mantine-radius-md)',
                  background: 'rgba(255, 255, 255, 0.05)',
                },
                control: {
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  padding: 'var(--mantine-spacing-lg)',
                },
                content: {
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: 'var(--mantine-spacing-lg)',
                  lineHeight: 1.6,
                },
                chevron: {
                  color: 'var(--primary-gold)',
                }
              }}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Accordion.Item value={`faq-${index}`}>
                    <Accordion.Control>
                      {faq.question}
                    </Accordion.Control>
                    <Accordion.Panel>
                      {faq.answer}
                    </Accordion.Panel>
                  </Accordion.Item>
                </motion.div>
              ))}
            </Accordion>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQ; 