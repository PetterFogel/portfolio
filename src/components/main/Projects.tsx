import { FC } from "react";
import classes from "../../styles/global.module.css";
import movieBox from "../../assets/movie-box.png";
import shoeway from "../../assets/shoeway.png";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProjectItem {
  img: string;
  netlifyLink: string;
  repoLink: string;
  alt: string;
  info: string;
}

const ProjectList: ProjectItem[] = [
  {
    img: movieBox,
    netlifyLink: "https://moviebox-api.netlify.app/",
    repoLink: "https://github.com/PetterFogel/movies-api",
    alt: "movie-box",
    info: "A project to fetch box-office movies from the tmdb-api. Users can render popular and upcoming movies and also add them to the favoritelist.",
  },
  {
    img: shoeway,
    netlifyLink: "https://shoeway.netlify.app/",
    repoLink: "https://github.com/PetterFogel/react-e-store",
    alt: "shoeway",
    info: "School project of a e-commerce website that renders a list of shoeproducts. Users can add products to the checkout, fill in personaldetails and payment methods and finally get a receipt from theirpurchase.",
  },
];

const Projects: FC = () => {
  AOS.init({
    offset: 100,
    duration: 2000,
    easing: "ease",
    once: true,
  });

  return (
    <section className={classes.section}>
      <h2 data-aos="fade-left" className={classes.sectionTitle}>
        What I've done
      </h2>
      <div data-aos="fade-up">
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
          {ProjectList.map((project) => (
            <div className={classes.imageHolder}>
              <img
                className={classes.image}
                src={project.img}
                alt="movie-box"
              />
              <div className={classes.overlay}>
                <p>{project.info}</p>
                <div className={classes.btnHolder}>
                  <a
                    href={project.netlifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={classes.btn}>Netlify</button>
                  </a>

                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={classes.btn}>Repo</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
