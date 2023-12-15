import { BankOutlined } from '@ant-design/icons';
import { Logo as ContainerLogo } from './style';

type LogoProps = {
  logoSize?: string;
  labelSize?: string;
  labelWeight?: string;
};
export function Logo({
  logoSize = '1.5rem',
  labelSize = '1.5rem',
  labelWeight = '700',
}: LogoProps) {
  return (
    <ContainerLogo
      $logoSize={logoSize}
      $labelSize={labelSize}
      $labelWeight={labelWeight}
    >
      <BankOutlined />
      <span>Simulador</span>
    </ContainerLogo>
  );
}
