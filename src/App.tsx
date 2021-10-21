import { FC, Fragment, useState } from "react";
import "./App.css";
import MenuModal from "./components/navigation/menuModal";
import Navigation from "./components/navigation/navigation";
import MainContent from "./components/pages/mainContent";
import classes from "./styles/global.module.css";

const App: FC = () => {
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

export default App;
