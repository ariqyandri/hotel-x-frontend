import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./HomeCarousel.css";

export default function HomeCarousel({ categories }) {
  console.log(categories);
  return (
    <div>
      <Carousel wrap="true" interval={5000}>
        {categories.map(({ name, imageUrl, description }) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100 height" src={imageUrl} alt={name} />
              <Carousel.Caption>
                <h1>{name}</h1>
                <b />
                <h3>Visit Page</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
