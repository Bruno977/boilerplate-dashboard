import { mauve, mauveA, purple, purpleA } from '@radix-ui/colors';
import { ThemeConfig } from 'antd';

export const lightTheme = {
  colors: {
    ...mauve,
    ...mauveA,
    ...purple,
    ...purpleA,
  },
};

export const lightConfig = {
  token: {
    colorPrimary: purple.purple3,
  },
} as ThemeConfig;
