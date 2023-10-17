import React from "react";
import "../Pages/Home.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand">
            <img
              src="https://s3-alpha-sig.figma.com/img/a6b0/6f12/3cac62d0f253957fb113cf84d865ae99?Expires=1698624000&Signature=CzxAcn5G-4sOuHWNl0r~ckYG58qr9I0GnmpQq07qEc9du5VuF3erfHbgshVc1crvUypgWmORMwN-9wq5WA-GH34gqbvVcPpWHsbSTvEdiSZJpLPksmKhMOgLx7ZTipSVAHQpmry8~5QKnP~NwZLLJ0MKLXDvOPEZj6Zj7sHOLXQZHnhFBVEQtWAd3y-iiH3nI0UOqYu9Ai6sd~2ag8Jwwnk1n0nyAUIxqw6fmLorfl3pDRh4VTaiGbP77mTpkRceJShw6RjtrZc8uP5-tG4FxIGizWgVzzNfbKvqNSJQDVHkQbO8p4pMkktkUwQ3c79yz6g7bGlZSlJw4Z52b7nCiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="logo"
              className="logo"
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
              <li className="nav-item">
                <a className="nav-link text-white head" aria-current="page">
                  CAR SERVICES
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page">
                  Spares
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
