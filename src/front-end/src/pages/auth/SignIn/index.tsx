import React from 'react';

import { Container, FormContainer } from './styles';

const SignIn: React.FC = () => {
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
        <FormContainer />
      </div>
    </Container>
  );
};

export default SignIn;
