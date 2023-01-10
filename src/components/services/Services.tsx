import React from "react";
import mail from "../../assets/services/mail.png";
import discus from "../../assets/services/discus.png";
import book from "../../assets/services/book.png";
import monitor from "../../assets/services/monitor.png";
import "./Services.css";

interface IServiceCard {
  icon: string;
  title: string;
  text: string;
}
const servicesCards: IServiceCard[] = [
  {
    icon: monitor,
    title: "Web Development",
    text: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
  },
  {
    icon: discus,
    title: "Digital Marketing",
    text: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
  },
  {
    icon: book,
    title: "UI/UX Design",
    text: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
  },
  {
    icon: mail,
    title: "Brand Design",
    text: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
  },
];

const Services = () => {
  return (
    <section className="services" id="service">
      <h2>
        We’re always ready for <span>challenges</span>
      </h2>
      <div className="services__cards">
        {servicesCards.map(({ icon, title, text }) => (
          <div className="service__card">
            <div className="img__wrapper">
              <img src={icon} alt={icon} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
