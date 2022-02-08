import React from 'react';
import { useState } from 'react';
import EntryForm from '../EntryForm/EntryForm';

export default function EntryList() {
  const [name, setName] = useState([]);
  const [entry, setEntry] = useState([]);
  const [date, setDate] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName();
    setEntry();
    setDate();
  };
  return (
    <div>
      <h1>H1 Add Entry</h1>
      <EntryForm name={name} entry={entry} date={date} handleSubmit={handleSubmit} />
    </div>
  );
}
