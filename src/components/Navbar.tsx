import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, Search, Menu, X, TowerControl as GameController } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold text-purple-600 transition-transform hover:scale-105"
          >
            <GameController className="h-8 w-8" />
            <span className="hidden sm:inline">Playful Game Pals</span>
            <span className="inline sm:hidden">PGP</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/browse" label="Find Pals" icon={<Users className="h-4 w-4" />} />
            <NavLink to="/about" label="About" />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center">
              <Search className="h-4 w-4 mr-2" />
              <span>Search</span>
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-purple-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-60 mt-4' : 'max-h-0 mt-0'
        }`}>
          <div className="flex flex-col space-y-4 pb-4">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/browse" label="Find Pals" />
            <MobileNavLink to="/about" label="About" />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-all flex items-center justify-center">
              <Search className="h-4 w-4 mr-2" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  icon?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`font-medium transition-colors duration-300 flex items-center ${
        isActive 
          ? 'text-purple-700 border-b-2 border-purple-500' 
          : 'text-slate-700 hover:text-purple-600'
      }`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${
        isActive 
          ? 'bg-purple-100 text-purple-700' 
          : 'text-slate-700 hover:bg-purple-50 hover:text-purple-600'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;