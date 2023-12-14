import { mauve, mauveA, orange, orangeA } from '@radix-ui/colors';
import { tokens, InputToken, ButtonToken, CardToken } from './variables';
import { ThemeConfig } from 'antd';

export const lightTheme = {
  colors: {
    ...mauve,
    ...mauveA,
    ...orange,
    ...orangeA,
  },
};

export const lightConfig = {
  token: {
    colorPrimary: orange.orange3,
    colorPrimaryText: mauve.mauve12,

    colorPrimaryBgHover: orange.orange4,
    colorPrimaryHover: orange.orange4,

    colorPrimaryActive: orange.orange5,

    colorText: mauve.mauve12,
    colorTextLabel: mauve.mauve12,
    colorTextLightSolid: mauve.mauve12,

    colorLink: orange.orange11,
    ...tokens,
  },
  components: {
    Layout: {
      headerBg: mauve.mauve2,
      siderBg: mauve.mauve2,
      bodyBg: mauve.mauve1,
    },
    Menu: {
      itemBg: mauve.mauve2,
      itemColor: mauve.mauve12,

      itemActiveBg: orange.orange5,
      itemHoverBg: orange.orange4,
      itemHoverColor: orange.orange11,

      itemSelectedBg: orange.orange4,
      itemSelectedColor: orange.orange11,

      activeBarBorderWidth: 0,
    },
    Input: {
      ...InputToken,
    },
    Button: {
      ...ButtonToken,
    },
    Form: {},
    Card: {
      ...CardToken,
    },
  },
} as ThemeConfig;
