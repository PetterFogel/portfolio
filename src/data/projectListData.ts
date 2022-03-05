import { Project } from "../models/project";
import movieBox from "../assets/movie-box.png";
import shoeway from "../assets/shoeway.png";
import poster from "../assets/poster.png";

export const ProjectListData: Project[] = [
  {
    img: poster,
    netlifyLink: "test",
    repoLink: "https://github.com/PetterFogel/json-server-ecommerce",
    alt: "poster",
    info: "This is a e-commerce project created with React, TypeScript and json-server package to fetch and manage api calls with redux-toolkit.",
  },
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
    info: "School project of a e-commerce website that renders a list of shoe products. Users can add products to the checkout, fill in personaldetails and payment methods and finally get a receipt from theirpurchase.",
  },
];
