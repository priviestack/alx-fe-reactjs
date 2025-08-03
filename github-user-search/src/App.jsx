// Add near top of App.jsx
import { searchUser } from './services/githubApi';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import Search from './components/Search';
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}


function App() {
  const [user, setUser] = useState(null);

  const handleSearch = (username) => {
    console.log('Searching for:', username);
    // Temporary test - we'll add API later
    setUser({ login: username });
  };

  return (
  <div>
    <h1>GitHub User Search</h1>
    <SearchBar onSearch={handleSearch} />
    {user && <p>Showing results for: {user.login}</p>}
  </div>
);
}

export default App
