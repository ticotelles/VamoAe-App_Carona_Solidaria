import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import { BASE_URL, fetchWithAuth, getToken, setToken } from '../lib/api';

type User = {
  id: number;
  fullname: string;
  email: string;
  whatsapp?: string | null;
  createdAt?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  // @ts-ignore
  signIn: async () => {},
  // @ts-ignore
  signOut: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const restore = async () => {
    try {
      const token = await getToken();
      if (token) {
        const resp = await fetchWithAuth('/me');
        if (resp.ok) {
          const json = await resp.json();
          setUser(json.user ?? null);
        }
      }
    } catch (err) {
      console.error('restore auth error', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    restore();
  }, []);

  const signIn = async (email: string, password: string) => {
    const resp = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error(err.error || 'Erro ao autenticar');
    }

    const json = await resp.json();
    if (json.token) {
      await setToken(json.token);
      const meResp = await fetchWithAuth('/me');
      if (meResp.ok) {
        const meJson = await meResp.json();
        setUser(meJson.user ?? null);
      }
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setUser(null);
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
