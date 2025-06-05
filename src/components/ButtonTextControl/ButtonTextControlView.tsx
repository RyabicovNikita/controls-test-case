import "./style.css";
import { observer } from "mobx-react-lite";
import { Button } from "./Button";
import { ButtonProps } from "../../types/types";
import { ButtonTextControlViewModelType } from "./ButtonTextControlViewModel";

interface ButtonTextControlViewProps {
  viewModel: ButtonTextControlViewModelType;
  leftButtons?: ButtonProps[];
  rightButtons?: ButtonProps[];
}

export const ButtonTextControlView = observer(
  ({
    viewModel,
    leftButtons = [],
    rightButtons = [],
  }: ButtonTextControlViewProps) => (
    <div className="button-text-control">
      {leftButtons.map((btnProps, i) => (
        <Button key={i} {...btnProps} />
      ))}
      <input
        type="text"
        value={viewModel.text}
        onChange={(e) => viewModel.setText(e.target.value)}
      />
      {rightButtons.map((btnProps, i) => (
        <Button key={i} {...btnProps} />
      ))}
    </div>
  )
);
