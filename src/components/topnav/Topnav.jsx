import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import { navItems } from "./navItems";
const Topnav = () => {
  return (
    <div className="container-fluid fixed-top">
      <Topbar />
      <div className="container px-0">
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
          <Link to="/" className="navbar-brand">
            <h1 className="text-primary display-6">Fruitables</h1>
          </Link>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary" />
          </button>
          <div
            className="collapse navbar-collapse bg-white"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto">
              {navItems.map((item, index) => (
                <Link key={index} to={item.url} className="nav-item nav-link">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="d-flex m-3 me-0">
              <button
                className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fas fa-search text-primary" />
              </button>
              <a href="#" className="position-relative me-4 my-auto">
                <i className="fa fa-shopping-bag fa-2x" />
                <span
                  className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                  style={{ top: "-5px", left: 15, height: 20, minWidth: 20 }}
                >
                  3
                </span>
              </a>
              <a href="#" className="my-auto">
                <i className="fas fa-user fa-2x" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Topnav;
