import { Project } from "../models/project";
import movieBox from "../../assets/movie-box.png";
import shoeway from "../../assets/shoeway.png";

export const ProjectListData: Project[] = [
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
