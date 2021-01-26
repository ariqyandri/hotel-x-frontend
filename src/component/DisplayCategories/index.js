import React from "react";
import { Link } from "react-router-dom";
import "./DisplayCategory.css";

export default function DisplayCategory({ categories }) {
  return (
    <>
      {categories.map(({ name, description, imageUrl }, i) => {
        return (
          <div key={i} className="display-category">
            <div className="content-image">
              <img src={imageUrl} alt={name} />
            </div>
            <div className="content-info">
              <h1>{name}</h1>
              <p>{description}</p>
              <h4>
                <Link to={`/${name.toLowerCase()}`}>Visit</Link>
              </h4>
            </div>
          </div>
        );
      })}
    </>
  );
}
