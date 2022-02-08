import React from 'react';

export default function EntryForm({ name, entry, date, setName, setEntry, setDate, handleSubmit }) {
  return (
    <div>
      <form>
        <h3>Add an Entry</h3>
        <div className="form-control">
          <label>Name:</label>
          <input
            className="controls"
            type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Message to Others:</label>
          <input
            className="controls"
            type="text"
            placeholder="message"
            value={entry}
            onChange={(e) => {
              setEntry(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Date Submitted</label>
          <input
            className="controls"
            type="text"
            placeholder="MM/DD/YYYY"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="button"
            setName={setName}
            setEntry={setEntry}
            setDate={setDate}
            onClick={handleSubmit}
          >
            Click to Submit
          </button>
        </div>
      </form>
    </div>
  );
}
