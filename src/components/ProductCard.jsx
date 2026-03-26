import { useCart } from "../context/CartContext";
import "../css/ProductCard.css";
function ProductCard({ product }) {
  const { removeFromCart, addToCart, isCartEmpty } = useCart();
  const inCart = isCartEmpty(product.id);
  function onButtonClick() {
    if (inCart) {
      removeFromCart(product.id);
    } else addToCart(product);
    alert("Added to cart");
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-content">
        <h3>{product.title}</h3>
        <p className="category">{product.category}</p>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
      <div className="product-actions">
        <button className="add-to-cart" onClick={onButtonClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
