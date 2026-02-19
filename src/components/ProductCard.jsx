function ProductCard({item}){
  return(
    <div className="card">
      <img src={item.image} alt={item.name}/>
      <h3>{item.name}</h3>
      <div className="price">₹{item.price}</div>
      <button className="btn">Add to Cart</button>
    </div>
  )
}

export default ProductCard;
