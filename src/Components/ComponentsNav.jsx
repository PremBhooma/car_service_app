import React, { useContext } from "react";
import "../Pages/Home.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Routes/AuthContext";

const ComponentsNav = () => {
  const { token, setToken } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid mx-3">
          <a className="navbar-brand">
            <img
              src="https://s3-alpha-sig.figma.com/img/a6b0/6f12/3cac62d0f253957fb113cf84d865ae99?Expires=1698624000&Signature=CzxAcn5G-4sOuHWNl0r~ckYG58qr9I0GnmpQq07qEc9du5VuF3erfHbgshVc1crvUypgWmORMwN-9wq5WA-GH34gqbvVcPpWHsbSTvEdiSZJpLPksmKhMOgLx7ZTipSVAHQpmry8~5QKnP~NwZLLJ0MKLXDvOPEZj6Zj7sHOLXQZHnhFBVEQtWAd3y-iiH3nI0UOqYu9Ai6sd~2ag8Jwwnk1n0nyAUIxqw6fmLorfl3pDRh4VTaiGbP77mTpkRceJShw6RjtrZc8uP5-tG4FxIGizWgVzzNfbKvqNSJQDVHkQbO8p4pMkktkUwQ3c79yz6g7bGlZSlJw4Z52b7nCiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="logo"
              className="logo1"
            />
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <a className="nav-link text-white head1" aria-current="page">
                  CAR SERVICES
                </a>
              </li>
              <li className="nav-item dropdown me-3">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hyderabad
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </ul>

            {token ? (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <a className="nav-link text-white" aria-current="page">
                    <Link to={"/slot"} className="ach">
                      Slot Book
                    </Link>
                  </a> */}
                  <a className="nav-link text-white" aria-current="page">
                    <Link to={"/#"} className="ach">
                      Spares
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white">
                    <Link to={"/blog"} className="ach">
                      Blog
                    </Link>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle1 text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to={"/faq"} className="ach text-dark">
                          FAQ
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to={"/contact"} className="ach text-dark">
                          Contact Us
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to={"/terms"} className="ach text-dark">
                          Terms
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to={"/privacy"} className="ach text-dark">
                          Privacy
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to={"/offers"} className="ach text-dark">
                          Offers
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to={"/reviews"} className="ach text-dark">
                          Reviews
                        </Link>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white ach">
                    <Link
                      className="ach"
                      to={"/"}
                      onClick={() => {
                        localStorage.clear("token");
                        setToken(null);
                      }}
                    >
                      Logout
                    </Link>
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <a className="nav-link text-white" aria-current="page">
                    <Link to={"/slot"} className="ach">
                      Slot Book
                    </Link>
                  </a> */}
                  <a className="nav-link text-white" aria-current="page">
                    <Link to={"/#"} className="ach">
                      Spares
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white">
                    <Link to={"/blog"} className="ach">
                      Blog
                    </Link>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle1 text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to={"/faq"} className="ach text-dark">
                          FAQ
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to={"/contact"} className="ach text-dark">
                          Contact Us
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to={"/terms"} className="ach text-dark">
                          Terms
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to={"/privacy"} className="ach text-dark">
                          Privacy
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to={"/offers"} className="ach text-dark">
                          Offers
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to={"/reviews"} className="ach text-dark">
                          Reviews
                        </Link>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white">
                    <Link to={"/login"} className="ach">
                      Login
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white">
                    <Link to={"/signup"} className="ach">
                      Register
                    </Link>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default ComponentsNav;
