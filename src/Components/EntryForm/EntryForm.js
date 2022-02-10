import React, { useState } from 'react';
import { useUser } from '../../Context/UserContext';
import { useEntry } from '../../Context/EntryContext';

export default function EntryForm() {
  const [userText, setUserText] = useState('');
  const [entryText, setEntryText] = useState('');
  const [date, setDate] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const { userInput, setUserInput } = useUser();
  const { guestEntry, setguestEntry } = useEntry();

  const handleSubmit = (e) => {
    setIsDisabled(!isDisabled);
    e.preventDefault();
    setUserInput(userText);
    setguestEntry([
      ...guestEntry,
      { entry: userText, entryText, userInput, date, id: guestEntry.length },
    ]);
  };

  const displayMessage = userInput
    ? `Thanks for the message ${userInput}`
    : 'Please submit a message';

  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <h1>{displayMessage}</h1>
      <form>
        <h3>Add an Entry</h3>
        <hr width="20px"></hr>
        <div className="form-control">
          <label>
            <label>Name: </label>
          </label>

          <input
            className="controls"
            type="text"
            // disabled={isDisabled}
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
          <textarea
            className="controls"
            type="text"
            placeholder="Message"
            value={entryText}
            onChange={(e) => {
              setEntryText(e.target.value);
            }}
          />
        </div>
        <hr width="20px"></hr>
        <div className="form-control">
          <label>Date: </label>
          <input
            className="controls"
            type="date"
            placeholder="MM/DD/YYYY"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div>
          <hr width="20px"></hr>
          <button
            className="button2"
            setUserInput={setUserInput}
            setguestEntry={setguestEntry}
            setDate={setDate}
            onClick={handleSubmit}
          >
            Click to Submit
          </button>
          <hr width="20px"></hr>
          {
            <button
              className="button2"
              onClick={() => setUserInput('')}
            >{`Not ${userInput} ?`}</button>
          }
        </div>
      </form>
    </div>
  );
}
