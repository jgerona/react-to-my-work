import React from "react";
import myResume from "../../assets/Resume.pdf";
import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import javascript from "../../assets/images/javascript.png";
import mongo from '../../assets/images/mongo.png';
import node from '../../assets/images/node.png'
import reactPng from '../../assets/images/react.png'

export default function Resume() {
  return (
    <div className="align-items-center justify-content-center text-center container">
      <div>
        <h1 className="text-center">
          <a
            role="button"
            className="mt-5 btn btn-primary btn-lg text-center"
            href={myResume}
            target="_blank"
            rel="noreferrer"
          >
            Click Here For My Resume!
          </a>
        </h1>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4"><img src={css}/></div>
            <div className="col-md-4"><img src={reactPng}/></div>
            <div className="col-md-4"><img src={html}/></div>
          </div>
          <div className="row">
            <div className="col-md-4"><img src={javascript}/></div>
            <div className="col-md-4"><img src={mongo}/></div>
            <div className="col-md-4"><img src={node}/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
