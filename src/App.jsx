import React, { useState, useEffect } from 'react';
import { getStarships } from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';

function App() {
  const [starships, setStarships] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStarships();
        setStarships(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredStarships = starships.filter((starship) =>
    starship.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <h1>Starship List</h1>
      <StarshipSearch onSearch={handleSearch} />
      <StarshipList starships={filteredStarships} />
    </main>
  );
}

export default App;
