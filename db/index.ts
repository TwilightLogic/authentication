'use server'

export const fetchDbMessage = async () => {
  const response = await fetch('/api/db');
  if (!response.ok) {
    throw new Error('Failed to connect to the database');
  }
  const data = await response.json();
  return data.message;
};
