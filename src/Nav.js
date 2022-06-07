import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav-links">
      <nav className="links">
        <Link className="link-button" to="/">
          <button>Home</button>
        </Link>

        <Link className="link-button" to="/Noah">
          <button>Noah</button>
        </Link>

        <Link className="link-button" to="/Ryleigh">
          <button>Ryleigh</button>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
