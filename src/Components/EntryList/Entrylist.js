import React from 'react';
import { useEntry } from '../../Context/EntryContext';

export default function EntryList() {
  const { entries } = useEntry();
  return (
    <>
      {entries.map(({ id, message, user }) => (
        <div className="entry" key={id}>
          <p>{message}</p>
          <p>{user}</p>
        </div>
      ))}
    </>
  );
}
