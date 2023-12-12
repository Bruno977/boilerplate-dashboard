import { PropsWithChildren } from 'react';
import { TitleContainer } from './style';

type TitleProps = PropsWithChildren & {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Title({ as: Element, children }: TitleProps) {
  return (
    <TitleContainer>
      <Element>{children}</Element>
    </TitleContainer>
  );
}
