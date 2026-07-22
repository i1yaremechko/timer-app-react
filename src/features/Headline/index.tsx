import decoration from '@/assets/images/headline/decoration.png';
import logo from '@/assets/images/headline/logo.svg';
import React from "react";
import "./index.scss";

export const Headline: React.FC = () => {
  return (
    <section className="headline">
      <div className="headline__content content">
        <div className="headline__description">
          <img
            className="headline__logo"
            alt="logo"
            src={logo}
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
          src={decoration}
        />
      </div>
    </section>
  );
};