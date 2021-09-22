import { Fragment } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import MainContent from './components/pages/mainContent';

function App() {
  return (
    <Fragment>
      <Navigation />
      <MainContent />
    </Fragment>
  );
}

export default App;
