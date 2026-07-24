import React from "react";
import "./index.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content content">
        <span className="footer__logo">Timers App</span>

        <div className="footer__terms">
          <span>
            Created with{" "}
            <img alt="love" src="images/footer/heart.svg" /> by{" "}
            <b>Sergey Azovskiy</b>
          </span>
          <span>© Timers App, 2025</span>
        </div>

        <ul className="footer__social-icons">
          <li>
            <a href="#">
              <img alt="twitter" src="images/footer/twitter.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img alt="facebook" src="images/footer/facebook.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img alt="instagram" src="images/footer/instagram.svg" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};