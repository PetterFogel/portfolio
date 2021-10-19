import classes from "../../styles/global.module.css";
import { animated, useSpring } from "react-spring";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { FC } from "react";

const IntroContent: FC = () => {
  const fadeIn = useSpring({
    from: {
      opacity: 0,
      marginTop: 300,
    },
    to: {
      opacity: 1,
      marginTop: 0,
    },
    config: {
      duration: 1200,
    },
  });

  return (
    <section className={classes.section}>
      <animated.div style={fadeIn}>
        <h2 className={classes.subHeadTitle}>Hello, World!</h2>
        <h1 className={classes.headTitle}>My name is Petter Fogel.</h1>
        <h2 className={classes.subHeadTitle}>
          I am a Front-End developer student with passion for creative solutions
          and design.
        </h2>
      </animated.div>
      <div className={classes.arrowHolder}>
        <HiOutlineArrowNarrowDown className={classes.arrowIcon} />
      </div>
    </section>
  );
};

export default IntroContent;
