import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

export const HeaderContainer = styled(Header)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.div`
  height: 32px;
  margin-right: 60px;
  background: ${(props) => props.theme.colors.mauveA10};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.mauve12};
  width: 100px;
`;

export const ButtonToggleSide = styled(Button)`
  font-size: 1rem;
  width: 64px;
  height: 64px;
  span.ant-btn-icon > span {
    color: ${(props) => props.theme.colors.mauve12};
  }
`;

export const ButtonToggleTheme = styled(Button)`
  color: ${(props) => props.theme.colors.mauve12};
`;
