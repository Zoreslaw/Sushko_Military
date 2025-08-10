import { useEffect, useState } from 'react';
import { Box, Button, Group, Paper, Stack, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { getStoredConsent, setStoredConsent } from '../consent/consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) setVisible(true);
  }, []);

  const acceptAll = () => {
    setStoredConsent({ analytics: true, marketing: true });
    setVisible(false);
  };

  const rejectAll = () => {
    setStoredConsent({ analytics: false, marketing: false });
    setVisible(false);
  };

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  if (!visible) return null;

  return (
    <Box
      style={{
        position: 'fixed',
        left: '50%',
        bottom: isMobile ? 12 : 20,
        transform: 'translateX(-50%)',
        zIndex: 2000,
        width: isMobile ? 'calc(100% - 24px)' : 'min(1024px, calc(100% - 32px))',
      }}
    >
      <Paper
        p={isMobile ? 'md' : 'xl'}
        radius={isMobile ? 'lg' : 'xl'}
        withBorder
        style={{
          background: 'rgba(26, 46, 26, 0.95)',
          border: '1px solid rgba(255, 215, 0, 0.35)',
          boxShadow: isMobile ? '0 10px 24px rgba(0, 0, 0, 0.4)' : '0 16px 40px rgba(0, 0, 0, 0.45)'
        }}
      >
        <Stack gap={isMobile ? 'sm' : 'xl'}>
          <Text size={isMobile ? 'sm' : 'md'} c="dimmed">
            Ми використовуємо cookie для роботи сайту. Аналітика і маркетинг вмикаються лише за Вашою згодою.
          </Text>
          <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
            Продовжуючи перегляд, Ви можете погодитись або відхилити додаткові cookie. Налаштування можна змінити пізніше.
          </Text>
          <Group justify="space-between" wrap="wrap" gap={isMobile ? 'sm' : 'md'}>
            <Button
              variant="outline"
              color="gold"
              size={isMobile ? 'sm' : 'md'}
              onClick={rejectAll}
              fullWidth={isMobile}
            >
              Відхилити
            </Button>
            <Button
              onClick={acceptAll}
              size={isMobile ? 'sm' : 'md'}
              variant="gradient"
              gradient={{ from: 'gold', to: 'orange' }}
              fullWidth={isMobile}
            >
              Прийняти всі
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Box>
  );
};

export default CookieConsent;

