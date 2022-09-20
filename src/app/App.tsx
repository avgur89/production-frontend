import { clsx } from "clsx";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={clsx("app", theme)}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
