import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100vw;
  height: 70px;
  padding: 22px 40px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.background};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);

  div {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
