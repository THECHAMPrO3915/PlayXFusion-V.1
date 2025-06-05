import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { GamePal } from '../types';

const BrowsePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Mock data for game pals
  const gamePals: GamePal[] = [
    {
      id: '1',
      name: 'Elena',
      avatar: 'https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      level: 'Competitive',
      playTime: 'Evenings & Weekends',
      games: ['Overwatch 2', 'Valorant', 'Apex Legends'],
      bio: 'FPS enthusiast looking for a competitive squad to climb ranks with. I main support but can flex to DPS.',
      rating: 4.9,
      reviewCount: 48,
      playStyle: 'Strategic',
      availability: ['weekday-evenings', 'weekends'],
      communication: ['Discord', 'In-game voice'],
      languages: ['English', 'Spanish']
    },
    {
      id: '2',
      name: 'Jason',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      level: 'Casual',
      playTime: 'Weekends',
      games: ['Minecraft', 'Stardew Valley', 'Animal Crossing'],
      bio: 'Casual gamer who enjoys relaxing, creative games. Looking for chill people to build and explore with!',
      rating: 4.7,
      reviewCount: 31,
      playStyle: 'Creative',
      availability: ['weekends'],
      communication: ['Discord'],
      languages: ['English']
    },
    {
      id: '3',
      name: 'Marcus',
      avatar: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      level: 'Semi-Competitive',
      playTime: 'Late Nights',
      games: ['League of Legends', 'Dota 2', 'Heroes of the Storm'],
      bio: 'MOBA veteran looking for teammates who want to improve together. I prefer a positive, growth-focused gaming environment.',
      rating: 4.8,
      reviewCount: 56,
      playStyle: 'Tactical',
      availability: ['weekday-nights', 'weekend-nights'],
      communication: ['Discord', 'TeamSpeak'],
      languages: ['English', 'German']
    },
    {
      id: '4',
      name: 'Sophia',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      level: 'Casual',
      playTime: 'Afternoons',
      games: ['Fortnite', 'Rocket League', 'Fall Guys'],
      bio: 'Playing for fun and to meet new people! I love games with quick matches that I can play between classes.',
      rating: 4.6,
      reviewCount: 27,
      playStyle: 'Social',
      availability: ['weekday-afternoons', 'weekend-afternoons'],
      communication: ['Discord', 'In-game voice'],
      languages: ['English', 'French']
    },
    {
      id: '5',
      name: 'Ryan',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      level: 'Hardcore',
      playTime: 'All Day',
      games: ['World of Warcraft', 'Final Fantasy XIV', 'Elder Scrolls Online'],
      bio: 'MMO enthusiast seeking guild members for raids and dungeons. I have 10+ years of experience and love teaching new players.',
      rating: 4.9,
      reviewCount: 64,
      playStyle: 'Methodical',
      availability: ['weekdays', 'weekends'],
      communication: ['Discord', 'TeamSpeak', 'In-game voice'],
      languages: ['English']
    },
    {
      id: '6',
      name: 'Olivia',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      level: 'Semi-Competitive',
      playTime: 'Evenings',
      games: ['Counter-Strike 2', 'Rainbow Six Siege', 'Escape from Tarkov'],
      bio: 'Tactical FPS player looking for a squad that communicates well and plays strategically. I prefer voice chat for coordination.',
      rating: 4.7,
      reviewCount: 39,
      playStyle: 'Tactical',
      availability: ['weekday-evenings', 'weekend-evenings'],
      communication: ['Discord', 'In-game voice'],
      languages: ['English']
    }
  ];
  
  const filters = [
    {
      name: 'Game Type',
      options: ['FPS', 'MOBA', 'MMO', 'Battle Royale', 'RPG', 'Strategy', 'Casual', 'Racing', 'Sports']
    },
    {
      name: 'Play Style',
      options: ['Competitive', 'Casual', 'Strategic', 'Tactical', 'Social', 'Creative', 'Hardcore']
    },
    {
      name: 'Availability',
      options: ['Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Weekday Nights', 'Weekends']
    },
    {
      name: 'Communication',
      options: ['Discord', 'In-game Voice', 'Text Chat Only', 'TeamSpeak', 'No Mic']
    },
    {
      name: 'Language',
      options: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Russian', 'Japanese', 'Korean']
    }
  ];
  
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  // Filtered game pals based on search and filters
  const filteredGamePals = gamePals.filter(pal => {
    // Search filter
    if (searchQuery && !pal.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !pal.games.some(game => game.toLowerCase().includes(searchQuery.toLowerCase())) &&
        !pal.bio.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Apply active filters
    if (activeFilters.length > 0) {
      // Example: Check if any of the pal's attributes match any active filter
      // This is a simplified version. In a real app, you'd have more specific logic
      const palAttributes = [
        pal.level, 
        pal.playStyle, 
        pal.playTime, 
        ...pal.games, 
        ...pal.communication, 
        ...pal.languages
      ].map(attr => attr.toLowerCase());
      
      const matchesFilter = activeFilters.some(filter => 
        palAttributes.some(attr => attr.includes(filter.toLowerCase()))
      );
      
      if (!matchesFilter) return false;
    }
    
    return true;
  });
  
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Find Your Game Pals</h1>
        <p className="text-lg text-slate-600">
          Browse through our community of gamers and find the perfect companions for your next gaming adventure
        </p>
      </div>
      
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Search by name, game, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <button 
            className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg transition-colors"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {/* Expandable Filters */}
        <div className={`mt-4 ${showFilters ? 'block' : 'hidden'}`}>
          <div className="border-t border-slate-200 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filters.map((filterGroup, idx) => (
                <div key={idx}>
                  <h3 className="font-medium text-slate-700 mb-2">{filterGroup.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {filterGroup.options.map((option, optIdx) => (
                      <button
                        key={optIdx}
                        className={`text-sm px-3 py-1 rounded-full transition-colors ${
                          activeFilters.includes(option) 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                        onClick={() => toggleFilter(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {activeFilters.length > 0 && (
              <div className="mt-4 flex justify-between items-center">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-slate-500">Active filters:</span>
                  {activeFilters.map((filter, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full flex items-center"
                    >
                      {filter}
                      <button 
                        className="ml-1 text-purple-800 hover:text-purple-900" 
                        onClick={() => toggleFilter(filter)}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
                
                <button 
                  className="text-sm text-purple-600 hover:text-purple-700"
                  onClick={() => setActiveFilters([])}
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGamePals.map(pal => (
          <GamePalCard key={pal.id} pal={pal} />
        ))}
      </div>
      
      {filteredGamePals.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-bold text-slate-700 mb-2">No matching game pals found</h3>
          <p className="text-slate-600">Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  );
};

interface GamePalCardProps {
  pal: GamePal;
}

const GamePalCard: React.FC<GamePalCardProps> = ({ pal }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full transform hover:-translate-y-1 transition-transform">
      <div className="relative">
        <img 
          src={pal.avatar} 
          alt={pal.name} 
          className="w-full h-56 object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex justify-between items-end">
            <h3 className="text-xl font-bold text-white">{pal.name}</h3>
            <div className="flex items-center bg-white/90 px-2 py-1 rounded-full text-sm">
              <span className="font-medium">{pal.rating} ★</span>
              <span className="text-xs text-slate-500 ml-1">({pal.reviewCount})</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
            {pal.level}
          </span>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {pal.playTime}
          </span>
          <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">
            {pal.playStyle}
          </span>
        </div>
        
        <p className="text-slate-600 text-sm mb-4">{pal.bio}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-slate-700 mb-2">Favorite Games</h4>
          <div className="flex flex-wrap gap-2">
            {pal.games.map((game, index) => (
              <span 
                key={index} 
                className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full"
              >
                {game}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-slate-700 mb-2">Communication</h4>
          <div className="flex flex-wrap gap-2">
            {pal.communication.map((comm, index) => (
              <span 
                key={index} 
                className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full"
              >
                {comm}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-auto flex gap-2">
          <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors duration-300">
            Connect
          </button>
          <button className="flex-1 bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 py-2 rounded-lg font-medium transition-colors duration-300">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;