import React, { useRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { Button, Link } from '@material-ui/core';

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
import validator, { credentials } from '../../../validators';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const login: SubmitHandler<Credentials> = async data => {
    const valid = await validator(credentials, data, formRef);

    if (valid) signIn('credential', undefined, data);
  };

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
        <Form ref={formRef} onSubmit={login}>
          <FormBox>
            <div>
              <InputField name="username" label="Username" />
              <InputField name="password" label="Password" type="password" />
              <Button type="submit" variant="contained" color="secondary">
                SIGN IN
              </Button>

              <span>
                Don&apos;t have an account?
                <Link href="/register" color="secondary">
                  Sign up!
                </Link>
              </span>
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
