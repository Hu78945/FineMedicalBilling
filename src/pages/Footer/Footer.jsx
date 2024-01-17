import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="section1">
        <div className="logo">
          <img src="/Fine Logo.png" alt="" />
        </div>
        <p>Unlocking Revenue Potential, Empowering Healthcare Excellence</p>
        <div className="socials-logos">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faSquareXTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faSquareInstagram} />
        </div>
      </div>

      <div className="section2">
        <h2>Quick Links</h2>
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
              color="white"
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
              color="white"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contactUsSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              color="white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="section3">
        <h2>Contact</h2>
        <div className="item1">
          <FontAwesomeIcon icon={faPhoneVolume} size="2x" />
          <a href="tel:+14013149711" className="grey">
            +14013149711
          </a>
        </div>
        <div className="item1">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <a href="mailto:info@finemedicalbilling.com" className="grey">
            info@finemedicalbilling.com
          </a>{" "}
        </div>
        <div className="item1 long">
          <FontAwesomeIcon icon={faLocationDot} size="2x" />
          <a href="" className="grey">
            1760 Whitehorse Hamilton Square Road, Hamilton NJ 08690
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
