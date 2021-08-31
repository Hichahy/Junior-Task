import React, { useState, useEffect } from "react";
import "./Footer.css";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const Footer = () => {
  const [showInfo, setShowInfo] = useState({
    information: true,
    tool: true,
    api: true,
  });

  const size = useWindowSize();

  useEffect(() => {
    if (size.width >= 600) {
      setShowInfo((prev) => ({
        ...prev,
        information: true,
        tool: true,
        api: true,
      }));
    } else {
      setShowInfo((prev) => ({
        ...prev,
        information: false,
        tool: false,
        api: false,
      }));
    }
  }, [size.width]);

  return (
    <section className="footer">
      <section className="footer-Info">
        <div className="h-wrapper">
          <div className="header">
            <h1 className="tittle">Information</h1>
            <i
              onClick={() =>
                setShowInfo((prev) => ({
                  ...prev,
                  information: !prev.information,
                }))
              }
              className="icon"
            >
              {showInfo.information ? (
                <AiFillMinusCircle size={30} />
              ) : (
                <IoIosAddCircle size={30} />
              )}
            </i>
          </div>

          <div
            className={showInfo.information ? "link-box" : "link-box-disabled"}
          >
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
          <div className="header">
            <h1 className="tittle">Helping Tools</h1>
            <i
              onClick={() =>
                setShowInfo((prev) => ({
                  ...prev,
                  tool: !prev.tool,
                }))
              }
              className="icon"
            >
              {showInfo.tool ? (
                <AiFillMinusCircle size={30} />
              ) : (
                <IoIosAddCircle size={30} />
              )}
            </i>
          </div>

          <div className={showInfo.tool ? "link-box" : "link-box-disabled"}>
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
          <div className="header">
            <h1 className="tittle">Free API</h1>
            <i
              onClick={() =>
                setShowInfo((prev) => ({
                  ...prev,
                  api: !prev.api,
                }))
              }
              className="icon"
            >
              {showInfo.api ? (
                <AiFillMinusCircle size={30} />
              ) : (
                <IoIosAddCircle size={30} />
              )}
            </i>
          </div>

          <div className={showInfo.api ? "link-box" : "link-box-disabled"}>
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
