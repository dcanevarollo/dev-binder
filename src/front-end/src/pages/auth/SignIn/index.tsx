import React from 'react';
import { Form } from '@unform/web';
import Button from '@material-ui/core/Button';

import {
  Container,
  LeftSide,
  RightSide,
  FormBox,
  SocialLoginContainer,
} from './styles';
import { useAuth, Credentials } from '../../../contexts/auth';
import InputField from '../../../components/InputField';
import GitHubButton from '../../../components/GitHubButton';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  // TODO : validate fields
  function login(data: Credentials) {
    signIn('credential', undefined, data);
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
            <div>
              <InputField name="username" label="Username" />
              <InputField name="password" label="Password" type="password" />

              <Button type="submit" variant="contained" color="secondary">
                Entrar
              </Button>
            </div>

            <SocialLoginContainer>
              <p>Or sign in with</p>

              <GitHubButton />
            </SocialLoginContainer>
          </FormBox>
        </Form>
      </RightSide>
    </Container>
  );
};

export default SignIn;
