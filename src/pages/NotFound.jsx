import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center">
      <p className="text-6xl mb-4 font-mono text-gray-200 dark:text-gray-800">404</p>
      <h1 className="text-xl font-bold mb-2">Page not found</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">Dat bestaat niet.</p>
      <Link to="/" className="btn-primary">← Back to home</Link>
    </div>
  );
}
