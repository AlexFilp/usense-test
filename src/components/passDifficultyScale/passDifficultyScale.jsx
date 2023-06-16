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

  const onlyLetters = /^[a-zA-Z]+$/;
  const onlyDigits = /^[0-9]+$/;
  const onlySymbols = /^[!@#$%^&*()_+-=;':"\\|,.<>/?]+$/;
  const lettersSymbols =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+-=;':"\\|,.<>/?]).+$/;
  const lettersDigits = /^(?=.*[a-zA-Z])(?=.*d).+$/;
  const digitsSymbols = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  const all = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  // console.log(digitsSymbols.test('2312132#@@#@@#@#!@!'), 'digitsSymbols');

  const onPasswordChange = password => {
    console.log(all.test(password));
    if (password.length === 0) {
      setPassState('gray');
      return;
    } else if (password.length < 8) {
      setPassState('red');
    } else if (all.test(password)) {
      setPassState('strong');
    } else if (
      digitsSymbols.test(password) ||
      lettersDigits.test(password) ||
      lettersSymbols.test(password)
    ) {
      setPassState('medium');
    } else if (
      onlyLetters.test(password) ||
      onlyDigits.test(password) ||
      onlySymbols.test(password)
    ) {
      setPassState('easy');
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
