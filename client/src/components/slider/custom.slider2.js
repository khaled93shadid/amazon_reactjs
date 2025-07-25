import React, { useState, useEffect } from "react";

import "./custom.slider2.css";

function CustomCarousel1({ children}) {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [slideDone1, setSlideDone1] = useState(true);
  const [timeID1, setTimeID1] = useState(null);

  useEffect(() => {
    if (slideDone1) {
      setSlideDone1(false);
      setTimeID1(
        setTimeout(() => {
          slideNext();
          setSlideDone1(true);
        }, 5000)
      );
    }
  }, [slideDone1]);

  const slideNext = () => {
    setActiveIndex1((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex1((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID1 > 0) {
      clearTimeout(timeID1);
      setSlideDone1(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone1) {
      setSlideDone1(true);
    }
  };

  return (
    <div
      className="container__slider1"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => {
        return (
          <div
            className={"slider1__item slider1__item-active-" + (activeIndex1 + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="container__slider1__links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex1 === index
                  ? "container__slider1__links-small container__slider1__links-small-active"
                  : "container__slider1__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex1(index);
              }}
            ></button>
          );
        })}
      </div>

      <button
        className="slider1__btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {">"}
      </button>
      <button
        className="slider1__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {"<"}
      </button>
    </div>
  );
}

export default CustomCarousel1;
