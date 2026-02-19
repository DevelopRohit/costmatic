import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        setProduct(snapshot.data());
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "100px 80px" }}>
      <img
        src={product.image}
        alt={product.name}
        width="300"
      />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>⭐ {product.rating}</p>
    </div>
  );
}

export default ProductPage;
