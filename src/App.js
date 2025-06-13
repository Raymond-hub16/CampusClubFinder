import React, { useState, useEffect } from 'react';
import { clubs } from './clubsData';
import ClubList from './ClubList';

function App() {
  const [joinedClubs, setJoinedClubs] = useState([]);

  // Load joined clubs from localStorage on mount
  useEffect(() => {
    const savedClubs = localStorage.getItem('joinedClubs');
    if (savedClubs) {
      setJoinedClubs(JSON.parse(savedClubs));
    }
  }, []);

  // Save to localStorage when joinedClubs changes
  useEffect(() => {
    localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
  }, [joinedClubs]);

  const handleJoinClub = (clubId) => {
    if (!joinedClubs.includes(clubId)) {
      setJoinedClubs([...joinedClubs, clubId]);
    }
  };

  const handleLeaveClub = (clubId) => {
    setJoinedClubs(joinedClubs.filter(id => id !== clubId));
  };

  return (
    <div className="App">
      <h1>Student Clubs</h1>
      <ClubList 
        clubs={clubs} 
        joinedClubs={joinedClubs}
        onJoin={handleJoinClub}
        onLeave={handleLeaveClub}
      />
    </div>
  );
}

export default App;