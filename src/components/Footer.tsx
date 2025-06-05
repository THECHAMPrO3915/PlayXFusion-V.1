import React from 'react';
import { Link } from 'react-router-dom';
import { TowerControl as GameController, Heart, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <GameController className="h-6 w-6 text-purple-400" />
              <span>Playful Game Pals</span>
            </Link>
            <p className="mt-4 text-slate-300">
              Connecting gamers worldwide for epic adventures and new friendships.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Site Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-300 hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/browse" className="text-slate-300 hover:text-purple-400 transition-colors">Find Game Pals</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="text-slate-300 hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Game Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">Action</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">Adventure</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">Strategy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">RPG</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">FPS</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">Report an Issue</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">Safety Tips</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-400">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-pink-500" /> for gamers everywhere
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Playful Game Pals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;