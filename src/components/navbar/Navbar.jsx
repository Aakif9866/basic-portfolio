import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="sticky top-0 z-10 bg-background w-[100%]">
      <div className=" navbar h-[6rem] md:flex hidden items-center justify-between ">
        <Link
          to="introSection"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          activeClass="active"
        >
          <img
            src="../../../assets/logo.png"
            alt=""
            className="logo-img h-[4rem] cursor-pointer"
          />
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
            offset={-40}
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

        <IoMenu className="w-8 h-8 border" onClick={() => setShow(!show)} />

        <div
          className={` cursor-pointer  absolute top-4 right-2 p-[0.5rem] h-fit min-w-[15rem] bg-slate-900 rounded-2xl  flex-col   ${
            show ? "flex" : "hidden"
          }`}
        >
          <Link
            to="introSection"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className="listItem navLink text-white py-2 px-12 my-1 bg-[rgb(30,30,30)] hover:text-linkYellow"
            activeClass="text-linkYellow"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="listItem navLink text-white py-2 px-12 my-1 bg-[rgb(30,30,30)] hover:text-linkYellow"
            activeClass="text-linkYellow"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            className="listItem navLink text-white py-2 px-12 my-1 bg-[rgb(30,30,30)] hover:text-linkYellow"
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
            className="listItem navLink text-white py-2 px-12 my-1 bg-[rgb(30,30,30)] hover:text-linkYellow"
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
            className="listItem navLink text-white py-2 px-12 my-1 bg-[rgb(30,30,30)] hover:text-linkYellow"
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            activeClass="text-linkYellow"
            onClick={() => setShow(false)}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
