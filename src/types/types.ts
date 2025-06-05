export interface Suggestion {
  name: string;
  fullName: string;
  flag: string;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}
