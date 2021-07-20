import React from 'react';

export default function useFetchUser(username = 'loris_stuckey') {
  const [user, setUser] = React.useState();
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState();

  const fetchUser = async function fetchUser() {
    try {
      setUser();
      setError();
      setIsLoading(true);

      const response = await fetch(`/api/users/${username}`);
      const userResponse = await response.json();

      setUser(userResponse);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { user, fetchUser, isLoading, error };
}
