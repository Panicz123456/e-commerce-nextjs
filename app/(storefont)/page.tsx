import { CategorySelection } from "../components/storefront/CategortySelection";
import { FeaturedProducts } from "../components/storefront/FeaturedProducts";
import { Footer } from "../components/storefront/Footer";
import { Hero } from "../components/storefront/Hero";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <CategorySelection />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default IndexPage;
