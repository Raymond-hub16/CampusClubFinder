import { Link } from 'react-router-dom';

export default function ClubCard({ club, view }) {
  const containerClass =
    view === 'list'
      ? 'flex gap-4 items-start border p-4 rounded-lg shadow-md'
      : 'border p-4 rounded-lg shadow-md';

  return (
    <div className={containerClass}>
      <img
        src={club.image}
        alt={club.name}
        className={view === 'list' ? 'w-32 h-32 object-cover rounded-md' : 'w-full h-40 object-cover rounded-md mb-2'}
      />
      <div>
        <h2 className="text-xl font-bold">{club.name}</h2>
        <p className="mb-2 text-sm">{club.shortDescription}</p>
        <Link to={`/clubs/${club.id}`} className="text-blue-600 underline">
          View Details
        </Link>
      </div>
    </div>
  );
}
