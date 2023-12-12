import {
  mauveDark,
  mauveDarkA,
  orangeDark,
  orangeDarkA,
} from '@radix-ui/colors';
import { ThemeConfig } from 'antd';

export const darkTheme = {
  colors: {
    ...mauveDark,
    ...mauveDarkA,
    ...orangeDark,
    ...orangeDarkA,
  },
};

export const darkConfig = {
  token: {
    colorPrimary: orangeDark.orange3,
    fontFamily: 'Jost',
  },
  components: {
    Layout: {
      headerBg: mauveDark.mauve2,
      siderBg: mauveDark.mauve2,
      bodyBg: mauveDark.mauve1,
    },
    Menu: {
      itemBg: mauveDark.mauve2,
      itemColor: mauveDark.mauve12,
      itemActiveBg: orangeDark.orange5,
      itemHoverBg: orangeDark.orange4,
      itemHoverColor: orangeDark.orange11,
      itemSelectedBg: orangeDark.orange4,
      itemSelectedColor: orangeDark.orange11,

      activeBarBorderWidth: 0,
    },
  },
} as ThemeConfig;
