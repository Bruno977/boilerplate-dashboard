import {
  mauveDark,
  mauveDarkA,
  orangeDark,
  orangeDarkA,
} from '@radix-ui/colors';
import { ThemeConfig } from 'antd';

import { tokens, InputToken, ButtonToken } from './variables';

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
    colorBgContainer: mauveDark.mauve2,
    colorPrimary: orangeDark.orange3,
    colorPrimaryText: mauveDark.mauve12,

    colorPrimaryBgHover: orangeDark.orange4,
    colorPrimaryHover: orangeDark.orange4,

    colorPrimaryActive: orangeDark.orange5,

    colorText: mauveDark.mauve12,
    colorTextLabel: mauveDark.mauve12,
    colorTextLightSolid: mauveDark.mauve12,

    colorLink: orangeDark.orange11,
    ...tokens,
  },
  components: {
    Layout: {
      headerBg: mauveDark.mauve2,
      siderBg: mauveDark.mauve2,
      bodyBg: mauveDark.mauve3,
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
    Input: {
      ...InputToken,
    },
    Button: {
      ...ButtonToken,
    },
    Table: {
      headerBg: mauveDark.mauve3,
      headerColor: mauveDark.mauve12,
      rowHoverBg: mauveDark.mauve3,
      borderColor: mauveDark.mauve3,
      // lineWidth: 0,
      colorSplit: mauveDark.mauve6,
      // rowExpandedBg: mauve.mauve12,
      // rowSelectedBg: mauve.mauve12,
      // rowSelectedHoverBg: mauve.mauve12,
    },
  },
} as ThemeConfig;
