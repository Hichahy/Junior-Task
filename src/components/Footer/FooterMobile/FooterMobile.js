import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import "./FooterMobile.css";

const InfoLinks = () => {
  return (
    <div className="link-box-Mobile">
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
  );
};

const ToolLinks = () => {
  return (
    <div className="link-box-Mobile">
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
      <a target="_blank" rel="noopener noreferrer" href="https://trello.com/">
        Organization
      </a>
    </div>
  );
};

const ApiLinks = () => {
  return (
    <div className="link-box-Mobile">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://developers.themoviedb.org/3/movies/get-movie-details"
      >
        Movie API
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://pokeapi.co/">
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
      <a target="_blank" rel="noopener noreferrer" href="https://rapidapi.com/">
        Find API
      </a>
    </div>
  );
};

const Footer = () => {
  const [showInfo, setShowInfo] = useState({
      information: false,
      tool:false, 
      api:false
  });
//   const [showTool, setShowTool] = useState(false);
//   const [showApi, setShowApi] = useState(false);

  return (
    <section className="footer-Mobile">
      <section className="footer-Info-Mobile">
        <div className="h-wrapper-Mobile">
          <h1 className="tittle-Mobile">Information</h1>
          <i onClick={() => setShowInfo((prev) => ({
              ...prev,
              information: !prev.information
          }))}>
            {showInfo.information ? (
              <AiFillMinusCircle size={30} />
            ) : (
              <IoIosAddCircle size={30} />
            )}
          </i>
        </div>
        {showInfo.information ? <InfoLinks /> : null}
      </section>
      <section className="footer-Info-Mobile">
        <div className="h-wrapper-Mobile">
          <h1 className="tittle-Mobile">Helping Tools</h1>
          <i onClick={() => setShowInfo((prev) => ({
              ...prev,
              tool: !prev.tool
          }))}>
            {showInfo.tool ? (
              <AiFillMinusCircle size={30} />
            ) : (
              <IoIosAddCircle size={30} />
            )}
          </i>
        </div>
        {showInfo.tool ? <ToolLinks /> : null}
      </section>
      <section className="footer-Info-Mobile">
        <div className="h-wrapper-Mobile">
          <h1 className="tittle-Mobile">Free API</h1>
          <i onClick={() => setShowInfo((prev) => ({
               ...prev,
               api: !prev.api
          }))}>
            {showInfo.api ? (
              <AiFillMinusCircle size={30} />
            ) : (
              <IoIosAddCircle size={30} />
            )}
          </i>
        </div>
        {showInfo.api ? <ApiLinks /> : null}
      </section>
    </section>
  );
};

export default Footer;
