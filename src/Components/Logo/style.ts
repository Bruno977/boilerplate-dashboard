import styled from 'styled-components';
type LogoProps = {
  logoSize: string;
  labelSize: string;
  labelWeight: string;
};
export const Logo = styled.div<LogoProps>`
  height: 32px;
  margin-right: 60px;
  background: ${(props) => props.theme.colors.mauve1};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 20px;
  span svg {
    color: ${(props) => props.theme.colors.orange10};
    height: ${(props) => props.logoSize};
    width: ${(props) => props.logoSize};
  }
  > span {
    font-size: ${(props) => props.labelSize};
    color: ${(props) => props.theme.colors.mauve12};
    font-weight: ${(props) => props.labelWeight};
  }
`;
