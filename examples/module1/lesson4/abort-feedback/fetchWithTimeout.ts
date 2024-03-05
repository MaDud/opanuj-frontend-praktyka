type FetchWithTimeoutProps = {
  endpoint: string;
  timeout: number;
  options: RequestInit;
  onTimeout: () => void;
};

export const fetchWithTimeout = async ({
  endpoint,
  timeout,
  onTimeout,
  options,
}: FetchWithTimeoutProps) => {
  const timer = setTimeout(onTimeout, timeout);

  const response = await fetch(endpoint, {
    ...options,
  });
  clearTimeout(timer);

  return response;
};
