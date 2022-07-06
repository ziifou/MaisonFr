import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Slider from "../components/Slider";
function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">explorer</p>
      </header>
      <main>
        <Slider />
        <p className="exploreCategoryHeading">Catégories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">annonces de location</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              alt="sell"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">annonces de vente </p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
