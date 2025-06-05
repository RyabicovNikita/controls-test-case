import { makeAutoObservable, runInAction } from "mobx";
import { CountryInfo, getCountryByName } from "../../api/apiService";


export class AutoCompleteControlViewModel {
  text = "";
  suggestions : CountryInfo[] = [];
  maxSuggestions = 3;

  constructor(maxSuggestions: number) {
    this.maxSuggestions = maxSuggestions;
    makeAutoObservable(this);
  }

  setText(value: string) {
    this.text = value;
    this.fetchSuggestions();
  }

  async fetchSuggestions() {
    if (this.text.length < 1) {
      this.suggestions = [];
      return;
    }

    const result = await getCountryByName(this.text);
    const seen = new Set();
    const unique = result.filter(item => {
      const key = item.name + item.fullName;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    runInAction(() => {
      this.suggestions = unique.slice(0, this.maxSuggestions);
    });
  }

  selectSuggestion(suggestion : CountryInfo) {
    this.text = suggestion.name;
    this.suggestions = [];
  }
}