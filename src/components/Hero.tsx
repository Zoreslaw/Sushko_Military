import { motion } from 'framer-motion';
import { Container, Title, Text, Group, Button, Box } from '@mantine/core';
import { IconEye, IconBolt, IconClockBolt } from '@tabler/icons-react';

const Hero = () => {
  return (
      <Box
      component="header"
      id="hero"
      style={{
        position: 'relative',
          height: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Blurred background layer */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(-45deg, var(--military-dark), var(--military-green), var(--secondary-blue), var(--military-light))',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
          filter: 'blur(2px)',
          opacity: 0.8,
          zIndex: 0,
        }}
      />
      
      {/* Floating decorative elements */}
      <Box
        visibleFrom="md"
        className="floating"
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(3px)',
          zIndex: 1,
        }}
      />
      
      <Box
        visibleFrom="md"
        className="floating"
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 150,
          height: 150,
          background: 'radial-gradient(circle, rgba(0, 87, 183, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animationDelay: '2s',
          filter: 'blur(4px)',
        }}
      />
      
      {/* Top accent bar */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 4,
          background: 'linear-gradient(90deg, var(--primary-gold) 0%, var(--accent-orange) 50%, var(--secondary-blue) 100%)',
        }}
      />
      
      {/* Additional blurred background elements */}
      <Box
        visibleFrom="md"
        style={{
          position: 'absolute',
          top: '30%',
          left: '15%',
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(8px)',
        }}
      />
      
      <Box
        visibleFrom="md"
        style={{
          position: 'absolute',
          bottom: '40%',
          right: '20%',
          width: 250,
          height: 250,
          background: 'radial-gradient(circle, rgba(15, 46, 31, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(6px)',
        }}
      />
      
      <Container size="xl">
        <motion.div
          style={{
            position: 'relative',
            zIndex: 20,
            textAlign: 'center',
            maxWidth: '80rem',
            margin: '0 auto',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            
          >
            <Title
              order={1}
              size="4rem"
              style={{
                fontWeight: 800,
                marginBottom: '2.5rem',
                lineHeight: 1.1,
                color: 'white',
              }}
              visibleFrom="md"
            >
              <span><span className="gradient-text">Сучасні</span> мобільні комплекси відеоспостереження</span>
            </Title>
            
            <Title
              order={1}
              style={{
                fontWeight: 800,
                marginBottom: '2rem',
                lineHeight: 1.12,
                color: 'white',
                fontSize: 'clamp(1.6rem, 8vw, 2.2rem)'
              }}
              hiddenFrom="md"
            >
              <span className="gradient-text" style={{ display: 'inline-block', marginBottom: '0.6rem' }}>
                Сучасні
              </span>
              <span style={{ display: 'block' }}>
                мобільні комплекси  відеоспостереження
              </span>
            </Title>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Text
              size="xl"
              style={{
                marginBottom: '1.5rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.25rem',
                maxWidth: '60rem',
                margin: '0 auto 2rem',
              }}
              visibleFrom="md"
            >
              Інноваційні системи захисту тимчасових об'єктів та ділянок. 
              Максимальна надійність та точність у найскладніших умовах.
            </Text>
            
            <Text
              size="lg"
              style={{
                marginBottom: '2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: 'clamp(0.95rem, 3.8vw, 1.05rem)',
                lineHeight: 1.4,
              }}
              hiddenFrom="md"
              >
                Інноваційні системи захисту тимчасових об'єктів та ділянок: висока точність, надійність та готовність до роботи.
            </Text>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Group justify="center" gap="lg" wrap="wrap" mb='xl'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="gradient"
                  gradient={{ from: 'gold', to: 'orange', deg: 45 }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="glow-gold hover-lift"
                  leftSection={<IconBolt size={20} />}
                >
                  Замовити пропозицію
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
                  onClick={() => document.querySelector('#specs')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover-lift"
                  leftSection={<IconEye size={20} />}
                  style={{
                    borderColor: 'var(--primary-gold)',
                    color: 'var(--primary-gold)',
                  }}
                >
                  Переглянути ТХ
                </Button>
              </motion.div>
            </Group>
            
            <Group justify="center" gap="lg" wrap="wrap">
              <Group gap="xs">
                <IconClockBolt size={20} style={{ color: 'var(--primary-gold)' }} />
                <Text size="sm" c="dimmed">Швидке розгортання</Text>
              </Group>
              <Group gap="xs">
                <IconEye size={20} style={{ color: 'var(--primary-gold)' }} />
                <Text size="sm" c="dimmed">Дальність спостереження до 1000м</Text>
              </Group>
              <Group gap="xs">
                <IconBolt size={20} style={{ color: 'var(--primary-gold)' }} />
                <Text size="sm" c="dimmed">Aвтономне живлення до 48 год</Text>
              </Group>
            </Group>
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Modern section divider */}
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 100,
          background: 'linear-gradient(180deg, transparent 0%, var(--military-dark) 100%)',
        }}
      />
    </Box>
  );
};

export default Hero;
