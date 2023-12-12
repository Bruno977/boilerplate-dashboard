import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';

import { Link, useLocation } from 'react-router-dom';
import {
  AuditOutlined,
  HomeOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

type SidebarProps = {
  collapsed: boolean;
};

export function Sidebar({ collapsed }: SidebarProps) {
  const location = useLocation();

  return (
    <Sider
      collapsible
      trigger={null}
      collapsed={collapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        marginTop: 64,
      }}
      width={280}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/']}
        selectedKeys={[location.pathname]}
        items={[
          {
            key: '/',
            label: <Link to="/">Dashboard</Link>,
            icon: <HomeOutlined />,
          },
          {
            key: '/esteira',
            label: <Link to="/esteira">Esteira</Link>,
            icon: <UnorderedListOutlined />,
          },
          {
            key: '/simulacao',
            label: <Link to="/simulacao">Simulação</Link>,
            icon: <AuditOutlined />,
          },
        ]}
      />
    </Sider>
  );
}
