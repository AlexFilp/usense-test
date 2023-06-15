import { useState } from 'react';
import { Container, Input, Button } from './passwordInput.styled';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';

export const PasswordInput = ({ onChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onType = event => {
    const password = event.target.value;
    onChange(password);
  };

  const showPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Container>
      <div>
        <Input
          placeholder="Type password"
          type={isPasswordVisible ? 'text' : 'password'}
          name="password"
          onChange={onType}
        />
        <Button onClick={showPassword}>
          {isPasswordVisible ? (
            <RxEyeOpen size="30px" />
          ) : (
            <RxEyeClosed size="30px" />
          )}
        </Button>
      </div>
    </Container>
  );
};
