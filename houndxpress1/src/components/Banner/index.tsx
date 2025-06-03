import React, { useState } from "react";
import BannerCanva from "../../assets/IMG/bannerCanva-HX.png"
import BannerLogistics from "../../assets/IMG/bannerUS__HX.png";
import "./styles.ts"

const Banner = () => {
  //Capture the input radio checked
  const [checked, setChecked] = useState("slide1");

  return (
    /* <!--Banner--> */
    <article className="banner">
      <section className="carousel">
        <input
          type="radio"
          name="slides"
          id="slide1"
          checked={checked === "slide1"}
          onChange={() => setChecked("slide1")}
        />
        <input
          type="radio"
          name="slides"
          id="slide2"
          checked={checked === "slide2"}
          onChange={() => setChecked("slide2")}
        />
        <div className="carousel__images">
          <div className="carousel__element">
            <img className="banner__img" src={BannerCanva} alt="bannerCanva-HX" />
          </div>
          <div className="carousel__element">
            <img className="banner__img" src={BannerLogistics} alt="Banner-HX-logistics" />
          </div>
        </div>
        <div className="carousel__nav">
          <label htmlFor="slide1">⬅️</label>
          <label htmlFor="slide2">➡️</label>
        </div>
      </section>
    </article>
  );
};

export default Banner;
