import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import "../css/Cart.css";
function Cart() {
  const { cartItems } = useCart();
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart</h2>
        <p>Your cart is currently empty.</p>
      </div>
    );
  }
  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <h2 className="cart-count">Total Items: {cartItems.length}</h2>
      </div>
      <div className="cart-items">
        {cartItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Cart;
