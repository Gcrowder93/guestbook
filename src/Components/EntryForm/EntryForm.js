import React, { useState } from 'react';
import { useUser } from '../../Context/UserContext';
import { useEntry } from '../../Context/EntryContext';

export default function EntryForm() {
  const [userText, setUserText] = useState('');
  const [entryText, setEntryText] = useState('');
  const { userInput, setUserInput } = useUser();
  const { guestEntry, setguestEntry } = useEntry();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput(userInput);
    setEntryText([...guestEntry, { entry: entryText, userInput }]);
  };

  return (
    <div>
      <form>
        <h3>
          Add an <mark>Entry</mark>
        </h3>
        <hr width="20px"></hr>
        <div className="form-control">
          <label>Name: </label>
          <input
            className="controls"
            type="text"
            placeholder="First Name"
            value={userText}
            onChange={(e) => {
              setUserText(e.target.value);
            }}
          />
        </div>
        <hr width="20px"></hr>
        <div className="form-control">
          <label>Entry: </label>
          <input
            className="controls"
            type="text"
            placeholder="Message"
            value={guestEntry}
            onChange={(e) => {
              setguestEntry(e.target.value);
            }}
          />
        </div>
        <hr width="20px"></hr>
        {/* <div className="form-control">
          <label>Date: </label>
          <input
            className="controls"
            type="text"
            placeholder="MM/DD/YYYY"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div> */}
        <div>
          <hr width="20px"></hr>
          <button
            className="button"
            setName={setUserInput}
            setguestEntry={setguestEntry}
            // setDate={setDate}
            onClick={handleSubmit}
          >
            Click to Submit
          </button>
          <hr width="20px"></hr>
          {/* this button below is for once you submit your name, and the name field goes away. This will have you able to 'log out'
          currently, its letting me know that 'name' is undefined */}
          {<button onClick={() => setUserInput('')}>{`Not ${userInput} ?`}</button>}
        </div>
      </form>
    </div>
  );
}
