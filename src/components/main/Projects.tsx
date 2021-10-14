import { FC } from "react";
import classes from "../../styles/global.module.css";
import movieBox from "../../assets/movie-box.png";
import shoeway from "../../assets/shoeway.png";

const Projects: FC = () => {
  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>What I've done</h2>
      <div className={classes.flexRow}>
        <p className={classes.paragraph}>
          All my projects can be viewed at my&nbsp;
        </p>
        <a
          className={classes.a}
          href="https://github.com/PetterFogel"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.
        </a>
      </div>
      <div className={classes.imageContainer}>
        <div className={classes.imageHolder}>
          <img className={classes.image} src={movieBox} alt="movie-box" />
          <div className={classes.overlay}>
            <p>
              A project to fetch box-office movies from the tmdb-api. Users can
              render popular and upcoming movies and also add them to the
              favoritelist.
            </p>
            <div className={classes.btnHolder}>
              <a
                href="https://moviebox-api.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={classes.btn}>Netlify</button>
              </a>

              <a
                href="https://github.com/PetterFogel/movies-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={classes.btn}>Repo</button>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.imageHolder}>
          <img className={classes.image} src={shoeway} alt="shoeway" />
          <div className={classes.overlay}>
            <p>
              School project of a e-commerce website that renders a list of shoe
              products. Users can add products to the checkout, fill in personal
              details and payment methods and finally get a receipt from their
              purchase.
            </p>
            <div className={classes.btnHolder}>
              <a
                href="https://shoeway.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={classes.btn}>Netlify</button>
              </a>

              <a
                href="https://github.com/PetterFogel/react-e-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={classes.btn}>Repo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
