import React from 'react';
import { useEntry } from '../../Context/EntryContext';
import './EntryList.css';

export default function EntryList() {
  const { guestEntry } = useEntry();
  return (
    <>
      {guestEntry.map(({ id, entry, userEntry, userInput, date }) => (
        <div className="entry" key={id}>
          <div className="card">
            <ul>
              <span>
                <p>{userInput}</p>
                <p>{userEntry}</p>
                <p>{entry}</p>
                <a>{date}</a>
              </span>
              <hr width="35px"></hr>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
