import { useEffect, useRef } from "react";
import "./Consultation.css";
import Form from "../../components/Form/Form";

function Consultation() {
  const cardRef = useRef(null);
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
    observer.observe(cardRef.current);
  }, []);

  return (
    <div
      className="consultation-section hidden"
      id="contactUsSection"
      ref={cardRef}
    >
      <h1>Request a Consultation</h1>
      <p>
        We would be happy to answer any questions and explore how our services
        can support your business. Please tell us about your interests, so we
        can make sure we connect you with the best person on our end. <br /> If
        you’d like to talk to someone now, give us a call at 800-640-6409.
      </p>
      <Form />
    </div>
  );
}

export default Consultation;
