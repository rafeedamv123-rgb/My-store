import { Link } from "react-router-dom";
import "../css/NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">MY STORE</h1>
      <div className="navbar-brand">
        <Link to="/">Home</Link>

        <Link to="/cart">Shopping bag</Link>
      </div>
    </nav>
  );
}
export default NavBar;
