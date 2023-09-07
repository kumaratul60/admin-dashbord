import Single from "../../components/Single";
import { singleProduct } from "../../utils/mockData";
import "./product.scss";

const Product = () => {
  //Fetch data and send to Single Component
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
