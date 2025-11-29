import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = 'http://192.168.56.1:3000';

export async function setToken(token: string) {
  await AsyncStorage.setItem('token', token);
}

export async function getToken(): Promise<string | null> {
  return await AsyncStorage.getItem('token');
}

export async function fetchWithAuth(input: RequestInfo, init?: RequestInit) {
  const token = await getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(init && init.headers ? init.headers : {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  } as Record<string, string>;

  return fetch(`${BASE_URL}${typeof input === 'string' ? input : ''}`, {
    ...init,
    headers,
  });
}
