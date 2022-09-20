import { useState } from "react";
import { clsx } from "clsx";
import classes from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={clsx(classes.sidebar, { [classes.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={classes.row}>
        <button onClick={onToggle}>Toggle</button>
      </div>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        {/* <LangSwitcher /> */}
      </div>
    </div>
  );
};
