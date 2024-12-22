import { useState, useEffect } from 'react';

type UseGetFetchResult<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
};

export const useGetFetch = <T = any>(url: string, options: RequestInit = {}): UseGetFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};
