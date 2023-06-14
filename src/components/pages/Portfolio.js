import React from "react";
import buildAPoem from '../../assets/images/build-a-poem.png'
import crimeTracker from '../../assets/images/Crime-Tracker.png'
// import takeNote from '../../assets/images/take-note.png'
import monostich from '../../assets/images/monostich.png'
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
          <div className="col-6 card">
            <div className="p-3 border bg-light text-center">
              <img src={buildAPoem} className="img-fluid card-img" alt="Build-A-Poem"/>
              <div className="card-img-overlay justify-content-center text-align-center">
                <a href="https://github.com/jgerona/build-a-poem" target="_blank" rel="noreferrer">
                  <h5 className="card-title">Build A Poem</h5>
                  <p className="card-text">Github Repo</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 card">
            <div className="p-3 border bg-light text-center">
              <img src={crimeTracker} className="img-fluid card-img" alt="Build-A-Poem"/>
              <div className="card-img-overlay justify-content-center text-align-center">
                <a href="https://github.com/jgerona/crime-tracker" target="_blank" rel="noreferrer">
                  <h5 className="card-title">Crime Tracker</h5>
                  <p className="card-text">Github Repo</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 card">
            <div className="p-3 border bg-light text-center">
              <img src={monostich} className="img-fluid card-img" alt="Build-A-Poem"/>
              <div className="card-img-overlay justify-content-center text-align-center">
                <a href="https://github.com/dingbat-weasel/monostich" target="_blank" rel="noreferrer">
                  <h5 className="card-title">Monostich</h5>
                  <p className="card-text">Github Repo</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 card">
            <div className="p-3 border bg-light text-center">
              <img src={techThoughts} className="img-fluid card-img" alt="Build-A-Poem"/>
              <div className="card-img-overlay justify-content-center text-align-center">
                <a href="https://github.com/jgerona/tech-thoughts" target="_blank" rel="noreferrer">
                  <h5 className="card-title">Tech Thoughts</h5>
                  <p className="card-text">Github Repo</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
