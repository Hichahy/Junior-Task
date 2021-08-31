import React from "react";
import * as FaIcons from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>This is my done job!</h1>{" "}
      <img src="img/crown_1f451.png" alt="crown" />
      <div className="p-box">
        <p>
          It's one of the exercises I found on the web. I put them in the
          Contact section.
        </p>
        <p>
          Click on the burger icon <FaIcons.FaHamburger className="burger-i" />{" "}
          top left corner. Website works on mobile.
        </p>
        <p>I added the function of sending messages, and little from myself.</p>
        <p>I put the code on github and I'm open to your advice.</p>
        <p>
          Write what you think about my performance. the content of the task is
          available on the link{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://solutionchaser.com/zadania-dla-poczatkujacego-front-end-developera/"
          >
            HERE
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Home;
