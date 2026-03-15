import "./ProductCard.css";

function ProductCard({ item, addToCart }) {

  const discount =
    item.discountPrice
      ? Math.round(
          ((item.price - item.discountPrice) / item.price) * 100
        )
      : 0;

  return (
    <div className="card">

      <img src={item.image} alt={item.name} />

      <h3>{item.name}</h3>

      {/* Price Section */}
      <div className="priceBox">

        {item.discountPrice ? (
          <>
            <span className="oldPrice">
              ₹{item.price}
            </span>

            <span className="newPrice">
              ₹{item.discountPrice}
            </span>

            <span className="discount">
              {discount}% OFF
            </span>
          </>
        ) : (
          <span className="newPrice">
            ₹{item.price}
          </span>
        )}

      </div>

      <button
        className="btn"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;
