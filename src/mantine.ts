import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'gold',
  colors: {
    military: [
      '#f8faf8',
      '#e8f0e8',
      '#d1e1d1',
      '#b3d2b3',
      '#8fc28f',
      '#6bb26b',
      '#4ba24b',
      '#3B5F2B', // main
      '#2F3A2F',
      '#2F4F2F',
    ],
    gold: [
      '#fffdf0',
      '#fff8cc',
      '#fff199',
      '#ffe866',
      '#ffdd33',
      '#FFD700', // main
      '#e6c200',
      '#ccad00',
      '#b39900',
      '#998500',
    ],
    navy: [
      '#f0f5ff',
      '#e0ebff',
      '#c7d7ff',
      '#a3bfff',
      '#7ba3ff',
      '#0057B7', // main
      '#004494',
      '#003271',
      '#001f4d',
      '#000d2a',
    ],
  },
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    sizes: {
      h1: { fontSize: '3.5rem', lineHeight: '1.1' },
      h2: { fontSize: '2.5rem', lineHeight: '1.2' },
      h3: { fontSize: '1.75rem', lineHeight: '1.3' },
    },
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
        size: 'md',
      },
      styles: {
        root: {
          fontWeight: 600,
          textTransform: 'none',
        },
      },
    },
    Card: {
      defaultProps: {
        radius: 'lg',
        shadow: 'md',
      },
    },
    Paper: {
      defaultProps: {
        radius: 'lg',
        shadow: 'sm',
      },
    },
    Container: {
      defaultProps: {
        size: 'xl',
      },
    },
  },
  other: {
    gradients: {
      military: 'linear-gradient(135deg, #2F3A2F 0%, #3B5F2B 100%)',
      gold: 'linear-gradient(135deg, #FFD700 0%, #FFB800 100%)',
      navy: 'linear-gradient(135deg, #0057B7 0%, #004494 100%)',
    },
  },
}); 