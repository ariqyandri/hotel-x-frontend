import React from "react";
import "./DisplayContacts.css";

export default function DisplayContacts({ contacts }) {
  return (
    <div className="display-contacts">
      {contacts.map(({ platform, info, iconUrl }, i) => {
        return (
          <div key={i}>
            <div className="contact-icon">
              <img src={iconUrl} alt={platform} />
            </div>
            <div className="contact-info">
              <h2>{platform}</h2>
              <p>{info}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
