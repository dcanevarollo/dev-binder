import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-width: 600px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 25px;
  color: white;
  font-size: 20px;

  svg,
  strong {
    margin-right: 8px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: calc(100% - 30px);
    padding: 0 15px;
  }
`;
