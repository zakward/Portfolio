import React from "react";

export default function CouselItem({ item }) {
  console.log("item", item.imgUrl);
  return (
    <>
      <div className="carousel-item">
        <div></div>
        <img
          referrerPolicy="no-referrer"
          className="carousel-img"
          src={item.imgUrl}
          alt="carousel-img"
        />
        <h3>{item.title}</h3>
        <div className="carousel-item-description">
          {item.description.map((x) => (
            <ul>
              <li>{x}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
