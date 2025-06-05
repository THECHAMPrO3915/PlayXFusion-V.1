import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { Game } from '../types';

const PopularGames: React.FC = () => {
  const games: Game[] = [
    {
      id: '1',
      title: 'Fortnite',
      image: 'https://images.pexels.com/photos/6498901/pexels-photo-6498901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Battle Royale',
      activePlayers: 8423,
      platforms: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile']
    },
    {
      id: '2',
      title: 'Minecraft',
      image: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Sandbox',
      activePlayers: 7129,
      platforms: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile']
    },
    {
      id: '3',
      title: 'League of Legends',
      image: 'https://images.pexels.com/photos/7915575/pexels-photo-7915575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'MOBA',
      activePlayers: 6548,
      platforms: ['PC']
    },
    {
      id: '4',
      title: 'Call of Duty: Warzone',
      image: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'FPS',
      activePlayers: 5921,
      platforms: ['PC', 'PlayStation', 'Xbox']
    },
    {
      id: '5',
      title: 'Apex Legends',
      image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Battle Royale',
      activePlayers: 5389,
      platforms: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile']
    },
    {
      id: '6',
      title: 'Valorant',
      image: 'https://images.pexels.com/photos/7915274/pexels-photo-7915274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Tactical FPS',
      activePlayers: 4753,
      platforms: ['PC']
    }
  ];

  return (
    <section className="py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">Popular Games</h2>
        <Link 
          to="/games" 
          className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors"
        >
          View all games
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-video w-full h-48">
        <img 
          src={game.image} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-1">{game.title}</h3>
        <p className="text-white/80 text-sm mb-2">{game.category}</p>
        
        <div className="flex items-center text-white/90 text-sm mb-2">
          <Users className="h-4 w-4 mr-1" />
          <span>{game.activePlayers.toLocaleString()} active players</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {game.platforms.map((platform, index) => (
            <span 
              key={index} 
              className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full"
            >
              {platform}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/game/${game.id}`} 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg 
                   font-medium transition-colors duration-300 flex items-center justify-center opacity-0 
                   group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all"
        >
          Find Players
        </Link>
      </div>
    </div>
  );
};

export default PopularGames;