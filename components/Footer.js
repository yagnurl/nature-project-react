import React from "react";

const DATA = {
  heading: ["LOCATION", "ABOUT FREELANCER", "AROUND THE WEB"],
  lorem:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus.",
  address: ` 3481 Melrose Place 
  Beverly Hills, CA 90210`,
  author: "Yağnur Tetikcan"
};

export default function Footer() {
  return (
    <div>
      <div className="row ">
        <footer className="bg-light text-muted text-center text-lg-start">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-4 col-md-4 mb-4 mb-md-0 ">
                <h5 className="text-uppercase">{DATA.heading[0]}</h5>

                <p>{DATA.address}</p>
              </div>

              <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                <h5 className="text-uppercase">{DATA.heading[1]}</h5>
                <p> {DATA.lorem}</p>
              </div>

              <div className="col-lg-4 col-md-4 mb-4 mb-md-0 ">
                <h5 className="text-uppercase mb-2">{DATA.heading[2]}</h5>
                <ul className="list-unstyled mb-0 d-flex ">
                  <li>
                    <a href="#!" className="text-dark mx-2 " />
                    <i className="fab fa-instagram" />
                  </li>
                  <li>
                    <a href="#!" className="text-dark mx-2 ">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark mx-2 ">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark mx-2 ">
                      <i className="fab fa-unsplash" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center text-muted p-3 copyright">
            <p>
              {" "}
              2020 Copyright - Built by{" "}
              <a
                className="text-dark text-decoration-none"
                href="https://github.com/yagnurl"
              >
                {DATA.author}
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
