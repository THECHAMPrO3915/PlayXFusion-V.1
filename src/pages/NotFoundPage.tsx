import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Gamepad2 } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="mb-8">
        <Gamepad2 className="h-24 w-24 text-purple-300 mx-auto" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Page Not Found</h1>
      <p className="text-xl text-slate-600 max-w-md mx-auto mb-8">
        Oops! It seems the game level you're looking for doesn't exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full 
                    font-medium transition-all duration-300 flex items-center justify-center"
        >
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
        <Link 
          to="/browse" 
          className="bg-transparent border-2 border-purple-600 text-purple-600 
                    hover:bg-purple-50 px-6 py-3 rounded-full font-medium 
                    transition-all duration-300 flex items-center justify-center"
        >
          <Gamepad2 className="mr-2 h-5 w-5" />
          Find Game Pals
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;