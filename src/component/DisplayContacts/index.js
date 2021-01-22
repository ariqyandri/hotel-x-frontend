import React from "react";
import "./DisplayContacts.css";

export default function DisplayContacts({ contacts }) {
  return (
    <div>
      {categories.map(({ name, description, imageUrl }, i) => {
        return (
          <div key={i} className="display-category">
            <div className="content-image">
              <img src={imageUrl} alt={name} />
            </div>
            <div className="content-info">
              <h1>{name}</h1>
              <p>{description}</p>
              <h4>Visit</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
