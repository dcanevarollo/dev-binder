import React from 'react';
import Info from '@material-ui/icons/Info';

import { Container } from './styles';

interface Props {
  title: string;
  message: string;
}

const Alert: React.FC<Props> = ({ title, message }) => (
  <Container>
    <Info />
    <strong>{title}</strong>
    <span>{message}</span>
  </Container>
);

export default Alert;
