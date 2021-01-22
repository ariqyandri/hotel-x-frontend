import React from "react";
import "./DisplayAbout.css";

export default function DisplayAbout({ about }) {
  const { name, slogan, description, address, phone, email, imageUrl } = about;
  return (
    <div>
      <div className="display-about">
        <div className="content-image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="content-info">
          <h1>{name}</h1>
          <p>{description}</p>
          <h4>Visit</h4>
        </div>
      </div>
    </div>
  );
}
