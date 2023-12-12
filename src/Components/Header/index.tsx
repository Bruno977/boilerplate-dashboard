import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
} from '@heroicons/react/24/outline';
import { Button } from 'antd';
import { Header as HeaderAntd } from 'antd/es/layout/layout';
import { Logo } from './style';

type HeaderProps = {
  collapsed: boolean;
  toggleSidebar: () => void;
};
export function Header({ collapsed, toggleSidebar }: HeaderProps) {
  return (
    <HeaderAntd
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Logo>Logo</Logo>
      <Button
        type="text"
        icon={
          collapsed ? (
            <Bars3BottomLeftIcon color="#fff" width={24} height={24} />
          ) : (
            <Bars3BottomRightIcon color="#fff" width={24} height={24} />
          )
        }
        onClick={toggleSidebar}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </HeaderAntd>
  );
}
