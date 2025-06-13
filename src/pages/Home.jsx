import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Campus Club Finder</h1>
      <p className="text-lg mb-6">Discover and join student clubs that match your interests!</p>
      <Link to="/clubs" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Explore Clubs
      </Link>
    </div>
  );
}
