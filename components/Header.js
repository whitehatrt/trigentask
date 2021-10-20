import Link from "../utils/ActiveLink";
import axios from "axios";
import { useEffect, useState } from "react";
const Header = ({ isAdmin }) => {
  const [headerRoutes, setHeaderRoutes] = useState();

  useEffect(async () => {
    if (!isAdmin) {
      const res = await axios.get("headerRoutes");
      setHeaderRoutes(res.data);
    }
    if (isAdmin) {
      const res = await axios.get("headerRoutesAdmin");
      setHeaderRoutes(res.data);
    }
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-3 ">
        <div className="container-fluid">
          <Link activeClassName="active" href="/">
            <a className="navbar-brand">MyShop</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {headerRoutes?.map((route, i) => {
                return (
                  <li className="nav-item" key={i}>
                    <Link activeClassName="active" href={route.path}>
                      <a className="nav-link">{route.label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
