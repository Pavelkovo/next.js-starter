import axios from 'axios';

export const getContentType = () => ({
  'Content-Type': 'application/json',
});

export interface ApiErrorResponse {
  statusCode: number;
  message: string;
  timestamp: string;
  path: string;
}

export const errorCatch = (error: unknown): ApiErrorResponse | null => {
  if (axios.isAxiosError(error)) {
    return error?.response?.data;
  }
  return null;
};
