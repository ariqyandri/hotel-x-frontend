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
        <div className="page-margin">
          <div className="content-info">
            <h1>About Us</h1>
            <h3>{slogan}</h3>
            <p>{description}</p>
            <div>
              {[{ address }, { phone }, { email }].map((info, i) => {
                return (
                  <div key={i}>
                    <h4>{Object.keys(info)[0]}</h4>
                    <p>{info[`${Object.keys(info)[0]}`]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
