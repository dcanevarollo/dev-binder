/* eslint-disable no-console */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import User from '../models/user.model';
import api from '../services/api';

export interface Credentials {
  username: string;
  password: string;
}

interface CtxProps {
  signed: boolean;
  user: User | null;
  signIn(
    type: 'social' | 'credential',
    code?: string,
    credentials?: Credentials
  ): Promise<void>;
  signOut(): Promise<void>;
}

interface Token {
  type: string;
  token: string;
  expires_at: string;
}

interface Auth {
  token: Token;
  user: User;
}

const AuthContext = createContext<CtxProps>({} as CtxProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem('@dev-binder/auth') as string;

    if (auth) {
      const { token, user } = JSON.parse(auth) as Auth;

      api.defaults.headers.Authorization = `Bearer ${token.token}`;

      setAuthUser(user);
    }
  }, []);

  const signIn = useCallback(
    async (
      type: 'social' | 'credential',
      code?: string,
      credentials?: Credentials
    ) => {
      try {
        const payload = type === 'social' ? { code } : credentials;

        const { data: auth } = await api.post<Auth>('auth/login', payload);

        api.defaults.headers.Authorization = `Bearer ${auth.token.token}`;

        setAuthUser(auth.user);

        localStorage.setItem('@dev-binder/auth', JSON.stringify(auth));
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  async function signOut() {
    try {
      await api.delete('auth/logout');
    } catch (error) {
      console.error(error);
    } finally {
      setAuthUser(null);

      localStorage.removeItem('@dev-binder/auth');
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!authUser,
        user: authUser,
        signIn,
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
