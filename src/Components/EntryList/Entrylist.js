import React from 'react';
import { useEntry } from '../../Context/EntryContext';

export default function EntryList() {
  const { guestEntry } = useEntry();
  return (
    <>
      {guestEntry.map(({ id, entry, userInput }) => (
        <div className="entry" key={id}>
          <p>{entry}</p>
          <p>{userInput}</p>
        </div>
      ))}
    </>
  );
}
