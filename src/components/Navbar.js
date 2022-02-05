import React from "react";
import airBnbLogo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={airBnbLogo} className="nav--logo" alt="Airbnb Logo" />
    </nav>
  );
}
