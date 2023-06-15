import {
  List,
  ItemAllGray,
  ItemAllRed,
  ItemEasy,
  ItemMedium,
  ItemStrong,
} from './passDifficultyScale.styled';
import { useEffect, useState } from 'react';

export const PassDifficultyScale = ({ password }) => {
  const [passState, setPassState] = useState('gray');

  const onlyLetters = '^[a-zA-Z]+$';
  const onlyDigits = '^[0-9]+$';
  const onlySymbols = `^[!@#$%^&*()_+-=;':"\\|,.<>/?]+$`;
  const lettersSymbols = `^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+-=;':"\\|,.<>/?]).+$`;
  const lettersDigits = `^(?=.*[a-zA-Z])(?=.*d).+$`;
  const digitsSymbols = `^(?=.*d)(?=.*[!@#$%^&*()_+-=[]{};':"\\|,.<>/?]).+$`;
  const all = `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$`;

  const onPasswordChange = password => {
    if (password.length === 0) {
      setPassState('gray');
      return;
    } else if (password.length < 8) {
      setPassState('red');
    } else if (
      password.match(onlyLetters) ||
      password.match(onlyDigits) ||
      password.match(onlySymbols)
    ) {
      setPassState('easy');
    } else if (
      password.match(digitsSymbols) ||
      password.match(lettersDigits) ||
      password.match(lettersSymbols)
    ) {
      setPassState('medium');
    } else if (password.match(all)) {
      setPassState('strong');
    }
  };

  useEffect(() => {
    onPasswordChange(password);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  return (
    <>
      {passState === 'gray' && (
        <List>
          <ItemAllGray></ItemAllGray>
          <ItemAllGray></ItemAllGray>
          <ItemAllGray></ItemAllGray>
        </List>
      )}
      {passState === 'red' && (
        <List>
          <ItemAllRed></ItemAllRed>
          <ItemAllRed></ItemAllRed>
          <ItemAllRed></ItemAllRed>
        </List>
      )}
      {passState === 'easy' && (
        <List>
          <ItemEasy></ItemEasy>
          <ItemEasy></ItemEasy>
          <ItemEasy></ItemEasy>
        </List>
      )}
      {passState === 'medium' && (
        <List>
          <ItemMedium></ItemMedium>
          <ItemMedium></ItemMedium>
          <ItemMedium></ItemMedium>
        </List>
      )}
      {passState === 'strong' && (
        <List>
          <ItemStrong></ItemStrong>
          <ItemStrong></ItemStrong>
          <ItemStrong></ItemStrong>
        </List>
      )}
    </>
  );
};
