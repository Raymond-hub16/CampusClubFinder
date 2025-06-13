import { useState } from 'react';
import { clubs } from '../data/clubs';
import ClubCard from '../components/ClubCard';

export default function Clubs() {
  const [sort, setSort] = useState('asc');
  const [view, setView] = useState('grid');

  const sortedClubs = [...clubs].sort((a, b) => {
    return sort === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <div className="p-6">
      <div className="flex flex-wrap justify-between mb-4">
        <div>
          <button onClick={() => setSort('asc')} className="mr-2 px-3 py-1 bg-gray-200 rounded">A-Z</button>
          <button onClick={() => setSort('desc')} className="px-3 py-1 bg-gray-200 rounded">Z-A</button>
        </div>
        <div>
          <button onClick={() => setView('grid')} className="mr-2 px-3 py-1 bg-gray-200 rounded">Grid</button>
          <button onClick={() => setView('list')} className="px-3 py-1 bg-gray-200 rounded">List</button>
        </div>
      </div>

      <div className={view === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-4"}>
        {sortedClubs.map(club => (
          <ClubCard key={club.id} club={club} view={view} />
        ))}
      </div>
    </div>
  );
}
