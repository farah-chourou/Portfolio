import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

function Footer() {
  return (
    <div id="footer">
      <h6> @copyright 2023</h6>
      made with <BsFillSuitHeartFill className="heart" /> by Farah Chourou
      <span id="wrapper">
        <span id="pulsingheart"></span>
      </span>
    </div>
  );
}

export default Footer;
