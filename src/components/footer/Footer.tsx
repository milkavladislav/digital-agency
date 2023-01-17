import React, { ReactElement } from "react";
import "./Footer.css";
import { IoLogoTwitter, IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TfiFacebook } from "react-icons/tfi";
import { AiOutlineGoogle } from "react-icons/ai";

interface ILink {
  name: string;
  link: string;
}

const servicesLinks: ILink[] = [
  {
    name: "Digital Marketing",
    link: "/",
  },
  {
    name: "Branding",
    link: "/",
  },
  {
    name: "Market Promotion",
    link: "/",
  },
  {
    name: "Digital Campaign",
    link: "/",
  },
];

const aboutLinks: ILink[] = [
  {
    name: "Milestone",
    link: "/",
  },
  {
    name: "Check Our Pricing Plan",
    link: "/",
  },
  {
    name: "Expert Team",
    link: "/",
  },
  {
    name: "Our Exciting News",
    link: "/",
  },
];

interface ISocialIcon {
  icon: ReactElement;
  link: string;
}

const socialIcons: ISocialIcon[] = [
  {
    icon: <TfiFacebook />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <AiOutlineGoogle />,
    link: "https://www.google.com/",
  },
  {
    icon: <IoLogoTwitter />,
    link: "https://www.twitter.com/",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="main__part">
        <h2>.logo</h2>
        <p>
          Funding freemium long tail hypotheses first mover advantage assets
          ownership niche market startup investor.
        </p>
        <div className="main__part-links">
          <a href="mailto:agensi@mail.com">
            <IoMail className="icon" />
            agensi@mail.com
          </a>
          <a href="tel:+1234567890">
            <BsFillTelephoneFill className="icon" />+ 12 3456 7890
          </a>
        </div>
      </div>
      <div className="services__part">
        <h3>Services</h3>
        {servicesLinks.map(({ name, link }) => (
          <a href={link}>{name}</a>
        ))}
      </div>
      <div className="about__part">
        <h3>About Us</h3>
        {aboutLinks.map(({ name, link }) => (
          <a href={link}>{name}</a>
        ))}
      </div>
      <div className="address__part">
        <h3>Address</h3>
        <p>123 Lorem Ipsum Street Jakarta, Indonesia</p>
        <div className="icon__links">
          {socialIcons.map(({ icon, link }) => (
            <a href={link} target="_blank" rel="noreferrer">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
