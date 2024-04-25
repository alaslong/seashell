import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  return (
    <nav className="navbar bg-base-100 fixed top-0 z-50">
      <div class="flex-none">
        <button class="btn btn-square btn-ghost m-1">
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
            <HashLink smooth to="/#">Home</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#how">How It Works</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#providers">Providers</HashLink>
          </li>
          {/*<li>
            <Link to="/workshops">Workshops</Link>
          </li>
          <li>
            <Link to="/studios">Studios</Link>
  </li>*/}
          <li>
          <HashLink smooth to="/#faq">FAQ</HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
