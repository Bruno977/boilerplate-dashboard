import { useState } from 'react';
import { ConfigProvider, Layout as LayoutAntd } from 'antd';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';

import { Outlet } from 'react-router-dom';
import { ContentLayout } from './style';
import { ThemeProvider } from 'styled-components';
import { useToggleThemeContext } from '../../contexts/ToggleThemeContext';
import { darkConfig, darkTheme } from '../../styles/theme/darkMode';
import { lightConfig, lightTheme } from '../../styles/theme/lightMode';
import { GlobalStyle } from '../../styles/global';

export function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const { theme } = useToggleThemeContext();
  return (
    <ConfigProvider theme={theme === 'dark' ? darkConfig : lightConfig}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <LayoutAntd hasSider>
          <Sidebar collapsed={collapsed} />
          <LayoutAntd
            style={{
              marginLeft: collapsed ? 80 : 280,
              marginTop: 64,
              transition: 'all 0.3s ease 0s',
            }}
          >
            <Header
              collapsed={collapsed}
              toggleSidebar={() => setCollapsed(!collapsed)}
            />
            <ContentLayout>
              <Outlet />
            </ContentLayout>
          </LayoutAntd>
        </LayoutAntd>
      </ThemeProvider>
    </ConfigProvider>
  );
}
