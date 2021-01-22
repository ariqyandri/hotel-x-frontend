import React from "react";
import "./DisplayContacts.css";

export default function DisplayContacts({ contacts }) {
  return (
    <div className="display-contacts">
      {contacts.map(({ platform, info, iconUrl, linkUrl }, i) => {
        return (
          <div className="contact hvr-grow" key={i}>
            <a href={linkUrl}>
              <div className="contact-icon">
                <img src={iconUrl} alt={platform} />
              </div>
              <div className="contact-info">
                <h4>{platform}</h4>
                <p>{info}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
