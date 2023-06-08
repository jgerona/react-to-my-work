import React from "react";

export default function Portfolio() {
  return (
    <div>
      <h1 className="mt-4 text-center" style={{color: "#EEEEEE"}}>Portfolio Page</h1>
      <div className="mt-5 container">
        <div className="row g-2">
          <div className="col-6">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-6">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-6">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-6">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
        </div>
      </div>
    </div>
  );
}
