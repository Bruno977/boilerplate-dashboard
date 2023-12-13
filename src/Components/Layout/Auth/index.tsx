import { ConfigProvider, Layout } from 'antd';

import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { lightConfig, lightTheme } from '../../../styles/theme/lightMode';
import { GlobalStyle } from '../../../styles/global';
import { Content } from 'antd/es/layout/layout';

export function LayoutAuth() {
  return (
    <ConfigProvider theme={lightConfig}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </ThemeProvider>
    </ConfigProvider>
  );
}
