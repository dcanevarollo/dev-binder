import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;

    h1 {
      font-weight: bold;
      margin-bottom: 40px;
    }

    h2 {
      font-weight: 300;
    }

    h1,
    h2 {
      font-size: 32px;
      line-height: 37px;
      letter-spacing: 0.1em;
      color: white;
    }

    p {
      font-size: 18px;
      line-height: 30px;
      max-width: 400px;
    }
  }
`;

export const FormContainer = styled.div`
  width: 400px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 40px;
  padding: 20px;
`;
