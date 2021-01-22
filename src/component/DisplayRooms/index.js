import React from "react";
import DisplayRoomFacilities from "../DisplayRoomFacilities";
import "./DisplayRooms.css";

export default function DisplayRooms({ rooms }) {
  return (
    <div>
      {rooms
        .sort((a, b) => a.id - b.id)
        .map(({ name, description, priceEuro, imageUrl, facilities }, i) => {
          return (
            <div key={i} className="display-rooms">
              <div className="content-image">
                <img src={imageUrl} alt={name} />
              </div>
              <div className="content-info">
                <title>
                  <h1>{name}</h1>
                  <h1 className="price">{priceEuro}&euro; p.n.</h1>
                </title>
                <p>{description}</p>
                <ul>
                  {facilities.map(({ name: facilityName }) => {
                    return <li>{facilityName}</li>;
                  })}
                </ul>{" "}
              </div>
            </div>
          );
        })}
    </div>
  );
}
