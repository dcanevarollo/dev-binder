/* eslint-disable no-console */

import React, { createContext, useContext, useState, useEffect } from 'react';

import User from '../models/user.model';
import api from '../services/api';

export interface Credentials {
  username: string;
  password: string;
}

interface Auth {
  signed: boolean;
  user: User | null;
  signIn(credentials: Credentials): Promise<void>;
  gitHubSignIn(token: string): Promise<void>;
  signOut(): Promise<void>;
}

interface Token {
  type: string;
  token: string;
  expires_at: string;
}

const accessKey = '@dev-binder/access-token';

const userKey = '@dev-binder/auth-user';

const AuthContext = createContext<Auth>({} as Auth);

export const AuthProvider: React.FC = ({ children }) => {
  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
    const tokenStored = localStorage.getItem(accessKey);
    const userStored = localStorage.getItem(userKey);

    if (tokenStored && userStored) {
      const token: Token = JSON.parse(tokenStored);
      api.defaults.headers.Authorization = `Bearer ${token.token}`;

      const user: User = JSON.parse(userStored);
      setAuthUser(user);
    }
  }, []);

  async function signIn(credentials: { username: string; password: string }) {
    try {
      const response = await api.post<{ token: Token; user: User }>(
        'auth/login',
        credentials
      );

      const { token, user } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token.token}`;

      setAuthUser(user);

      localStorage.setItem(accessKey, JSON.stringify(token));
      localStorage.setItem(userKey, JSON.stringify(user));
    } catch (error) {
      console.error(error);
    }
  }

  async function gitHubSignIn(token: string) {}

  async function signOut() {
    try {
      await api.delete('auth/logout');
    } catch (error) {
      console.error(error);
    } finally {
      setAuthUser(null);

      localStorage.clear();
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!authUser,
        user: authUser,
        signIn,
        gitHubSignIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;
