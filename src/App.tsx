import { FC, Fragment } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import MainContent from './components/pages/mainContent';
import classes from './styles/global.module.css';

const App: FC = () => {  
  return (
    <Fragment>
      <Navigation />
      <MainContent />
      <footer className={classes.footer}>
        Created by me, Petter Fogel
      </footer>
    </Fragment>
  );
}

export default App;
