import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
         <img src={logo} />
        </button>
      </div>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl text-primary">
          seashell
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-primary">
          <li>
            <Link to="/how">How It Works</Link>
          </li>
          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
          <li>
            <Link to="/workshops">Workshops</Link>
          </li>
          <li>
            <Link to="/studios">Studios</Link>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
