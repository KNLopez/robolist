export interface Monster {
  name: string;
  email: string;
}

export interface CardlistProps {
  monsters: Monster[];
}

export interface CardProps {
  monster: Monster;
}
