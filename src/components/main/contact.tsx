import classes from "../../styles/global.module.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <section className={classes.section}>
      <div className={classes.contactContainer}>
        <div>
          <h2 className={classes.sectionTitle}>Get in touch</h2>
          <p className={classes.paragraph}>
            If you are interested in me and my work
          </p>
          <p className={classes.paragraph}>petterfogel96@gmail.com</p>
          <p className={classes.paragraph}>+46 705773264</p>
        </div>
        <div className={classes.socialHolder}>
          <div className={classes.socialMediaIcons}>
            <VscGithubInverted />
          </div>
          <div className={classes.socialMediaIcons}>
            <FaLinkedinIn />
          </div>
          <div className={classes.socialMediaIcons}>
            <SiGmail />
          </div>
          <div className={classes.socialMediaIcons}>
            <FaFacebookF />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
