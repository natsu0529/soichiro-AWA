export interface FighterProfile {
  name: string;
  japanesenName: string;
  age: number;
  height: string;
  weight: string;
  weightClass: string;
  fightingStyle: string;
  team: string;
  bio: string;
}

export interface FightStatistics {
  totalFights: number;
  wins: number;
  losses: number;
  draws: number;
  ko: number;
  submission: number;
  decision: number;
}

export interface SocialLinks {
  twitter?: string;
  youtube?: string;
  instagram?: string;
}
