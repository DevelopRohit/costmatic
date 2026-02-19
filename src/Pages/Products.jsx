import ProductCard from "../components/ProductCard";
import { products } from "../data";

function Products(){
  return(
    <div className="products">
      {products.map(item=>(
        <ProductCard key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default Products;
