import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

import { useRef } from "react";

function NavBar() {
  const dropdownmenue = useRef(null);
  const handleClick = () => {
    dropdownmenue.current.classList.toggle("open");
  };

  // const scrollToSection = (sectionId) => {
  //   scroll.scrollTo(sectionId, {
  //     // containerId: "contactUsSection", // Replace with the actual ID of your container
  //     duration: 800,
  //     smooth: "easeInOutQuart",
  //   });

  //   // Close the dropdown menu if open
  //   if (dropdownmenue.current.classList.contains("open")) {
  //     dropdownmenue.current.classList.remove("open");
  //   }
  // };
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/Fine Logo.png" alt="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link
                to="homeSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                color="white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="aboutUsSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="servicesSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="specialtiesSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Specialties
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="contactUsSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact US
              </Link>
            </li>
          </ul>
        </div>
        <div className="callToAction">
          <Link
            to="contactUsSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p>Request Demo</p>
          </Link>
        </div>
        <div onClick={handleClick} className="toogle-btn">
          <FontAwesomeIcon icon={faBars} color="white" />{" "}
        </div>
      </nav>
      <div className="dropdownmenue" ref={dropdownmenue}>
        <li>
          <Link
            to="homeSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="aboutUsSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="servicesSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="specialtiesSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Specialties
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="contactUsSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact US
          </Link>
        </li>
        <li className="special">
          <div className="">
            <Link
              to="contactUsSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <p>Request Demo</p>
            </Link>
          </div>
        </li>
      </div>
    </>
  );
}

export default NavBar;
