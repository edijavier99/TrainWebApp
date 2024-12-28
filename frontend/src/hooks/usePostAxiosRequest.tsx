import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

// Define el estado del hook con un tipo genérico
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// Hook para solicitudes POST
export const usePostAxiosRequest = <T, U>(
  url: string, // Se pasa la URL directamente como parámetro del hook
  onSuccess?: (data: T) => void,
  onError?: (error: string) => void
): [FetchState<T>, (dataToPost: U) => Promise<T | void>] => { // Cambié el tipo de la promesa a T | void
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postData = useCallback(async (dataToPost: U): Promise<T | void> => { // Cambié el tipo de retorno de la función a Promise<T | void>
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
      return response.data; // Regresa los datos de la respuesta
    } catch (err) {
      const errorMessage = axios.isAxiosError(err)
        ? err.response?.data?.subscriber_email || 'Error en la respuesta del servidor.'
        : 'Error inesperado al hacer la solicitud.';

      setError(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
      console.error('Error posting data:', err);
      return; // En caso de error, no devolvemos ningún dato
    } finally {
      setLoading(false);
    }
  }, [url, onSuccess, onError]);

  return [{ data, loading, error }, postData];
};
