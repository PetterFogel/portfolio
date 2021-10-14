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
              <button className={classes.btn}>Netlify</button>
              <button className={classes.btn}>Repo</button>
            </div>
          </div>
        </div>
        <div className={classes.imageHolder}>
          <img className={classes.image} src={shoeway} alt="movie-box" />
          <div className={classes.overlay}>
            <p>Overlay Test</p>
          </div>
        </div>
        <div className={classes.imageHolder}>
          <img className={classes.image} src={movieBox} alt="movie-box" />
          <div className={classes.overlay}>
            <p>Overlay Test</p>
          </div>
        </div>
        <div className={classes.imageHolder}>
          <img className={classes.image} src={movieBox} alt="movie-box" />
          <div className={classes.overlay}>
            <p>Overlay Test</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
