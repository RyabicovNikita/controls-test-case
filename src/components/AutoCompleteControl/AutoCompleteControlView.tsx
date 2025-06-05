import "./style.css";
import { observer } from "mobx-react-lite";
import { Suggestion } from "../../types/types";
import { SuggestionList } from "./SuggestionList";

interface AutoCompleteViewModel {
  text: string;
  suggestions: Suggestion[];
  setText: (text: string) => void;
  selectSuggestion: (suggestion: Suggestion) => void;
}

interface ViewModalProps {
  viewModel: AutoCompleteViewModel;
}

export const AutoCompleteControlView = observer(
  ({ viewModel }: ViewModalProps) => {
    return (
      <div className="auto-complete">
        <input
          type="text"
          value={viewModel.text}
          onChange={(e) => viewModel.setText(e.target.value)}
        />
        {viewModel.suggestions.length > 0 && (
          <SuggestionList suggestions={viewModel.suggestions} onSelect={(s) => viewModel.selectSuggestion(s)} />
        )}
      </div>
    );
  }
);
