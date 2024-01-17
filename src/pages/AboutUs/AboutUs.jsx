import "./AboutUs.css";
import { useRef, useEffect } from "react";
import {
  faAtom,
  faPerson,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutUs() {
  const theImage = useRef(null);
  const content = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const myrefs = [theImage, content];
    myrefs.forEach((entry) => {
      observer.observe(entry.current);
    });
  }, []);
  return (
    <div className="about-us" id="aboutUsSection">
      <div className="image hidden" ref={theImage}>
        <img src="/doctor.jpg" alt="" />
      </div>
      <div className="aboutus-content hidden" ref={content}>
        <div className="heading">
          <h2>About Us</h2>
          <div className="line"></div>
          <p>
            Fine Medical Billing is a professional medical billing company. We
            know your pain. We understand you pursued a career in healthcare
            with noble intents. We recognize that the business of medicine can
            interfere with your goals. We provide an expert solution that gives
            you more time to focus on patient care.
          </p>
        </div>

        <div className="about-us-stats">
          <div className="aboutUs-stat1">
            <div className="round">
              <FontAwesomeIcon icon={faPerson} className="aticon" />
            </div>
            <div className="stat-des">
              <h2>Company Overview</h2>
              <p>
                Our company is a leading provider of medical billing services,
                dedicated to helping healthcare providers streamline their
                billing processes and increase revenue.
              </p>
            </div>
          </div>
          <div className="aboutUs-stat1">
            <div className="round">
              <FontAwesomeIcon icon={faUserDoctor} className="aticon" />
            </div>
            <div className="stat-des">
              <h2>Our Team</h2>
              <p>
                Our team of experienced medical billing specialists tailor
                solutions for healthcare providers to increase revenue and
                streamline the billing process.
              </p>
            </div>
          </div>
          <div className="aboutUs-stat1">
            <div className="round">
              <FontAwesomeIcon icon={faAtom} className="aticon" />
            </div>
            <div className="stat-des">
              <h2>Mission and Vision</h2>
              <p>
                Our company is a leading provider of medical billing services,
                dedicated to helping healthcare providers streamline their
                billing processes and increase revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
