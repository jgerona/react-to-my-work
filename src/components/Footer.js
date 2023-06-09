// add links to github and linkedin
import React from "react";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";

export default function Footer() {

    const styles = {
        "width": "100px",
        "height": "70px",
        "object-fit": "cover",
    }
  return (
    <div className="" style={{ minHeight: "100vh" }}>
      <div
        className="justify-content-center text-center position-fixed bottom-0"
        style={{ width: "100%" }}
      >
        <a href="https://github.com/jgerona" className="img-fluid"> 
          <img src={github} style={styles}/>
        </a>
        <a href="https://www.linkedin.com/in/joseph-gerona/" className="img-fluid">
          <img src={linkedin} style={styles}/>
        </a>
      </div>
    </div>
  );
}
