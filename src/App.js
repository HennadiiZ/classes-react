import Users from './components/Users';
import UserFinder from './components/UserFinder';
// import UsersContext from './store/user-context';
import UsersContext from './store/user-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {

  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    // <div>
    //   < UserFinder />
    // </div>
    
    // <UsersContext.Provider value={UsersContext}>
    //   < UserFinder />
    // </UsersContext.Provider>

    <UsersContext.Provider value={usersContext}>
      < UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
