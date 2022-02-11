import React from 'react';
import { useEntry } from '../../Context/EntryContext';
import './EntryList.css';

export default function EntryList() {
  const { guestEntry } = useEntry();
  return (
    <div>
      {guestEntry.map(({ id, userInput, entryText, date }) => (
        <div className="entry" key={id}>
          <div className="card">
            <ul>
              <span>
                <p className="name">by: {userInput}</p>
                <p>{entryText}</p>
                <a>{date}</a>
              </span>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
