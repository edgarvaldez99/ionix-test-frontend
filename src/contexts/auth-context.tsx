/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  ReactElement,
  useContext,
  useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/local-storage';
import { LoginResDto } from '../login/interface/auth.dto';
import { User } from '../user/interface/user';
import { TOKEN_KEY, USER_KEY } from '../utils/constants';

export type AuthProviderValue = {
  user: User | null;
  token: string | null;
  login: (data: LoginResDto) => void;
  logout: () => void;
};
const AuthContext = createContext<AuthProviderValue>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
});

type AuthProviderProps = {
  children: ReactElement;
};
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage<User | null>(USER_KEY, null);
  const [token, setToken] = useLocalStorage<string | null>(TOKEN_KEY, null);
  const navigate = useNavigate();

  const login = async (data: LoginResDto) => {
    setUser(data.user);
    setToken(data.access_token);
    navigate('/users');
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    navigate('/login', { replace: true });
  };

  const value: AuthProviderValue = useMemo(
    () => ({
      user,
      token,
      login,
      logout,
    }),
    [user, token, login, logout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
