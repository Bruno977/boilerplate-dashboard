import { Button } from 'antd';

import {
  ButtonToggleSide,
  ButtonToggleTheme,
  HeaderContainer,
  Logo,
} from './style';
import {
  BulbOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import { useToggleThemeContext } from '../../contexts/ToggleThemeContext';

type HeaderProps = {
  collapsed: boolean;
  toggleSidebar: () => void;
};
export function Header({ collapsed, toggleSidebar }: HeaderProps) {
  const { handleToggleDarkMode } = useToggleThemeContext();
  return (
    <HeaderContainer>
      <div>
        <Logo>Logo</Logo>
        <ButtonToggleSide
          type="text"
          icon={
            collapsed ? (
              <MenuUnfoldOutlined style={{ fontSize: '1.5rem' }} />
            ) : (
              <MenuFoldOutlined style={{ fontSize: '1.5rem' }} />
            )
          }
          onClick={toggleSidebar}
        />
      </div>
      <div>
        <ButtonToggleTheme
          type="primary"
          shape="circle"
          onClick={handleToggleDarkMode}
        >
          <BulbOutlined />
        </ButtonToggleTheme>
      </div>
    </HeaderContainer>
  );
}
