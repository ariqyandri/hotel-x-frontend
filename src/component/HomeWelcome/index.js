import React from "react";
import "./HomeWelcome.css";

export default function HomeWelcome({ categories, about }) {
  const { address, phone, email } = about;
  return (
    <div>
      <div className="welcome">
        <h1>Welcome to Hotel X Amsterdam</h1>
        <p>{categories.find((c) => c.name === "About").description}</p>
        <div className="home-contact">
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
  );
}
