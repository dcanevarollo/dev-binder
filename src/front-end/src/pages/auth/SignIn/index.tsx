import React from 'react';
import { Form } from '@unform/web';
import Button from '@material-ui/core/Button';

import { Container, LeftSide, RightSide, FormBox } from './styles';
import { useAuth, Credentials } from '../../../contexts/auth';
import InputField from '../../../components/InputField';

const SignIn: React.FC = () => {
  const { signIn, gitHubSignIn } = useAuth();

  // TODO : validate fields
  function login(data: Credentials) {
    signIn(data);
  }

  return (
    <Container>
      <LeftSide>
        <h2>Welcome to</h2>
        <h1>DEV BINDER!</h1>

        <p>
          Connect with your <strong>GitHub</strong> friends and share your
          experiences!
        </p>
      </LeftSide>

      <RightSide>
        <Form onSubmit={login}>
          <FormBox>
            <InputField name="username" label="Username" />
            <InputField name="password" label="Password" type="password" />

            <Button type="submit" variant="contained" color="secondary">
              Entrar
            </Button>
          </FormBox>
        </Form>
      </RightSide>
    </Container>
  );
};

export default SignIn;
