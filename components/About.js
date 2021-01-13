import React from "react";

const DATA = {
  heading: "WHO WE ARE?",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consectetur perferendis expedita quis eveniet ad? Similique distinctio nihil iusto odit consectetur. Quo, vero culpa? Vitaepariatur culpa perspiciatis dolor, quaerat assumenda molestias hicneque eaque obcaecati, reiciendis aperiam sit ipsa! Ab accusamusid placeat impedit quos vero ea, nesciunt eos. Lorem ipsum dolorsit amet consectetur adipisicing elit. Ducimus expedita qui,asperiores rerum architecto sunt, magnam cumque, repudiandae ipsacommodi beatae recusandae sequi. Quod quibusdam excepturiperferendis pariatur voluptatem illo."
};

export default function About() {
  return (
    <div>
      <div className="row">
        <div className="container-fluid whoAreWe p-5">
          <div className="container p-5 text-white" id="about">
            <h1 className="text-center fw-bold">{DATA.heading}</h1>
            <p className="text-center aboutText">{DATA.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
