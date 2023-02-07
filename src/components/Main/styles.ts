import { styled } from '@/styles';

export const MainWrapper = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',
  width: '100%',
  padding: '3rem',

  backgroundColor: '#06092B',
  color: '#FFFFFF',

  textAlign: 'center'
});

export const Logo = styled('div', {
  position: 'relative',

  height: '6rem',
  width: '25rem',
  marginBottom: '2rem'
});

export const Title = styled('h1', {
  fontSize: '2.5rem'
});

export const Description = styled('h2', {
  fontSize: '2rem',
  fontWeight: '400'
});

export const Illustration = styled('div', {
  position: 'relative',

  height: '27rem',
  width: 'min(30rem, 100%)',
  marginTop: '3rem'
});
