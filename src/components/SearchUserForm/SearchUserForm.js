import React from 'react';
import Select, { components } from 'react-select'
import { useFetchUserList } from '../../hooks';

import Autocomplete from '../Autocomplete';
import './SearchUserForm.styles.css';

export default function SearchUserForm({ onSubmit }) {
  const [query, setQuery] = React.useState('');
  const { users, isLoading, error } = useFetchUserList();

  const handleSubmit = event => {
      event?.preventDefault()
      onSubmit?.(query)
  }

  return (
    <form className="form">
      <Autocomplete
        value={query}
        className="input"
        placeholder="Type a username"
        options={[{label: 'option 1'}]}
        onChange={setQuery}
      />
      <button className="button" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}
