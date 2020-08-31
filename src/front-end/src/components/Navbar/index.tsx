import React from 'react';

import { Nav } from './styles';
import logo from '../../assets/images/logo.svg';
import IconButton from '../IconButton';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <img src={logo} alt="Dev Binder" />

      <div>
        <IconButton icon={['fas', 'power-off']} />
      </div>
    </Nav>
  );
};

export default Navbar;
