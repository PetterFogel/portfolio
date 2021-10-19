import classes from "../../styles/global.module.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { SiGmail } from "react-icons/si";
import { FC } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: FC = () => {
  AOS.init({
    offset: 50,
    duration: 1000,
    // easing: "ease",
    once: true,
  });

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
          <a
            className={classes.socialMediaIcons}
            href="https://github.com/PetterFogel"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
          >
            <VscGithubInverted />
          </a>

          <a
            className={classes.socialMediaIcons}
            href="https://www.linkedin.com/in/petter-fogel/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
          >
            <FaLinkedinIn />
          </a>
          <a
            className={classes.socialMediaIcons}
            href="mailto:petterfogel96@gmail.com"
            data-aos="fade-up"
          >
            <SiGmail />
          </a>

          <a
            className={classes.socialMediaIcons}
            href="https://www.facebook.com/petter.fogel/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
