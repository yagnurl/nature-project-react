import React from "react";

const DATA = {
  brand: "NATURE",
  menuItems: ["Gallery", "Team", "About"]
};

export default function Navbar() {
  return (
    <div>
      <div className="row">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <strong>{DATA.brand}</strong>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav d-flex ">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#gallery"
                  >
                    {DATA.menuItems[0]}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    {DATA.menuItems[1]}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    {DATA.menuItems[2]}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
