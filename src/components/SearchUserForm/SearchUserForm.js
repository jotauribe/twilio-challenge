import React from 'react';
import { useFetchUserList } from '../../hooks';

import Autocomplete from '../Autocomplete';
import './SearchUserForm.styles.css';

const createOptions = (users) =>
  users?.map?.(({ username }) => ({ label: username, value: username }));

export default function SearchUserForm({ onSubmit }) {
  const [query, setQuery] = React.useState('');
  const { users } = useFetchUserList();
  const options = React.useMemo(() => createOptions(users), [users]);

  const handleSubmit = (event) => {
    event?.preventDefault();
    onSubmit?.(query);
  };

  return (
    <form className="form">
      <Autocomplete
        value={query}
        className="input"
        placeholder="Type a username"
        options={options}
        onChange={setQuery}
      />
      <button className="button" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}
