import React from "react";
import { Carousel } from "react-bootstrap";

export default function HomeCarousel({ categories }) {
  console.log(categories);
  return (
    <div>
      <Carousel>
        {categories.map(({ name, imageUrl, description }) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={imageUrl} alt={name} />
              <Carousel.Caption>
                <h1>{name}</h1>
                <h3>{description}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
