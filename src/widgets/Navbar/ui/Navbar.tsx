import { useTranslation } from "react-i18next";
import { clsx } from "clsx";

import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(classes.navbar, [className])}>
      <div className={classes.links}>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={classes.link}
        >
          {t("Головна сторінка")}
        </AppLink>
        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
          className={classes.link}
        >
          {t("Про сайт")}
        </AppLink>
      </div>
    </div>
  );
};
