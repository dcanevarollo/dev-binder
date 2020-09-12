import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

import { useAuth } from '../../contexts/auth';

const GitHubButton: React.FC = () => {
  const { signIn } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    if (query.has('code')) {
      signIn('social', query.get('code') as string);

      history.replace({ search: '' });
    }
  }, [signIn, location, history]);

  return (
    <Button
      href={`https://github.com/login/oauth/authorize?client_id=${clientId}`}
      variant="outlined"
      startIcon={<GitHubIcon />}
      fullWidth
    >
      GITHUB
    </Button>
  );
};

export default GitHubButton;
