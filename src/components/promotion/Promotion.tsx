import React from "react";
import "./Promotion.css";

interface IMilestone {
  number: string | number;
  title: string;
}

const milestone: IMilestone[] = [
  {
    number: 124,
    title: "Complete Projects",
  },
  {
    number: "99%",
    title: "Satisfied Clients",
  },
  {
    number: 234,
    title: "Success Campaign",
  },
  {
    number: 2345,
    title: "Cups of Coffee",
  },
];

const Promotion = () => {
  return (
    <div className="promotion" id="about-us">
      <div className="promotion__block">
        <iframe
          title="youtube"
          src="https://www.youtube.com/embed/9uOMectkCCs"
        ></iframe>
        <div className="promotion__block-text">
          <h2>The thing about us is</h2>
          <h2> we think big, huge</h2>

          <ul>
            <li> If the path is beautiful, let us not ask where it leads</li>
            <li> my religion is very simple. my religion is kindness</li>
            <li> each of us has within our power the ability to disrupt</li>
          </ul>
          <a href="/">learn more</a>
        </div>
      </div>
      <div className="milestone">
        {milestone.map(({ number, title }) => (
          <div className="milestone__card">
            <h3>{number}</h3>
            <h4>{title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotion;
