import React from "react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DATA = {
  heading: "OUR TEAM",
  lorem:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus.",
  name: ["John Doe"],
  job: ["Photographer"],
  card: function() {
    return (
      <div className="card col-md-4 border-0 rounded-4 mb-3 p-3  bg-dark mx-2">
        <div className="row d-flex ">
          <div className="col-md-3">
            <img
              className="rounded-circle p-4 m-auto "
              src="https://randomuser.me/api/portraits/med/women/5.jpg"
              alt="..."
            />
          </div>
          <div className="col-md-9">
            <div className="card-body text-white">
              <h5 className="card-title">{DATA.name}</h5>
              <p className="card-title text-muted">{DATA.job}</p>
              <p className="card-text">{DATA.lorem}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },

  cardGroup: function() {
    return (
      <div className="card-group " data-aos="fade-up" data-aos-duration="2000">
        {this.card()}
        {this.card()}
        {this.card()}
      </div>
    );
  }
};

export default function OurTeam() {
  return (
    <div>
      <div className="row mt-5 ">
        <div className="container-fluid bg-light ">
          <div className="container" id="team">
            <h1 className="text-center fw-bold mt-5 text-muted">
              {DATA.heading}
            </h1>
            {DATA.cardGroup()}
            {DATA.cardGroup()}
            {DATA.cardGroup()}
          </div>
          <br /> <br />
        </div>
      </div>
    </div>
  );
}


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <OurTeam />
  );
}

export default App;