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
        <Link to="/" className="btn btn-ghost text-xl text-slate-200">
          seashell
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/how">how it works</Link>
          </li>
          <li>
            <Link to="/instructors">instructors</Link>
          </li>
          <li>
            <Link to="/workshops">workshops</Link>
          </li>
          <li>
            <Link to="/studios">studios</Link>
          </li>
          <li>
            <a>faq</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
