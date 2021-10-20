import { FC, useState } from "react";
import classes from "../../styles/navigation.module.css";

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>Petter</h2>
      <div className={classes.burgerMenu} onClick={clickHandler}>
        <div
          className={isOpen ? classes.burgerBar1Rotate : classes.burgerBar1}
        ></div>
        <div
          className={isOpen ? classes.burgerBar2Rotate : classes.burgerBar2}
        ></div>
      </div>
      <div className={classes.fixedEmail}>
        <a className={classes.aLink} href="mailto:petterfogel96@gmail.com">
          petterfogel96@gmail.com
        </a>
      </div>
    </header>
  );
};

export default Navigation;
