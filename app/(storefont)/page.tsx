import { CategorySelection } from "../components/storefront/CategortySelection";
import { FeaturedProducts } from "../components/storefront/FeaturedProducts";
import { Hero } from "../components/storefront/Hero";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <CategorySelection />
      <FeaturedProducts />
    </div>
  );
};

export default IndexPage;
