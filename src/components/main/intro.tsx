import classes from "../../styles/global.module.css";
import { animated, useSpring } from "react-spring";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

function IntroContent() {
  const styles = useSpring({
    from: {
      opacity: 0,
      marginTop: 300,
    },
    to: {
      opacity: 1,
      marginTop: 0,
    },
    config: {
      duration: 1000,
    },
  });
  return (
    <section className={classes.section}>
      <animated.div style={styles}>
        <h1 className={classes.sectionTitle}>
          Hello, World!
          <br />
          <span className={classes.headTitle}>My name is Petter Fogel.</span>
          <br />I am a Front-End developer student with passion for creative
          solutions and design.
        </h1>
      </animated.div>
      <div className={classes.arrowHolder}>
        <HiOutlineArrowNarrowDown className={classes.arrowIcon} />
      </div>
    </section>
  );
}

export default IntroContent;
