import React from 'react';
import { useEntry } from '../../Context/EntryContext';
import './EntryList.css';

export default function EntryList() {
  const { guestEntry } = useEntry();
  return (
    <>
      {guestEntry.map(({ id, userText, userInput, entryText, date }) => (
        <div className="entry" key={id}>
          <div className="card">
            <ul>
              <span>
                {/* <p>{userText}</p> */}
                <p className="name">by: {userInput}</p>
                <p>{entryText}</p>
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
