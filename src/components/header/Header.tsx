import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

interface IMenuItem {
  link: string;
  title: string;
}

export const menuList: IMenuItem[] = [
  {
    link: "service",
    title: "Our Service",
  },

  {
    link: "about-us",
    title: "About Us",
  },
  {
    link: "blog",
    title: "Blog",
  },
  {
    link: "contact",
    title: "Contact Us",
  },
];

const handleClickScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="menu__list">
        {menuList.map(({ link, title }) => (
          <button onClick={() => handleClickScroll(link)} key={link}>
            {title}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
