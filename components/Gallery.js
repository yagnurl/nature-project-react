import React from "react";
export default function Gallery() {
  return (
    <div>
      <div className="container ">
        <div className="row gallery">
          <div className="row">
            <h1 className="text-white mt-5 text-center fw-bold">GALLERY</h1>
          </div>
          <div className="row mt-3">
            <div className="col-md-4 p-2">
              <img
                className=""
                src="https://picsum.photos/id/400/400/400?grayscale"
                alt=""
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src="https://picsum.photos/id/300/400/400?grayscale"
                alt=""
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src="https://picsum.photos/id/200/400/400?grayscale"
                alt=""
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4 p-2">
              <img
                src="https://picsum.photos/id/100/400/400?grayscale"
                alt=""
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src="https://picsum.photos/id/200/400/400?grayscale"
                alt=""
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src="https://picsum.photos/id/300/400/400?grayscale"
                alt=""
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4 p-2">
              {" "}
              <img
                src="https://picsum.photos/id/50/400/400?grayscale"
                alt=""
              />{" "}
            </div>
            <div className="col-md-4 p-2">
              <img src="https://picsum.photos/id/60/400/400?grayscale" alt="" />
            </div>
            <div className="col-md-4 p-2">
              <img src="https://picsum.photos/id/70/400/400?grayscale" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
