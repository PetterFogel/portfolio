import { FC } from "react";
import classes from "../../styles/global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About: FC = () => {
  AOS.init({
    offset: 100,
    duration: 2000,
    easing: "ease",
    once: true,
  });

  return (
    <section className={classes.section}>
      <h2 data-aos="fade-right" className={classes.sectionTitle}>
        Who am I
      </h2>
      <div data-aos="fade-up">
        <p className={classes.paragraph}>
          I’m a 25 year old based in Gothenburg Sweden. In september 2020, I
          started my education at Medieinstitutet to pursuit a career as a
          frontend developer.
        </p>
        <p className={classes.paragraph}>
          I’v always been creative but I never really knew how to to use these
          skills. That was until I found my new passion of web development.
        </p>
      </div>
    </section>
  );
};

export default About;
