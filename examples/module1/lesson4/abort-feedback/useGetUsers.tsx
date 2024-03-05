import { useEffect, useState } from 'react';
import { fetchWithTimeout } from './fetchWithTimeout';

const API_URL = '/api/data/users?timeout=10000';
const DEFAULT_TIMEOUT = 5000;

interface User {
  id: number;
  name: string;
}

export const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const controller = new AbortController();

  const onRetry = () => {
    setIsError(false);
    getUserData();
  };

  const getUserData = async () => {
    await fetchWithTimeout({
      endpoint: API_URL,
      timeout: DEFAULT_TIMEOUT,
      onTimeout: () => controller.abort(),
      options: { signal: controller.signal },
    })
      .then((res) => res.json())
      .then(({ users }) => {
        setUsers(users);
      })
      .catch(() => setIsError(true));
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    return () => {
      controller.abort;
    };
  }, []);

  return {
    users,
    isError,
    onRetry,
  };
};
