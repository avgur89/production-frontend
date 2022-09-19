import { Link } from "react-router-dom";
import classNames from "classnames";
import { useTheme } from "app/providers/ThemeProvider";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <button onClick={toggleTheme}>{theme}</button>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};
