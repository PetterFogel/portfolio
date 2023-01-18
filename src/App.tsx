import { FC, Fragment, useState } from "react";
import { Navigation } from "./components/navigation/Navigation";
import { MenuModal } from "./components/navigation/MenuModal";
import { MainContent } from "./components/pages/MainContent";
import classes from "./styles/global.module.css";
import "./App.css";

export const App: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Navigation onBurgerMenuClick={clickHandler} />
      <MenuModal isOpen={isOpen} onCloseModalClick={clickHandler} />
      <MainContent />
      <footer className={classes.footer}>Created by me, Petter Fogel</footer>
    </Fragment>
  );
};
