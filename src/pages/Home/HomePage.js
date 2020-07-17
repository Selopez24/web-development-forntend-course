import React from "react";
import "./HomePage.css";
import Card from "../../shared/components/Card";

const HomePage = (props) => {
  const learning = [
    {
      src:
        "https://www.utb.edu.co/newsletter/educacionadistancia/2014/boletin005/noti_apliaciones/004-codecademy/images/codecademy.png",
      link: "https://www.codecademy.com/catalog/language/html-css",
    },
    {
      src:
        "https://i.pinimg.com/originals/fa/0c/ff/fa0cff4635ed328f76c3b0ddf9155259.png",
      link:
        "https://es.coursera.org/learn/html-css-javascript-for-web-developers",
    },
    {
      src:
        "https://cdn.freecodecamp.org/platform/universal/fcc-twitter-1120X600-social-green.png",
      link: "https://www.freecodecamp.org/",
    },
  ];

  const docs = [
    {
      src:
        "https://www.logo.wine/a/logo/MDN_Web_Docs/MDN_Web_Docs-Logo.wine.svg",
      link: "https://developer.mozilla.org/es/",
    },
    {
      src:
        "https://jessehouwing.net/content/images/size/w2000/2018/07/stackoverflow-1.png",
      link:
        "https://www.google.com/search?sxsrf=ALeKk01dImvEEeVGl6PzXTlc2jooDMQWXw%3A1594943766375&ei=FukQX7PKFonQsAXry76oDw&q=get+date+javascript+format+dd%2Fmm%2Fyyyy&oq=get+date+javascript&gs_lcp=CgZwc3ktYWIQARgAMgQIABBHMgQIABBHMgQIABBHMgQIABBHMgQIABBHMgQIABBHMgQIABBHMgQIABBHUABYAGCKUWgAcAF4AIABAIgBAJIBAJgBAKoBB2d3cy13aXo&sclient=psy-ab",
    },
  ];

  const tools = [
    {
      src:
        "https://sobrebits.com/wp-content/uploads/2018/10/Visual-Studio-Code-para-PowerShell.png",
      link: "https://code.visualstudio.com/download",
    },
    {
      src:
        "https://codesandbox.io/static/banner-b3e4dc81348f7f65008a97a62f9125dd.png",
      link: "https://codesandbox.io/",
    },
  ];

  return (
    <div className="home-container">
      <h1 className="title">Resources 234</h1>
      <div></div>
      <div className="sections-container">
        <div>
          <h1 className="title">Learning</h1>
          {learning.map((card) => (
            <Card key={card.src}>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <img
                  width="250px"
                  height="110px"
                  src={card.src}
                  alt=""
                  style={{ backgroundColor: "white" }}
                />
              </a>
            </Card>
          ))}
        </div>
        <div>
          <h1 className="title">Docs</h1>
          {docs.map((card) => (
            <Card>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <img
                  width="250px"
                  height="110px"
                  src={card.src}
                  alt=""
                  style={{ backgroundColor: "white" }}
                />
              </a>
            </Card>
          ))}
        </div>{" "}
        <div>
          <h1 className="title">Tools</h1>
          {tools.map((card) => (
            <Card>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <img
                  width="250px"
                  height="110px"
                  src={card.src}
                  alt=""
                  style={{ backgroundColor: "white" }}
                />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
