import React from "react";
import CarouselItem from "./CarouselItem";
import ProjectData from "../ProjectData";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= ProjectData.length) {
      newIndex = ProjectData.length - 1;
    }

    setActiveIndex(newIndex);
  }

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {ProjectData.map((item, index) => {
            return <CarouselItem item={item} />;
          })}
        </div>

        {/* carousel buttons */}

        <div className="carousel-buttons">
          <ArrowBackIosIcon
            className="button-arrow"
            onClick={() => updateIndex(activeIndex - 1)}
          />
          {/* <button>Arrow Left</button> */}
          <div className="indicators">
            {ProjectData.map((item, index) => (
              <RadioButtonCheckedIcon
                className="indicator-buttons"
                onClick={() => updateIndex(index)}
                sx={{ fontSize: index === activeIndex ? 30 : 15 }}
                // sx={{ color: { if (index === activeIndex){
                //     "#4b7645" : "black"
                // }  }}
              />
            ))}
          </div>
          <ArrowForwardIosIcon
            className="button-arrow"
            onClick={() => updateIndex(activeIndex + 1)}
          />
        </div>
      </div>
    </div>
  );
}
