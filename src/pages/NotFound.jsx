import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
      <p className="mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600 underline">Back to Home</Link>
    </div>
  );
}
