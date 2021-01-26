import React from "react";
import { Carousel } from "react-bootstrap";
import "./DisplayRooms.css";

export default function DisplayRooms({ rooms }) {
  return (
    <div>
      {rooms
        .sort((a, b) => a.id - b.id)
        .map(({ name, description, priceEuro, roomImages, facilities }, i) => {
          return (
            <div key={i} className="display-rooms">
              <div className="content-image">
                <Carousel
                  wrap={true}
                  interval={Math.floor(Math.random() * (4000 - 2500) + 2500)}
                >
                  {roomImages.map(({ title, url }, i) => {
                    return (
                      <Carousel.Item key={i}>
                        <img src={url} alt={title} />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>{" "}
              </div>
              <div className="content-info">
                <title>
                  <h1>{name}</h1>
                  <h1 className="price">{priceEuro}&euro; p.n.</h1>
                </title>
                <p>{description}</p>
                <ul>
                  {facilities.map(({ name: facilityName }, i) => {
                    return <li key={i}>{facilityName}</li>;
                  })}
                </ul>{" "}
              </div>
            </div>
          );
        })}
    </div>
  );
}
