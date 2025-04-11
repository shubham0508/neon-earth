import Breadcrumbs from "./component/BreadCrumb";
import DesignOnOtherProducts from "./component/DesignOnOtherProducts";
import FaqSection from "./component/FAQs";
import ProductCarousel from "./component/Personalize";
import ProductDetail from "./component/ProductDescription";
import ProductInsights from "./component/ProductInsights";
import ProductSpecification from "./component/ProductSpecification";
import RatingAndReview from "./component/Review";

export default function Home() {
  return (
    <div className="p-10">
      <Breadcrumbs />
      <ProductSpecification />
      <ProductDetail />
      <RatingAndReview />
      <FaqSection />
      <ProductInsights />
      <DesignOnOtherProducts />
      <ProductCarousel />
    </div>
  );
}
