import React from "react";
import myPic from "../../assets/mypic.png";

export default function About() {
  return (
    <div className="mt-2">
      <h1 className="ms-5">Joseph Gerona</h1>
      <div className="container justify-content-center align-items-center mt-2">
        <div className="d-flex justify-content-center flex-row center">
          <img src={myPic} width={"66%"} className="center" alt="my-pic"></img>
        </div>
        <div className="mt-2 d-flex flex-row center justify-content-center">
          <h3 className="text-align-center">
            Hello! I'm a Full Stack Developer living in Seattle. I recieved my
            B.S. in Mathematics from the University of Washington, Bothell. I
            then pursued my passion of computer science through web development
            and building applications!
          </h3>
        </div>
      </div>
    </div>
  );
}
