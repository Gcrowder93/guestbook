import React from 'react';
import { useState } from 'react';
import EntryForm from '../EntryForm/EntryForm';

// import { useUser } from '../../Context/UserContext';
// import { useEntry } from '../../Context/EntryContext';

export default function EntryList() {
  const [name, setName] = useState([]);
  const [guestEntry, setguestEntry] = useState([]);
  const [date, setDate] = useState([]);
  // const { user, setUser } = useUser();
  // const { entry, setEntry } = useEntry();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName(name);
    setguestEntry();
    setDate();
  };

  // function updateList() {
  //   if (!guestEntry) return;
  //   setUser(name);
  //   setguestEntry([...EntryForm, { name, message: guestEntry }]);
  //   setguestEntry('');
  // }

  return (
    <div>
      <h1>H1 Add Entry</h1>
      <EntryForm name={name} guestEntry={guestEntry} date={date} handleSubmit={handleSubmit} />
    </div>
  );
}
