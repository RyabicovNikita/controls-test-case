import "./style.css";
import { Suggestion } from "./../../types/types";

interface SuggestionListProps {
  suggestions: Suggestion[];
  onSelect: (suggestion: Suggestion) => void;
}

export const SuggestionList = ({
  suggestions,
  onSelect,
}: SuggestionListProps) => {
  if (suggestions.length === 0) return null;

  const handleSelect = (suggestion: Suggestion) => {
    if (typeof onSelect === "function") onSelect(suggestion);
  };

  return (
    <ul className="suggestion-list">
      {suggestions.map((s, index) => (
        <li
          className="suggestion-item"
          key={index}
          onClick={() => handleSelect(s)}
        >
          <strong>{s.name}</strong> — {s.fullName} {s.flag}
        </li>
      ))}
    </ul>
  );
};
