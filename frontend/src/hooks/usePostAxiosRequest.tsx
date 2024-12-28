import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

// Define el estado del hook con un tipo genérico
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: any | null; // Error puede ser cualquier cosa (string, objeto, etc.)
}

// Hook para solicitudes POST
export const usePostAxiosRequest = <T, U>(
  url: string,
  onSuccess?: (data: T) => void,
  onError?: (error: any) => void // Error ahora tiene tipo genérico
): [FetchState<T>, (dataToPost: U) => Promise<void>] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const postData = useCallback(async (dataToPost: U) => {
    setLoading(true);
    setError(null);

    try {
      const config: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post<T>(url, dataToPost, config);
      setData(response.data);

      if (onSuccess) {
        onSuccess(response.data);
      }
    } catch (err) {
      const errorMessage = axios.isAxiosError(err)
        ? err.response?.data // Esto será el objeto completo del error devuelto por el servidor
        : { message: 'Error inesperado al hacer la solicitud.' }; // En caso de error no esperado

      setError(errorMessage);

      if (onError) {
        onError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  }, [url, onSuccess, onError]);

  return [{ data, loading, error }, postData];
};
