import React from "react";
import "./DisplayRoomFacilities.css";

export default function DisplayRoomFacilities({ facilities }) {
  return (
    <div className="display-room-facilities">
      {facilities.map(({ name, iconUrl }, i) => {
        return (
          <div key={i}>
            <div className="room-facility-icon">
              <img src={iconUrl} alt={name} />
            </div>
            <div className="room-facility-info">
              <p>{name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
