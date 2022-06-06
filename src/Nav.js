import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="links">
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/Noah">
        <button>Noah</button>
      </Link>

      <Link to="/Ryleigh">
        <button>Ryleigh</button>
      </Link>
    </nav>
  );
}

export default Nav;
