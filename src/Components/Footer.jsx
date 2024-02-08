import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-transparent border-l-transparent border-r-transparent bg-gradient-to-r from-white to-pink-300 ">
      <div className="container p-2 flex justify-between">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="btn btn-ghost text-right font-dela text-pink-500 text-xl lg:text- font-normal leading-5 font-dela-gothic-one "
        >
          Pack
          <br />
          Packina
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
