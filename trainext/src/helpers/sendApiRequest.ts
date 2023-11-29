type Requests = 'GET' | 'POST' | 'PUT' | 'DELETE';

// Conditional options object based on method type
function relevantRequest(
  method: Requests,
  data: unknown,
): RequestInit {
  if (method === 'GET') {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  return {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

export async function sendApiRequest<T>(
  url: string,
  method: Requests,
  data: unknown = {},
): Promise<T> {
  const response = await fetch(
    url,
    relevantRequest(method, data),
  );

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return (await response.json()) as Promise<T>;
}
