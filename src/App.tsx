import "./App.css";
import {
  AutoCompleteControlView,
  AutoCompleteControlViewModel,
  ButtonTextControlView,
  ButtonTextControlViewModel,
} from "./components";

const auto1 = new AutoCompleteControlViewModel(3);
const auto2 = new AutoCompleteControlViewModel(10);

const vm1 = new ButtonTextControlViewModel();

const vm2 = new ButtonTextControlViewModel();

const App = () => {
  return (
    <div className="app">
      <div>
        <h3 className="app__header">Автокомплит (3 подсказки)</h3>
        <AutoCompleteControlView viewModel={auto1} />
      </div>

      <div>
        <h3 className="app__header">Автокомплит (10 подсказок)</h3>
        <AutoCompleteControlView viewModel={auto2} />
      </div>

      <div
        className="app__controls"
      >
        <h2>Контрол с двумя кнопками справа</h2>
        <ButtonTextControlView
          viewModel={vm1}
          rightButtons={[
            { text: "Очистить", onClick: vm1.clearText },
            { text: "Hello world!", onClick: vm1.setHelloWorld },
          ]}
        />

        <h2>Контрол с кнопкой слева и кнопкой справа</h2>
        <ButtonTextControlView
          viewModel={vm2}
          leftButtons={[
            { text: "Проверить число", onClick: vm2.alertIfNumber },
          ]}
          rightButtons={[{ text: "Показать текст", onClick: vm2.alertText }]}
        />
      </div>
    </div>
  );
};

export default App;
