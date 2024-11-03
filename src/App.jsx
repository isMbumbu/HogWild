import './App.css'; // Ensure your CSS is in the same folder or adjust the path accordingly
import React, { useState } from 'react';
import porkersData from './porkers_data';
import Nav from './Nav'; // Ensure you create a Nav component
import HogList from './HogList'; // Component for displaying hogs
import NewHogForm from './NewHogForm'; // Component for adding new hogs

function App() {
  const [hogs, setHogs] = useState(porkersData);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortOption, setSortOption] = useState("name");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  // Toggle showing only greased hogs
  const toggleGreased = () => {
    setShowGreasedOnly(!showGreasedOnly);
  };

  // Sort hogs by selected option
  const sortedHogs = [...hogs]
    .filter(hog => !hiddenHogs.includes(hog.name))
    .filter(hog => (showGreasedOnly ? hog.greased : true))
    .sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "weight") return a.weight - b.weight;
      return 0;
    });

  // Add a new hog
  const addNewHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  // Hide hog from view
  const hideHog = (hogName) => {
    setHiddenHogs([...hiddenHogs, hogName]);
  };

  return (
    <>
    <div className="App">
      <Nav />
      <div className="main-controls">
        <button onClick={toggleGreased}>
          {showGreasedOnly ? "Show All Hogs" : "Show Only Greased Hogs"}
        </button>
        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="name">Sort by Name</option>
          <option value="weight">Sort by Weight</option>
        </select>
      </div>
      

      <HogList hogs={sortedHogs} hideHog={hideHog} />
      <NewHogForm addNewHog={addNewHog} />
    </div>
    </>
  );
}

export default App;
