import {
  mauveDark,
  mauveDarkA,
  purpleDark,
  purpleDarkA,
} from '@radix-ui/colors';
import { ThemeConfig } from 'antd';

export const darkTheme = {
  colors: {
    ...mauveDark,
    ...mauveDarkA,
    ...purpleDark,
    ...purpleDarkA,
  },
};

export const darkConfig = {
  token: {
    colorPrimary: purpleDark.purple3,
  },
} as ThemeConfig;
