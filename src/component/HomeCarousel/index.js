import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeCarousel.css";

export default function HomeCarousel({ categories }) {
  console.log(categories);
  return (
    <div className="home-carousel">
      <Carousel wrap={true} interval={5000}>
        {categories.map(({ name, imageUrl, description }, i) => {
          return (
            <Carousel.Item key={i}>
              <img className="d-block w-100 " src={imageUrl} alt={name} />
              <Carousel.Caption>
                <h1>{name}</h1>
                <b />
                <Link to={`/${name.toLowerCase()}`}>
                  <p>Visit Page</p>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
