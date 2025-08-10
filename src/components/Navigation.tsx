import { Group, Button, Burger, Drawer, Stack, Text, Box, Container, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandWechat } from '@tabler/icons-react';

const Navigation = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const navItems = [
    { href: '#hero', label: 'Головна' },
    { href: '#features', label: 'Переваги' },
    { href: '#how', label: 'Як це працює' },
    { href: '#models', label: 'Моделі' },
    { href: '#cases', label: 'Кейси' },
    { href: '#faq', label: 'Часті запитання' },
    { href: '#contact', label: 'Контакти' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    close();
  };

  return (
    <>
      <Box
        component="nav"
        className="glass-dark"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
        }}
      >
        <Container size="xl" py="md">
          <Group justify="space-between" align="center">
            <Group gap="lg">
              <ActionIcon
                size={48}
                variant="gradient"
                gradient={{ from: 'gold', to: 'orange', deg: 45 }}
                radius="xl"
                className="glow-gold"
              >
                <IconBrandWechat size={24} />
              </ActionIcon>
              
              <Text
                size="xl"
                fw={700}
                className="gradient-text"
                visibleFrom="sm"
              >
                Перископ
              </Text>
            </Group>
            
            <Group gap="md" visibleFrom="lg">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="subtle"
                  color="white"
                  onClick={() => scrollToSection(item.href)}
                  style={{ 
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                  }}
                  className="hover-lift"
                >
                  {item.label}
                </Button>
              ))}
            </Group>

            <Burger
              opened={opened}
              onClick={open}
              hiddenFrom="lg"
              color="white"
              size="md"
            />
          </Group>
        </Container>
      </Box>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="xl"
        title={
          <Group gap="md">
            <ActionIcon
              size={40}
              variant="gradient"
              gradient={{ from: 'gold', to: 'orange', deg: 45 }}
              radius="xl"
            >
              <IconBrandWechat size={20} />
            </ActionIcon>
            <Text size="lg" fw={700} className="gradient-text">
              Перископ
            </Text>
          </Group>
        }
        hiddenFrom="lg"
        zIndex={1000}
        styles={{
          content: {
            background: 'var(--military-dark)',
          },
          header: {
            background: 'var(--military-dark)',
            borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
          },
        }}
      >
        <Stack gap="xl" align="center" justify="center" h="100%">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="subtle"
              color="white"
              size="xl"
              onClick={() => scrollToSection(item.href)}
              style={{ 
                fontWeight: 500,
                fontSize: '1.25rem',
              }}
              className="hover-lift"
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </>
  );
};

export default Navigation; 