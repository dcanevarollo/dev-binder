import styled from 'styled-components';

const ContentFlex = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled(ContentFlex)`
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
`;

export const RightSide = styled(ContentFlex)``;

export const FormBox = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 40px;
  padding: 40px;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const SocialLoginContainer = styled(ContentFlex)`
  justify-content: flex-end;
  align-items: center;

  p {
    margin-bottom: 14px;
  }
`;
