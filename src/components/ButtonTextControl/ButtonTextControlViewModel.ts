import { makeAutoObservable } from "mobx";

export class ButtonTextControlViewModel {
  text = "";
  constructor() {
    makeAutoObservable(this);
  }

  setText(value: string) {
    this.text = value;
  }

  clearText = () => {
    this.text = "";
  }

  setHelloWorld = () => {
    this.text = "Hello world!";
  }

  alertText = ()  => {
    alert(this.text);
  }

  alertIfNumber = () => {
    if (!isNaN(Number(this.text))) {
      alert(this.text);
    }
  }
}

export type ButtonTextControlViewModelType = ButtonTextControlViewModel;