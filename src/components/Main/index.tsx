import Image from 'next/image';
import { MainWrapper, Logo, Title, Description, Illustration } from './styles';

export function Main() {
  return (
    <MainWrapper data-testid="main-teste">
      <Logo>
        <Image
          src="/img/logo.svg"
          alt="Representação do símbolo de um átomo dentro de um hexágono rosa, em conjunto do texto 'React Avançado'"
          fill
        />
      </Logo>
      <Title>React Avançado</Title>
      <Description>TypeScript, ReactJS, NextJS e Stitches</Description>
      <Illustration>
        <Image
          src="/img/hero-illustration.svg"
          alt="Um garoto desenvolvedor de frente para uma tela com códigos."
          fill
        />
      </Illustration>
    </MainWrapper>
  );
}
