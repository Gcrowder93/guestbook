import React from 'react';

export default function EntryForm({
  name,
  guestEntry,
  date,
  setName,
  setguestEntry,
  setDate,
  handleSubmit,
}) {
  return (
    <div>
      <form>
        <h3>
          Add an <mark>Entry</mark>
        </h3>
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
            value={guestEntry}
            onChange={(e) => {
              setguestEntry(e.target.value);
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
            setguestEntry={setguestEntry}
            setDate={setDate}
            onClick={handleSubmit}
          >
            Click to Submit
          </button>
          {/* 
          <button onClick={() => setUser('')}>{`Not ${user}?`}</button> */}
        </div>
      </form>
    </div>
  );
}
