import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          VoterBot
        </div>
        <div>
          <Link to="/" className="px-3 py-2 hover:text-gray-400">Home</Link>
          <Link to="/about" className="px-3 py-2 hover:text-gray-400">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
