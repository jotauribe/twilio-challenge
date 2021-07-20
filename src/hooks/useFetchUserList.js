import React from 'react';

export default function useFetchUserList() {
    const [users, setUsers] = React.useState();
    const [error, setError] = React.useState();
    const [isLoading, setIsLoading] = React.useState();
  
    React.useEffect(() => {
      async function fetchUsers() {
        try {
          setUsers();
          setError();
          setIsLoading(true);
  
          const response = await fetch(`/api/users`);
          const userResponse = await response.json();
  
          setUsers(userResponse);
        } catch (err) {
          console.error(err);
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }
  
      fetchUsers();
    }, []);
  
    return { users, isLoading, error };
  }