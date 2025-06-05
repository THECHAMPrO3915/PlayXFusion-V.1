import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Shield, Award, MessageCircle, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Personality Matching",
      description: "Our advanced algorithm matches you with gamers who share your play style, communication preferences, and gaming goals."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Safe Community",
      description: "We prioritize creating a positive, inclusive environment with verification systems and community guidelines."
    },
    {
      icon: <Clock className="h-8 w-8 text-teal-600" />,
      title: "Availability Scheduling",
      description: "Easily find gamers who play when you do, making it simple to coordinate gaming sessions across time zones."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Skill Diversity",
      description: "Whether you're a competitive player or just play for fun, find companions at your skill level who match your goals."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-pink-600" />,
      title: "Secure Messaging",
      description: "Connect with potential gaming pals through our secure in-app messaging before sharing your gaming handles."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Lasting Connections",
      description: "Our platform focuses on compatibility for meaningful, long-term gaming friendships beyond just a single session."
    }
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former esports competitor with a passion for building gaming communities. Founded Playful Game Pals to solve the problem of finding compatible gaming companions.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sarah Chen",
      role: "Chief Product Officer",
      bio: "Game designer and UX specialist who ensures our platform creates meaningful connections while being intuitive and enjoyable to use.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Marcus Lee",
      role: "Community Director",
      bio: "Community building expert who oversees our growing user base, ensuring a positive, inclusive, and engaging environment for all gamers.",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Mission</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          At Playful Game Pals, we believe gaming is better together. 
          Our mission is to connect gamers worldwide with compatible companions who enhance their gaming experience, 
          creating lasting friendships and unforgettable adventures.
        </p>
      </section>
      
      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">10,000+</div>
            <div className="text-purple-200">Active Gamers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-purple-200">Supported Games</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">25,000+</div>
            <div className="text-purple-200">Connections Made</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">4.8/5</div>
            <div className="text-purple-200">Average Rating</div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">What Makes Us Different</h2>
          <p className="text-lg text-slate-600">
            We've built a platform that goes beyond simply finding teammates - we create meaningful connections based on compatibility
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-slate-50 p-4 rounded-full inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Our Story */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
          <div className="space-y-4 text-slate-600">
            <p>
              Playful Game Pals was born from a simple problem: finding compatible gaming companions is hard. 
              Our founder, Alex, experienced this firsthand when moving to a new city and losing his regular gaming group.
            </p>
            <p>
              After struggling with random matchmaking and gaming forums, Alex realized there needed to be a better way to 
              connect gamers based on play styles, personalities, and schedules - not just skill levels.
            </p>
            <p>
              In 2023, Playful Game Pals launched with a mission to create meaningful connections in the gaming world. 
              Since then, we've helped thousands of gamers find their perfect gaming companions, forming friendships 
              that extend beyond the screen.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/7915470/pexels-photo-7915470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Gamers playing together" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-purple-600 fill-purple-600" />
              </div>
              <div>
                <p className="font-bold text-slate-800">Our Values</p>
                <p className="text-sm text-slate-500">Community First</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-slate-600">
            The passionate gamers behind Playful Game Pals who work to connect gaming communities worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Values Section */}
      <section className="bg-slate-50 rounded-3xl p-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Core Values</h2>
          <p className="text-lg text-slate-600">
            The principles that guide everything we do at Playful Game Pals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Community",
              description: "We believe in building a welcoming, inclusive gaming community where everyone belongs."
            },
            {
              title: "Connection",
              description: "We prioritize meaningful relationships over quantity, focusing on compatibility and shared experiences."
            },
            {
              title: "Safety",
              description: "We maintain stringent safety measures to ensure a positive environment for all our users."
            },
            {
              title: "Innovation",
              description: "We constantly evolve our platform based on user feedback and emerging gaming trends."
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Find Your Game Pals?</h2>
        <p className="text-lg text-slate-600 mb-8">
          Join our community of gamers and start making meaningful connections today
        </p>
        <Link 
          to="/browse" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full 
                   font-bold text-lg transition-all duration-300 inline-block shadow-lg"
        >
          Browse Game Pals
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;