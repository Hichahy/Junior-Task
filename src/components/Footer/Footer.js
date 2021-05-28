import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <section className="footer-Info">
        <div className="h-wrapper">
          <h1 className="tittle">Information</h1>
          <div className="link-box">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/pl/"
            >
              MDN Web Docs
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://stackoverflow.com/"
            >
              Stack Overflow
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.udemy.com/"
            >
              Udemy
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw"
            >
              YouTube
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pl.reactjs.org/"
            >
              React
            </a>
          </div>
        </div>
      </section>
      <section className="footer-Info">
        <div className="h-wrapper">
          <h1 className="tittle">Helping Tools</h1>
          <div className="link-box">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://undraw.co/illustrations"
            >
              Illustractions
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pexels.com/pl-pl/"
            >
              Photos
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/shots"
            >
              Inspirations
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://iconmonstr.com/"
            >
              Icons
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://trello.com/"
            >
              Organization
            </a>
          </div>
        </div>
      </section>
      <section className="footer-Info">
        <div className="h-wrapper">
          <h1 className="tittle">Free API</h1>
          <div className="link-box">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developers.themoviedb.org/3/movies/get-movie-details"
            >
              Movie API
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pokeapi.co/"
            >
              Pokemon API
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://randomuser.me/"
            >
              Random user Api
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://openweathermap.org/api"
            >
              Weather API
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://rapidapi.com/"
            >
              Find API
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
