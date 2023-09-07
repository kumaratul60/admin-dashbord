import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <Link to="https://github.com/kumaratul60" target="_blank" rel="noreferrer" className="user__link">
            <img
              src="https://w7.pngwing.com/pngs/857/611/png-transparent-github-git-hub-logo-icon-thumbnail.png"
              alt=""
            />
            <span>GitHub</span>
          </Link>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
