import { motion } from 'framer-motion';
import { Container, Title, Text, Stack, Table, Button, Box, Badge, Group } from '@mantine/core';
import { IconDownload, IconEye } from '@tabler/icons-react';
import TextureBackground from './TextureBackground';

const Specs = () => {
  const specifications = [
    { parameter: 'Маса', value: '2.5 кг' },
    { parameter: 'Габарити', value: '300×200×150 мм' },
    { parameter: 'Акумулятор', value: '8 год роботи' },
    { parameter: 'Інтерфейси', value: 'HDMI, Ethernet, Wi-Fi, 4G' },
    { parameter: 'Матеріал корпусу', value: 'Алюмінієвий сплав' },
    { parameter: 'Роздільна здатність', value: 'Full HD 1080p' },
    { parameter: 'Кут огляду', value: '360° горизонтально' },
    { parameter: 'Зум', value: 'Оптичний 10x, цифровий 4x' },
  ];

  return (
    <Box
      component="section"
      id="specs"
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
              Технічні характеристики
            </Badge>
            <Title
              order={2}
              size="3rem"
              ta="center"
              style={{ color: 'white' }}
            >
              Детальні специфікації
            </Title>
            <Text
              size="lg"
              ta="center"
              c="dimmed"
              maw={600}
            >
              Повний перелік технічних характеристик та параметрів обладнання
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
            <Table
              horizontalSpacing="xl"
              verticalSpacing="md"
              style={{ color: 'white' }}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th style={{ color: 'var(--primary-gold)', fontSize: '1.1rem', fontWeight: 600 }}>
                    Параметр
                  </Table.Th>
                  <Table.Th style={{ color: 'var(--primary-gold)', fontSize: '1.1rem', fontWeight: 600 }}>
                    Значення
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {specifications.map((spec, index) => (
                  <motion.tr
                    key={spec.parameter}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      background: index % 2 === 0 ? 'rgba(255, 215, 0, 0.05)' : 'transparent',
                    }}
                  >
                    <Table.Td style={{ fontWeight: 500, fontSize: '1rem' }}>
                      {spec.parameter}
                    </Table.Td>
                    <Table.Td style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {spec.value}
                    </Table.Td>
                  </motion.tr>
                ))}
              </Table.Tbody>
            </Table>
          </Box>
        </motion.div>
        
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Group justify="center" gap="md" mt={40}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                className="glow-blue hover-lift"
                leftSection={<IconDownload size={20} />}
              >
                Завантажити PDF
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                color="gold"
                className="hover-lift"
                leftSection={<IconEye size={20} />}
                style={{
                  borderColor: 'var(--primary-gold)',
                  color: 'var(--primary-gold)',
                }}
              >
                Детальний огляд
              </Button>
            </motion.div>
          </Group>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Specs; 