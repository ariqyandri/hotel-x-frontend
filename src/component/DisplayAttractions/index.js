import React from "react";
import "./DisplayAttractions.css";

export default function DisplayAttractions({ attractions }) {
  return (
    <div>
      {attractions.map(
        ({ name, description, address, linkUrl, imageUrl }, i) => {
          return (
            <div key={i} className="display-attractions">
              <div className="content-image">
                <img src={imageUrl} alt={name} />
              </div>
              <div className="content-info">
                <h1>{name}</h1>
                <h3>{address}</h3>
                <p>{description}</p>
                <h4>
                  <a href={linkUrl}>Visit</a>
                </h4>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
