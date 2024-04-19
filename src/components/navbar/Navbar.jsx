import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="sticky top-0 z-10 bg-background w-[100%]">
      <div className=" navbar h-[6rem] lg:flex hidden items-center justify-between ">
        <Link
          to="introSection"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          activeClass="active"
        >
          <h1 className="text-2xl cursor-pointer">
            Miskat <span className="text-linkYellow">Alam</span>
          </h1>
        </Link>

        <div className="nav-links w-[20%] flex justify-between gap-10 text-lg">
          <Link
            to="introSection"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className="navLink cursor-pointer relative hover:text-linkYellow"
            activeClass="text-linkYellow"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="navLink cursor-pointer relative hover:text-linkYellow"
            activeClass="text-linkYellow"
          >
            About
          </Link>
          <Link
            className="navLink cursor-pointer relative hover:text-linkYellow"
            to="education"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            activeClass="text-linkYellow"
          >
            Education
          </Link>
          <Link
            className="navLink cursor-pointer relative hover:text-linkYellow"
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-linkYellow"
          >
            Projects
          </Link>
        </div>

        <Link
          className="contactBtn bg-white"
          to="contact"
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
          activeClass="text-black"
        >
          {/* coontactBtn class written in index.css using apply */}
          <img
            src="../../../assets/contact.png"
            alt=""
            className="contactPng bg-white w-4 pt-[0.2rem]"
          />
          Contact Me
        </Link>
      </div>

      <IoMenu
        className="w-10 h-10 absolute right-4 top-4 flex lg:hidden cursor-pointer"
        onClick={() => setShow(!show)}
      />

      <div
        className={`animate-open absolute right-0 top-0 h-fit w-full border bg-slate-900 flex-col p-4 transition-all   ${
          show ? "flex" : "hidden"
        }`}
      >
        <IoIosCloseCircleOutline
          className="absolute top-3 right-4 h-10 w-10"
          onClick={() => setShow(!show)}
        />
        <Link
          to="introSection"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          className="listItem navLink text-white py-2 px-12 my-1 hover:border-linkYellow text-center"
          activeClass="text-linkYellow"
          onClick={() => setShow(false)}
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="listItem navLink text-white py-2 px-12 my-1hover:text-linkYellow text-center"
          activeClass="text-linkYellow"
          onClick={() => setShow(false)}
        >
          About
        </Link>
        <Link
          className="listItem navLink text-white py-2 px-12 my-1 hover:text-linkYellow text-center"
          to="education"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          activeClass="text-linkYellow"
          onClick={() => setShow(false)}
        >
          Education
        </Link>
        <Link
          className="listItem navLink text-white py-2 px-12 my-1 hover:text-linkYellow text-center"
          to="projects"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          activeClass="text-linkYellow"
          onClick={() => setShow(false)}
        >
          Projects
        </Link>
        <Link
          className="listItem navLink text-white py-2 px-12 my-1 hover:text-linkYellow text-center"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          activeClass="text-linkYellow"
          onClick={() => setShow(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
