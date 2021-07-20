import React from "react";
import ReactJson from 'react-json-view'

import SearchUserForm from "./components/SearchUserForm";
import { useFetchUser } from "./hooks";
import "./styles.css";

export default function MainContent() {
  const { user, fetchUser, isLoading, error } = useFetchUser();
  console.log({ user, isLoading, error });

  return (
    <div className="container">
      <SearchUserForm onSubmit={fetchUser} />
      {user ? (
        <ReactJson src={user} collapsed={1} />
      ) : (
        <h1>Loading... please wait!</h1>
      )}
    </div>
  );
}
