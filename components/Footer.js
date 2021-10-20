import Link from "../utils/ActiveLink";
import axios from "axios";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footerRoutes, setFooterRoutes] = useState();

  useEffect(async () => {
    const res = await axios.get("headerRoutes");
    setFooterRoutes(res.data);
  }, []);
  return (
    <div >
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          {footerRoutes?.map((route, i) => {
            return (
              <li className="nav-item" key={i}>
                <Link  href={route.path}>
                  <a className="nav-link px-2 ">{route.label}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="text-center text-muted">
          © {new Date().getFullYear()} MyShop, Inc
        </p>
      </footer>
    </div>
  );
};

export default Footer;
