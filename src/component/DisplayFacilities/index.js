import React from "react";
import "./DisplayFacilities.css";

export default function DisplayFacilities({ facilities }) {
  return (
    <>
      {facilities.map(({ name, description, imageUrl }, i) => {
        return (
          <div key={i} className="display-facilities">
            <div className="content-image">
              <img src={imageUrl} alt={name} />
            </div>
            <div className="content-info">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
