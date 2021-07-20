
import React from "react";
import ReactJson from 'react-json-view'

import useFetchUser from "../../hooks/useFetchUser";
import "./styles.css";

export default function UserDetails({ user }) {
    const { user, isLoading, error } = useFetchUser();
    console.log({ user, isLoading, error });
  
    return (
      <div className="container">
        {users ? (
          <ReactJson src={user} collapsed={1} />
        ) : (
          <h1>Loading... please wait!</h1>
        )}
      </div>
    );
  }