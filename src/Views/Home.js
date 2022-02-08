// import GuestBook from '../Components/GuestBook/GuestBook';

// const Home = () => {
//   return (
//     <Entry>
//       <GuestBook></GuestBook>
//     </Entry>
//   );
// };

// export default Home;

// components - entryform, entrylist, guestbook, context

// context - entrycontext, usercontext

//components

/* 



Index is user - index is the page in code
Home will be the actual page with everything on it

Components Folder:
EntryForm - EntryList - GuestBook

EntryForm will be what list the form itself; input, classname, type=text, placeholder, value={entry}, onchange={(e) => { setEntry(e.target.value) }}, and below will be the <button classname, setEntry={setEntry} onclick={handlesubmit}

EntryList will set the state with a function and button; const entry, setEntry = useState([]);
const handlesubmit = async (e) => { e.preventDefault(); setEntry}

GuestBook will show all previous entries

Context Folder:
EntryContext(Entry) - UserContext(GuestBook)



These will be the shortcut versions for everything
Basically what this spotlight is teaching us if I believe

*/
