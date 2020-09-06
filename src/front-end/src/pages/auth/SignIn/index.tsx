import React from 'react';
import { Form } from '@unform/web';

import { Container, FormContainer } from './styles';
import { useAuth, Credentials } from '../../../contexts/auth';
import InputField from '../../../components/InputField';

const SignIn: React.FC = () => {
  const { signIn, gitHubSignIn } = useAuth();

  function login(data: Credentials) {}

  return (
    <Container>
      <div>
        <h2>Welcome to</h2>
        <h1>DEV BINDER!</h1>

        <p>
          Connect with your <strong>GitHub</strong> friends and share your
          experiences!
        </p>
      </div>

      <div>
        <FormContainer>
          <Form onSubmit={login}>
            <InputField name="username" />
          </Form>
        </FormContainer>
      </div>
    </Container>
  );
};

export default SignIn;
