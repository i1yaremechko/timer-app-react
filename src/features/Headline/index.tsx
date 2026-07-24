import React from "react";
import "./index.scss";

export const Headline: React.FC = () => {
  return (
    <section
      className="headline"
      style={{
        background: `url("images/headline/background.png")`
      }}>
      <div className="headline__content content">
        <div className="headline__description">
          <img
            className="headline__logo"
            alt="logo"
            src="images/headline/logo.svg"
          />
          <h2 className="headline__title">
            <b>Timers App.</b> Best landing page for web and mobile apps
          </h2>
          <div className="headline__buttons">
            <button className="button">Download Now</button>
            <button className="button button_white">Watch Video</button>
          </div>
        </div>
        <img
          className="headline__decoration"
          alt="decoration"
          src="images/headline/decoration.png"
        />
      </div>
    </section>
  );
};