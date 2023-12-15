import { ButtonToggleSide, ButtonToggleTheme, HeaderContainer } from './style';
import {
  BulbOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import { useToggleThemeContext } from '../../contexts/ToggleThemeContext';
import { Logo } from '../Logo';

type HeaderProps = {
  collapsed: boolean;
  toggleSidebar: () => void;
};
export function Header({ collapsed, toggleSidebar }: HeaderProps) {
  const { handleToggleDarkMode } = useToggleThemeContext();
  return (
    <HeaderContainer>
      <div>
        <div style={{ marginRight: '40px' }}>
          <Logo />
        </div>
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
