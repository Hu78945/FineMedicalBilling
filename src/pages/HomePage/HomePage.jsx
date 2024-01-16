import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";
import { useRef } from "react";

function HomePage() {
  const containerRef = useRef(null);
  const ButtonOne = useRef(null);
  const ButtonTwo = useRef(null);
  const ButtonThree = useRef(null);
  const heading = useRef(null);
  const paragraph = useRef(null);

  const changeImage = (e) => {
    console.log(e.target.name);
    if (e.target.name === "one") {
      heading.current.innerText =
        "ELEVATE YOUR PRACTICE'S FINANCES WITH EXPERT MEDICAL BILLING";
      containerRef.current.style.backgroundImage = `url("/src//assets/car-1.jpg")`;
    } else if (e.target.name === "two") {
      heading.current.innerText =
        "UNLOCK YOUR REVENUE POTENTIAL: SPECIALIZED MEDICAL BILLING SOLUTIONS";
      containerRef.current.style.backgroundImage = `url("/src//assets/car-2.jpg")`;
    } else {
      heading.current.innerText =
        "STREAMLINED BILLING FOR HEALTHCARE EXCELLENCE: PHYSICIANS REVENUE EXPERTS";
      containerRef.current.style.backgroundImage = `url("/src//assets/car-3.jpg")`;
    }
  };

  return (
    <>
      <div className="big-container" ref={containerRef} id="homeSection">
        <div className="container">
          <div className="center-div">
            <NavBar />
            <div className="content">
              <div className="text">
                <h1 ref={heading}>
                  ELEVATE YOUR PRACTICE&apos;S FINANCES WITH EXPERT MEDICAL
                  BILLING
                </h1>
                <p ref={paragraph}>
                  Optimize your revenue cycle with our expert medical billing
                  services. We ensure accurate coding, efficient claims
                  submission, and timely reimbursements, allowing you to focus
                  on providing exceptional patient care
                </p>

                <div className="details">
                  <p>Details</p>
                </div>
              </div>
              <div className="btns">
                <button ref={ButtonOne} onClick={changeImage} name="one">
                  01
                </button>
                <button ref={ButtonTwo} onClick={changeImage} name="two">
                  02
                </button>
                <button ref={ButtonThree} onClick={changeImage} name="three">
                  03
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
