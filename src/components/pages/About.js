import React from "react";
import myPic from "../../assets/images/mypic.png";

export default function About() {


  const styles = {
    color: "#EEEEEE"
  }
  return (
    <div className="container mt-4">
      <h1 className="text-center align-items-center" style={styles}>Joseph Gerona</h1>
      <div className="container justify-content-center align-items-center mt-2">
        <div className="mt-4 d-flex justify-content-center flex-row center">
          <img src={myPic} width={"66%"} className="center" alt="my-pic"></img>
        </div>
        <div className="mt-2 d-flex flex-row center justify-content-center">
          <h3 className="text-align-center" style={styles}>
            Hello! I'm a Full Stack Developer living in Seattle. I recieved my
            B.S. in Mathematics from the University of Washington, Bothell.
            After my graduation, my passion of computer science lead me to web
            development and building applications!
          </h3>
        </div>
      </div>
    </div>
  );
}
