import { PasswordInput } from '../passwordInput/passwordInput';
import { PassDifficultyScale } from '../passDifficultyScale/passDifficultyScale';
import { GlobalStyle } from '../GlobalStyle';
import { useState } from 'react';
import { Container, Title } from './App.styled';

export const App = () => {
  const [query, setQuery] = useState('');

  const onChange = query => {
    setQuery(query);
  };

  return (
    <Container>
      <Title>Lets check your password strenth!</Title>
      <PasswordInput onChange={onChange} />
      <PassDifficultyScale password={query} />
      <GlobalStyle />
    </Container>
  );
};
