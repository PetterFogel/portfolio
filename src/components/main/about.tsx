import classes from "../../styles/global.module.css";

function About() {
  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>Who am I</h2>
      <br /><br />
      <p className={classes.paragraph}>
        I’m a 25 year old based in Gothenburg Sweden. In september 2020, I
        started my education at Medieinstitutet to pursuit a career as a
        frontend developer.
      </p>
      <br /><br />
      <p className={classes.paragraph}>
        I’v always been creative but I never really knew how to to use these
        skills. That was until I found my new passion of web development.
      </p>
    </section>
  );
}

export default About;
