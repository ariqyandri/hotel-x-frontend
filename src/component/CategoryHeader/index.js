import React from "react";
import "./CategoryHeader.css";

export default function CategoryHeader({ info }) {
  const { name, description, imageUrl } = info;
  return (
    <div>
      <div className="category-header">
        <div className="content-image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="page-margin">
          <div className="content-info">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
