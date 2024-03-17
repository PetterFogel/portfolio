import { FC } from "react";
import { Link } from "react-scroll";
import classes from "../../styles/navigation.module.css";

type NavigationProps = {
  onModalClick: () => void;
};

export const Navigation: FC<NavigationProps> = ({
  onModalClick,
}: NavigationProps) => {
  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>
        <Link to="intro" smooth={true} duration={1000}>
          Petter
        </Link>
      </h2>
      <div className={classes.burgerMenu} onClick={onModalClick}>
        <div className={classes.burgerBar1}></div>
        <div className={classes.burgerBar2}></div>
      </div>
      <div className={classes.fixedEmail}>
        <a className={classes.aLink} href="mailto:petterfogel96@gmail.com">
          petterfogel96@gmail.com
        </a>
      </div>
    </header>
  );
};
