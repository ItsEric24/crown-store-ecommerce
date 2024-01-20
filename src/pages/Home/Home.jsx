import Brands from "../../components/Brands/Brands";
import Email from "../../components/Email/Email";
import FeaturedCategories from "../../components/FeaturedCategories/FeaturedCategories";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <div className="w-full h-[500px]">
      <Hero />
      <FeaturedCategories />
      <FeaturedProduct />
      <Brands />
      <Email />
      <Footer />
    </div>
  );
}
export default Home;
