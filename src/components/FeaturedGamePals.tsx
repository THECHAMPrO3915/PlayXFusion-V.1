import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, ArrowRight } from 'lucide-react';
import { GamePal } from '../types';

const FeaturedGamePals: React.FC = () => {
  const featuredPals: GamePal[] = [
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
    }
  ];

  return (
    <section className="py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">Featured Game Pals</h2>
        <Link 
          to="/browse" 
          className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors"
        >
          View all
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {featuredPals.map(pal => (
          <GamePalCard key={pal.id} pal={pal} />
        ))}
      </div>
    </section>
  );
};

interface GamePalCardProps {
  pal: GamePal;
}

const GamePalCard: React.FC<GamePalCardProps> = ({ pal }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
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
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="font-medium">{pal.rating}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
            {pal.level}
          </span>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex items-center">
            <Clock className="h-3 w-3 mr-1" />
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
        
        <div className="mt-auto">
          <Link 
            to={`/profile/${pal.id}`} 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg 
                     font-medium transition-colors duration-300 flex items-center justify-center"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGamePals;