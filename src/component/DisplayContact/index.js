import React from "react";
import DisplayContacts from "../DisplayContacts";
import "./DisplayContact.css";

export default function DisplayContact({ contacts, contactInfo }) {
  const { name, description, imageUrl } = contactInfo;
  return (
    <div>
      <div className="display-contact">
        <div className="content-image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="page-margin">
          <div className="content-info">
            <h1>Contact Us</h1>
            <p>{description}</p>
            <DisplayContacts contacts={contacts} />
          </div>
        </div>
      </div>
    </div>
  );
}
