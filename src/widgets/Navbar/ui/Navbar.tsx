import { clsx } from "clsx";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={clsx(classes.navbar, [className])}>
      <div className={classes.links}>
        <AppLink
          to={"/"}
          theme={AppLinkTheme.SECONDARY}
          className={classes.link}
        >
          Home
        </AppLink>
        <AppLink
          to={"/about"}
          theme={AppLinkTheme.SECONDARY}
          className={classes.link}
        >
          About
        </AppLink>
      </div>
    </div>
  );
};
