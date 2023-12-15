import { useState } from 'react';
import { ConfigProvider, Layout as LayoutAntd } from 'antd';
import { Sidebar } from '../../Sidebar';
import { Header } from '../../Header';

import { Outlet } from 'react-router-dom';
import { Container } from './style';
import { ThemeProvider } from 'styled-components';
import { useToggleThemeContext } from '../../../contexts/ToggleThemeContext';
import { darkConfig, darkTheme } from '../../../styles/theme/darkMode';
import { lightConfig, lightTheme } from '../../../styles/theme/lightMode';
import { GlobalStyle } from '../../../styles/global';

export function LayoutAuthenticated() {
  const [collapsed, setCollapsed] = useState(false);
  const { theme } = useToggleThemeContext();
  return (
    <ConfigProvider theme={theme === 'dark' ? darkConfig : lightConfig}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <LayoutAntd hasSider>
          <Sidebar collapsed={collapsed} />
          <Header
            collapsed={collapsed}
            toggleSidebar={() => setCollapsed(!collapsed)}
          />
          <LayoutAntd
            style={{
              marginLeft: collapsed ? 80 : 280,
              marginTop: 64,
              transition: 'all 0.3s ease 0s',
            }}
          >
            <Container>
              <Outlet />
            </Container>
          </LayoutAntd>
        </LayoutAntd>
      </ThemeProvider>
    </ConfigProvider>
  );
}
