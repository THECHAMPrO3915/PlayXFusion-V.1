import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, TowerControl as GameController, Calendar, MessageCircle, Flag, Award, Heart, Shield, Users } from 'lucide-react';
import { GamePal } from '../types';

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'games' | 'availability' | 'reviews'>('overview');
  
  // Mock data for game pal profile
  const gamePal: GamePal = {
    id: id || '1',
    name: 'Elena Rodriguez',
    avatar: 'https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    level: 'Competitive',
    playTime: 'Evenings & Weekends',
    games: ['Overwatch 2', 'Valorant', 'Apex Legends', 'Call of Duty: Warzone', 'Fortnite'],
    bio: 'FPS enthusiast looking for a competitive squad to climb ranks with. I main support but can flex to DPS. I\'ve been gaming for over 10 years and love meeting new people through games. Always up for learning new strategies and improving my skills!',
    rating: 4.9,
    reviewCount: 48,
    playStyle: 'Strategic',
    availability: ['weekday-evenings', 'weekends'],
    communication: ['Discord', 'In-game voice'],
    languages: ['English', 'Spanish'],
    achievements: [
      { name: 'Tournament Winner', description: 'First place in regional Valorant tournament', icon: <Award /> },
      { name: 'Community Leader', description: 'Active mentor to new players', icon: <Users /> },
      { name: 'Reliable Teammate', description: 'Over 100 sessions completed', icon: <Shield /> }
    ],
    stats: {
      sessionsPlayed: 127,
      hoursPlayed: 428,
      friendsMade: 35,
      memberSince: 'May 2023'
    },
    reviews: [
      { id: '1', author: 'Marcus T.', rating: 5, comment: 'Great teammate! Always positive and skilled. We\'ve been playing together for weeks now.', date: \'2 weeks ago' },
      { id: '2', author: 'Sarah K.', rating: 5, comment: 'Super friendly and patient. Helped me learn the basics of Valorant.', date: '1 month ago' },
      { id: '3', author: 'Jason R.', rating: 4, comment: 'Reliable and skilled player. Good communication during matches.', date: '2 months ago' }
    ],
    detailedSchedule: {
      monday: { morning: false, afternoon: false, evening: true, night: true },
      tuesday: { morning: false, afternoon: false, evening: true, night: false },
      wednesday: { morning: false, afternoon: false, evening: true, night: true },
      thursday: { morning: false, afternoon: false, evening: true, night: false },
      friday: { morning: false, afternoon: false, evening: true, night: true },
      saturday: { morning: true, afternoon: true, evening: true, night: true },
      sunday: { morning: true, afternoon: true, evening: true, night: false }
    },
    gameDetails: [
      { name: 'Valorant', rank: 'Diamond 2', role: 'Controller/Sentinel', hoursPlayed: 230 },
      { name: 'Apex Legends', rank: 'Masters', role: 'Support/Recon', hoursPlayed: 185 },
      { name: 'Overwatch 2', rank: 'Master 3', role: 'Support/Flex', hoursPlayed: 124 }
    ]
  };
  
  if (!gamePal) {
    return <div className="text-center py-16">Game Pal not found</div>;
  }
  
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Profile Header */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
        <div className="absolute top-24 left-8 w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-lg">
          <img 
            src={gamePal.avatar} 
            alt={gamePal.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="ml-[12rem] p-6 pt-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">{gamePal.name}</h1>
            <div className="flex items-center mt-1 mb-2">
              <div className="flex items-center mr-4">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                <span className="font-medium">{gamePal.rating}</span>
                <span className="text-sm text-slate-500 ml-1">({gamePal.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center text-slate-600 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>Member since {gamePal.stats.memberSince}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                {gamePal.level}
              </span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {gamePal.playTime}
              </span>
              <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">
                {gamePal.playStyle}
              </span>
              {gamePal.languages.map((lang, idx) => (
                <span key={idx} className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-6 md:mt-0 flex space-x-3">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-medium transition-colors flex items-center">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message
            </button>
            <button className="bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 px-5 py-2 rounded-lg font-medium transition-colors flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Connect
            </button>
            <button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 p-2 rounded-lg transition-colors">
              <Flag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Profile Navigation */}
      <div className="border-b border-slate-200">
        <div className="flex overflow-x-auto px-6">
          <button 
            className={`py-4 px-6 text-center border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'overview' 
                ? 'border-purple-600 text-purple-600' 
                : 'border-transparent text-slate-600 hover:text-slate-800'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`py-4 px-6 text-center border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'games' 
                ? 'border-purple-600 text-purple-600' 
                : 'border-transparent text-slate-600 hover:text-slate-800'
            }`}
            onClick={() => setActiveTab('games')}
          >
            Games & Skills
          </button>
          <button 
            className={`py-4 px-6 text-center border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'availability' 
                ? 'border-purple-600 text-purple-600' 
                : 'border-transparent text-slate-600 hover:text-slate-800'
            }`}
            onClick={() => setActiveTab('availability')}
          >
            Availability
          </button>
          <button 
            className={`py-4 px-6 text-center border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'reviews' 
                ? 'border-purple-600 text-purple-600' 
                : 'border-transparent text-slate-600 hover:text-slate-800'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({gamePal.reviewCount})
          </button>
        </div>
      </div>
      
      {/* Profile Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-3">About Me</h2>
                <p className="text-slate-600">{gamePal.bio}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-3">Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {gamePal.achievements.map((achievement, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          {achievement.icon}
                        </div>
                        <h3 className="font-bold text-slate-800">{achievement.name}</h3>
                      </div>
                      <p className="text-sm text-slate-600">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-3">Recent Reviews</h2>
                <div className="space-y-4">
                  {gamePal.reviews.slice(0, 2).map(review => (
                    <div key={review.id} className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div className="font-bold text-slate-800">{review.author}</div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-600 my-2">{review.comment}</p>
                      <div className="text-xs text-slate-500">{review.date}</div>
                    </div>
                  ))}
                  
                  {gamePal.reviewCount > 2 && (
                    <button 
                      className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
                      onClick={() => setActiveTab('reviews')}
                    >
                      View all {gamePal.reviewCount} reviews
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-50 p-5 rounded-xl">
                <h2 className="text-lg font-bold text-slate-800 mb-3">Stats</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <GameController className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">{gamePal.stats.sessionsPlayed}</div>
                      <div className="text-sm text-slate-500">Gaming Sessions</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">{gamePal.stats.hoursPlayed}+</div>
                      <div className="text-sm text-slate-500">Hours Played</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-pink-100 p-2 rounded-full mr-3">
                      <Heart className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">{gamePal.stats.friendsMade}</div>
                      <div className="text-sm text-slate-500">Friends Made</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-5 rounded-xl">
                <h2 className="text-lg font-bold text-slate-800 mb-3">Top Games</h2>
                <div className="space-y-4">
                  {gamePal.gameDetails.slice(0, 3).map((game, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        {game.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">{game.name}</div>
                        <div className="text-sm text-slate-500">{game.rank} • {game.role}</div>
                        <div className="text-xs text-slate-400">{game.hoursPlayed} hours played</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50 p-5 rounded-xl">
                <h2 className="text-lg font-bold text-slate-800 mb-3">Communication</h2>
                <div className="space-y-2">
                  {gamePal.communication.map((comm, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>{comm}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'games' && (
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Games & Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gamePal.gameDetails.map((game, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{game.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-90">{game.role}</span>
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {game.rank}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">Hours Played</span>
                      <span className="font-bold text-slate-800">{game.hoursPlayed}</span>
                    </div>
                    
                    <div className="w-full bg-slate-100 rounded-full h-2.5">
                      <div 
                        className="bg-purple-600 h-2.5 rounded-full" 
                        style={{ width: `${Math.min(100, (game.hoursPlayed / 300) * 100)}%` }}
                      ></div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded-lg font-medium transition-colors">
                        View Game Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Other Games I Play</h3>
              <div className="flex flex-wrap gap-3">
                {gamePal.games.filter(game => !gamePal.gameDetails.some(detail => detail.name === game)).map((game, idx) => (
                  <span 
                    key={idx} 
                    className="bg-slate-100 text-slate-800 px-3 py-2 rounded-lg text-sm"
                  >
                    {game}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'availability' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Weekly Availability</h2>
            <p className="text-slate-600">When {gamePal.name} is typically available to play:</p>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 text-left text-slate-600 font-medium"></th>
                    <th className="p-3 text-center text-slate-600 font-medium">Morning<br/><span className="text-xs opacity-70">6AM-12PM</span></th>
                    <th className="p-3 text-center text-slate-600 font-medium">Afternoon<br/><span className="text-xs opacity-70">12PM-5PM</span></th>
                    <th className="p-3 text-center text-slate-600 font-medium">Evening<br/><span className="text-xs opacity-70">5PM-10PM</span></th>
                    <th className="p-3 text-center text-slate-600 font-medium">Night<br/><span className="text-xs opacity-70">10PM-6AM</span></th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(gamePal.detailedSchedule).map(([day, times]) => (
                    <tr key={day} className="border-t border-slate-100">
                      <td className="p-3 font-medium text-slate-800 capitalize">{day}</td>
                      <td className="p-3 text-center">
                        {times.morning ? (
                          <div className="mx-auto w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="text-white font-bold text-xs">✓</div>
                          </div>
                        ) : (
                          <div className="mx-auto w-6 h-6 bg-slate-200 rounded-full"></div>
                        )}
                      </td>
                      <td className="p-3 text-center">
                        {times.afternoon ? (
                          <div className="mx-auto w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="text-white font-bold text-xs">✓</div>
                          </div>
                        ) : (
                          <div className="mx-auto w-6 h-6 bg-slate-200 rounded-full"></div>
                        )}
                      </td>
                      <td className="p-3 text-center">
                        {times.evening ? (
                          <div className="mx-auto w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="text-white font-bold text-xs">✓</div>
                          </div>
                        ) : (
                          <div className="mx-auto w-6 h-6 bg-slate-200 rounded-full"></div>
                        )}
                      </td>
                      <td className="p-3 text-center">
                        {times.night ? (
                          <div className="mx-auto w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="text-white font-bold text-xs">✓</div>
                          </div>
                        ) : (
                          <div className="mx-auto w-6 h-6 bg-slate-200 rounded-full"></div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-slate-50 p-5 rounded-xl">
              <h3 className="text-lg font-bold text-slate-800 mb-3">Timezone</h3>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-slate-500 mr-2" />
                <span className="text-slate-700">Eastern Time (ET)</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">Times shown are in your local timezone. {gamePal.name} typically plays for 2-4 hours during available slots.</p>
            </div>
          </div>
        )}
        
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800">Reviews</h2>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-yellow-400" 
                    />
                  ))}
                </div>
                <span className="font-bold text-slate-800">{gamePal.rating}</span>
                <span className="text-sm text-slate-500 ml-1">({gamePal.reviewCount})</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {gamePal.reviews.map(review => (
                <div key={review.id} className="bg-white border border-slate-200 p-5 rounded-xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-slate-800">{review.author}</div>
                      <div className="text-xs text-slate-500 mt-1">{review.date}</div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 mt-3">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;