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

export const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 16px;
  border: 3px solid white;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
  }
`;
