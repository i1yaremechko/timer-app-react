import React from 'react';
import './index.scss';

interface HeaderProps {
  isMainPage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isMainPage = false }) => {
  return (
    <header className={`header ${isMainPage ? 'header_main' : ''}`}>
      <span className="header__logo">Timers App</span>

      <nav className="header__navigation">
        <ul className="header__links">
          <li>
            <a className="header__link" href="#features">
              Features
            </a>
          </li>
          <li>
            <a className="header__link" href="#video">
              Video Tour
            </a>
          </li>
          <li>
            <a className="header__link" href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a className="header__link" href="#pricing">
              Pricing
            </a>
          </li>
        </ul>

        <button className="header__action-button button button_white">
          Get it free
        </button>
      </nav>
    </header>
  );
};