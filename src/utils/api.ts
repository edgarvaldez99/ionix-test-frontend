import { API_BASE } from '../environments';
import { TOKEN_KEY } from './constants';

export interface ApiResponse<Data, Error = any> {
  loading: boolean;
  data: Data;
  error: Error;
}
function getHeader(){
  const token = JSON.parse(localStorage.getItem(TOKEN_KEY) ?? '');
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    Authorization: `Bearer ${token}`,
}
}
export async function getDataFromAPI<Data>(endpoint: string): Promise<Data> {
  try {
    const response = await fetch(`${API_BASE}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Status code = ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function sendDataToAPI<Body, Data = Body>(
  endpoint: string,
  body: Body,
  method: string = 'POST'
): Promise<Data> {
  try {
    const response = await fetch(`${API_BASE}/${endpoint}`, {
      method,
      body: JSON.stringify(body),
      headers: getHeader(),
    });
    const result = await response.json();
    if (!response.ok) {
      throw result;
    }
    return result;
  } catch (error) {
    throw error;
  }
}
export async function removeDataFromAPI<Data>(
  endpoint: string,
  method: string = 'DELETE'
): Promise<Data> {
  try {
    const response = await fetch(`${API_BASE}/${endpoint}`, {
      method,
      headers: getHeader(),
    });
    const result = await response.json();
    if (!response.ok) {
      throw result;
    }
    return result;
  } catch (error) {
    throw error;
  }
}
