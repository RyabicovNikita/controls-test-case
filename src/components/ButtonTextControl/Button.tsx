import { ButtonProps } from "../../types/types";

export const Button = ({ text, onClick }: ButtonProps) => (
  <button onClick={onClick}>{text}</button>
);
