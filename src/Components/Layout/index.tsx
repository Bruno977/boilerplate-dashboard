import { useState } from 'react';
import { Layout as LayoutAntd } from 'antd';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';

export function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
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
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
          }}
        >
          <Outlet />
        </Content>
      </LayoutAntd>
    </LayoutAntd>
  );
}
