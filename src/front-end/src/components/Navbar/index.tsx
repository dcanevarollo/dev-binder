import React from 'react';

import { Nav } from './styles';
import logo from '../../assets/images/logo.svg';
import { useAuth } from '../../contexts/auth';

const Navbar: React.FC = () => {
  const { signed } = useAuth();

  if (!signed) return null;

  return (
    <Nav>
      <img src={logo} alt="Dev Binder" />
    </Nav>
  );
};

export default Navbar;
