import { FC, Fragment, useState } from "react";
import { MenuModal } from "./components/navigation/MenuModal";
import { Navigation } from "./components/navigation/Navigation";
import { MainContent } from "./components/pages/MainContent";
import classes from "./styles/global.module.css";
import "./App.css";

export const App: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openBurgerMenuHandler = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Navigation onModalClick={openBurgerMenuHandler} />
      <MenuModal isOpen={isOpen} onCloseModalClick={openBurgerMenuHandler} />
      <MainContent />
      <footer className={classes.footer}>Created by me, Petter Fogel</footer>
    </Fragment>
  );
};
