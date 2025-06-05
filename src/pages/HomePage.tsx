import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Clock, Gamepad2 } from 'lucide-react';
import FeaturedGamePals from '../components/FeaturedGamePals';
import PopularGames from '../components/PopularGames';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Find Your Perfect 
              <span className="text-purple-600"> Gaming Companion</span>
            </h1>
            <p className="text-lg text-slate-600">
              Connect with friendly gamers who match your play style, schedule, and favorite games. 
              Start building meaningful connections today!
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/browse" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full 
                          font-medium transition-all duration-300 transform hover:scale-105 
                          flex items-center shadow-lg shadow-purple-200"
              >
                Find Game Pals
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent border-2 border-purple-600 text-purple-600 
                          hover:bg-purple-50 px-6 py-3 rounded-full font-medium 
                          transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
              <img 
                src="https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Gamers having fun together" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">10,000+</p>
                  <p className="text-sm text-slate-500">Active Gamers</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Gamepad2 className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">500+</p>
                  <p className="text-sm text-slate-500">Games</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-white rounded-3xl p-8 shadow-sm">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">How It Works</h2>
          <p className="text-lg text-slate-600">
            Finding your ideal gaming companion is easy with our simple three-step process
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Gamepad2 className="h-10 w-10 text-purple-600" />,
              title: "Create Your Profile",
              description: "Set up your gaming profile with your favorite games, play style, and availability."
            },
            {
              icon: <Users className="h-10 w-10 text-teal-600" />,
              title: "Find Compatible Pals",
              description: "Browse through potential gaming companions filtered by game, skill level, and personality."
            },
            {
              icon: <Star className="h-10 w-10 text-pink-600" />,
              title: "Connect & Play",
              description: "Send connection requests, chat with your matches, and start gaming together!"
            }
          ].map((step, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-slate-50 p-4 rounded-full inline-block mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Featured Game Pals */}
      <FeaturedGamePals />
      
      {/* Popular Games */}
      <PopularGames />
      
      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">What Our Community Says</h2>
          <p className="text-lg text-slate-600">
            Hear from gamers who found their perfect gaming companions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex J.",
              avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              testimonial: "Found my Apex squad here and we've been climbing ranks together for months. Best gaming decision I ever made!",
              game: "Apex Legends"
            },
            {
              name: "Sarah K.",
              avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              testimonial: "As an MMO player, finding reliable guild members was always a challenge until I discovered Playful Game Pals.",
              game: "Final Fantasy XIV"
            },
            {
              name: "Marcus T.",
              avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              testimonial: "The personality matching is spot on! My gaming sessions are so much more enjoyable now with like-minded players.",
              game: "Valorant"
            }
          ].map((testimonial, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-slate-800">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500">{testimonial.game} Player</p>
                </div>
              </div>
              <p className="text-slate-600 italic">"{testimonial.testimonial}"</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-purple-600 rounded-3xl p-8 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Game Pals?</h2>
          <p className="text-lg mb-8 text-purple-100">
            Join thousands of gamers already connecting and playing together on Playful Game Pals
          </p>
          <Link 
            to="/browse" 
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full 
                     font-bold text-lg transition-all duration-300 inline-block shadow-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;