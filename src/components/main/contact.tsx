import classes from "../../styles/global.module.css";

function Contact() {
  return (
    <section className={classes.section}>
      <div className={classes.contactContainer}>
        <div>
          <h2 className={classes.sectionTitle}>Get in touch</h2>
          <br />
          <br />
          <p className={classes.paragraph}>
            If you are interested in me and my work
          </p>
          <br />
          <br />
          <p className={classes.paragraph}>petterfogel96@gmail.com</p>
          <br />
          <p className={classes.paragraph}>+46 705773264</p>
        </div>
        <div className={classes.socialHolder}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
