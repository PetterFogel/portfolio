import classes from "../../styles/mainContent.module.css";
import About from "../main/about";
import Intro from "../main/intro";

function MainContent() {
  return (
    <main className={classes.main}>
      <Intro />
      <About />
    </main>
  );
}

export default MainContent;
