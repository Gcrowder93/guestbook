import EntryForm from '../Components/EntryForm/EntryForm';
import EntryList from '../Components/EntryList/EntryList';

const Home = () => {
  return (
    <EntryForm>
      <EntryList>
        <Home />
      </EntryList>
    </EntryForm>
  );
};

export default Home;
