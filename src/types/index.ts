export interface GamePal {
  id: string;
  name: string;
  avatar: string;
  level: string;
  playTime: string;
  games: string[];
  bio: string;
  rating: number;
  reviewCount: number;
  playStyle: string;
  availability: string[];
  communication: string[];
  languages: string[];
  achievements?: {
    name: string;
    description: string;
    icon: React.ReactNode;
  }[];
  stats?: {
    sessionsPlayed: number;
    hoursPlayed: number;
    friendsMade: number;
    memberSince: string;
  };
  reviews?: {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  detailedSchedule?: {
    [key: string]: {
      morning: boolean;
      afternoon: boolean;
      evening: boolean;
      night: boolean;
    };
  };
  gameDetails?: {
    name: string;
    rank: string;
    role: string;
    hoursPlayed: number;
  }[];
}

export interface Game {
  id: string;
  title: string;
  image: string;
  category: string;
  activePlayers: number;
  platforms: string[];
}