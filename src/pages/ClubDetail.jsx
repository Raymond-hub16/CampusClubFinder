import { useParams } from 'react-router-dom';
import { clubs } from '../data/clubs';
import { useState, useEffect } from 'react';

export default function ClubDetail() {
  const { clubId } = useParams();
  const club = clubs.find(c => c.id === clubId);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];
    if (joinedClubs.includes(clubId)) setJoined(true);
  }, [clubId]);

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];
    if (!joinedClubs.includes(clubId)) {
      joinedClubs.push(clubId);
      localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
      setJoined(true);
    }
  };

  if (!club) return <div className="p-6 text-center">Club not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={club.image} alt={club.name} className="rounded-lg w-full h-64 object-cover mb-4" />
      <h1 className="text-3xl font-bold mb-2">{club.name}</h1>
      <p className="mb-4">{club.description}</p>

      <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
      <ul className="list-disc pl-5 mb-4">
        {club.events.map((event, index) => (
          <li key={index}>{event.name} - {event.date}</li>
        ))}
      </ul>

      {joined ? (
        <p className="text-green-600 font-semibold">You have joined this club!</p>
      ) : (
        <button onClick={handleJoin} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Join Club
        </button>
      )}
    </div>
  );
}
