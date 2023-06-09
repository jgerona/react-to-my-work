import React from "react";
import buildAPoem from '../../assets/images/build-a-poem.png'
import crimeTracker from '../../assets/images/Crime-Tracker.png'
import takeNote from '../../assets/images/take-note.png'
import techThoughts from '../../assets/images/tech-thoughts.png'

export default function Portfolio() {

  // const styles = {
  //   imgStyle: {
  //     border: '3px solid black',
  //     borderRadius: "40px",
  //     height: '10px',
  //     width: "auto",
  //     display: "grid",
  //   },
  //   imgSpace: {
  //     margin: '20px 0px'
  //   }
  // }
  return (
    <div>
      <h1 className="mt-4 text-center" style={{color: "#EEEEEE"}}>Portfolio Page</h1>
      <div className="mt-5 container">
        <div className="row g-2">
          <div className="col-6">
            <div className="p-3 border bg-light">
              <a href="https://github.com/jgerona/build-a-poem" target="_blank" rel="noreferrer">
                <img src={buildAPoem} className="img-fluid" alt="Build-A-Poem"/>
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 border bg-light">
              <a href="https://github.com/jgerona/crime-tracker" target="_blank" rel="noreferrer">
                <img src={crimeTracker} className="img-fluid" alt="Crime-Tracker"/>
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 border bg-light">
              <a href="https://github.com/jgerona/take-note" target="_blank" rel="noreferrer">
                <img src={takeNote} className="img-fluid" alt="Take-Note"/>
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 border bg-light">
              <a href="https://github.com/jgerona/tech-thoughts" target="_blank" rel="noreferrer">
                <img src={techThoughts} className="img-fluid" alt="Tech-Thoughts"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
