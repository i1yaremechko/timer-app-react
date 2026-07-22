import facebook from '@/assets/images/footer/facebook.svg';
import love from '@/assets/images/footer/heart.svg';
import instagram from '@/assets/images/footer/instagram.svg';
import twitter from '@/assets/images/footer/twitter.svg';
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
            <img alt="love" src={love} />
            <b>Sergey Azovskiy</b>
          </span>
          <span>© Timers App, 2025</span>
        </div>

        <ul className="footer__social-icons">
          <li>
            <a href="#">
              <img alt="twitter" src={twitter} />
            </a>
          </li>
          <li>
            <a href="#">
              <img alt="facebook" src={facebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <img alt="instagram" src={instagram} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};