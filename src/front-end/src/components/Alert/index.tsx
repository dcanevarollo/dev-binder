import React from 'react';
import InfoIcon from '@material-ui/icons/Info';

import { Container } from './styles';

interface Props {
  title: string;
  message: string;
}

const Alert: React.FC<Props> = ({ title, message }) => (
  <Container>
    <InfoIcon />
    <strong>{title}</strong>
    <span>{message}</span>
  </Container>
);

export default Alert;
