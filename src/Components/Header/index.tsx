import {
  ButtonToggleSide,
  ButtonToggleTheme,
  HeaderContainer,
  Logo,
} from './style';
import {
  BankOutlined,
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
        <Logo>
          <BankOutlined />
          <span>Simulador</span>
        </Logo>
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
          size="middle"
          type="primary"
          shape="circle"
          icon={<BulbOutlined />}
          onClick={handleToggleDarkMode}
        />
      </div>
    </HeaderContainer>
  );
}
