import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import classNames from "classnames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { useTheme } from "app/providers/ThemeProvider";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <button onClick={toggleTheme}>{theme}</button>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
