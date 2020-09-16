import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PowerIcon from '@material-ui/icons/PowerSettingsNew';

import { Nav, UserAvatar } from './styles';
import logo from '../../assets/images/logo.svg';
import { useAuth } from '../../contexts/auth';

const Navbar: React.FC = () => {
  const { signed, user, signOut } = useAuth();

  if (!signed) return null;

  return (
    <Nav>
      <img src={logo} alt="Dev Binder" />

      <div>
        <UserAvatar src={user?.avatar_url} alt={user?.name} />
        <IconButton onClick={() => signOut()}>
          <PowerIcon fontSize="large" />
        </IconButton>
      </div>
    </Nav>
  );
};

export default Navbar;
