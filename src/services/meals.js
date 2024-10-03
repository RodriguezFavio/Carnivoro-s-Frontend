import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export async function fetchMeals({ signal }) {
  const response = await fetch('http://localhost:3001/meals', { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the meals');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const resData = await response.json();

  return resData;
}
