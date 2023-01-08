import React from "react";
import "./Button.css";

interface IButton {
  link: string;
  children: JSX.Element | string;
  type: "yellow" | "black";
}

const Button = ({ link, children, type }: IButton) => {
  return (
    <a href={link} className={type + "__button main__button"}>
      {children}
    </a>
  );
};

export default Button;
