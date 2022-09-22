import { clsx } from "clsx";
import { ButtonHTMLAttributes, FC } from "react";
import classes from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      type="button"
      className={clsx(classes.button, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
