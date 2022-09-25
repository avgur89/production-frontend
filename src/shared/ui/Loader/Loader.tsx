import { clsx } from "clsx";

import "./Loader.scss";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={clsx("lds-ellipsis", [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
