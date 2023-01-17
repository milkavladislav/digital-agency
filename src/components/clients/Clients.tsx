import React from "react";
import "./Clients.css";

import Logo1 from "../../assets/clients/logo_1.png";
import Logo2 from "../../assets/clients/logo_2.png";
import Logo3 from "../../assets/clients/logo_3.png";
import Logo4 from "../../assets/clients/logo_4.png";
import Logo5 from "../../assets/clients/logo_5.png";

const clientsLogo = [Logo1, Logo2, Logo3, Logo4, Logo5];

const Clients = () => {
  return (
    <section className="clients">
      {clientsLogo.map((logoSrc) => (
        <img src={logoSrc} alt={logoSrc} />
      ))}
    </section>
  );
};

export default Clients;
