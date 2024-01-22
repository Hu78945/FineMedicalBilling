import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";

function HomePage() {
  const containerRef = useRef(null);
  const ButtonOne = useRef(null);
  const ButtonTwo = useRef(null);
  const ButtonThree = useRef(null);
  const heading = useRef(null);
  const paragraph = useRef(null);

  const preloadImage = (imageUrl) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageUrl;
      image.onload = () => resolve(imageUrl);
      image.onerror = () => reject(`Failed to load image: ${imageUrl}`);
    });
  };

  const changeImage = async (e) => {
    const setImage = (imageUrl, text) => {
      heading.current.innerText = text;
      containerRef.current.style.backgroundImage = `url("${imageUrl}")`;
    };

    try {
      let imageUrl;

      if (e.target.name === "one") {
        imageUrl = "/car-1.jpg";
        await preloadImage(imageUrl);
        setImage(
          imageUrl,
          "ELEVATE YOUR PRACTICE'S FINANCES WITH EXPERT MEDICAL BILLING"
        );
      } else if (e.target.name === "two") {
        imageUrl = "/car-2.jpg";
        await preloadImage(imageUrl);
        setImage(
          imageUrl,
          "UNLOCK YOUR REVENUE POTENTIAL: SPECIALIZED MEDICAL BILLING SOLUTIONS"
        );
      } else {
        imageUrl = "/car-3.jpg";
        await preloadImage(imageUrl);
        setImage(
          imageUrl,
          "STREAMLINED BILLING FOR HEALTHCARE EXCELLENCE: PHYSICIANS REVENUE EXPERTS"
        );
      }
    } catch (error) {
      console.error(error);
      // Handle error, e.g., set a default image
    }
  };

  //Automatically change Image
  const images = ["/car-1.jpg", "/car-2.jpg", "/car-3.jpg"];
  let currentIndex = 0;
  const changeImage2 = () => {
    const imageUrl = images[currentIndex];
    heading.current.innerText = getImageText(imageUrl);
    containerRef.current.style.backgroundImage = `url("${imageUrl}")`;
    currentIndex = (currentIndex + 1) % images.length;
  };

  const getImageText = (imageUrl) => {
    switch (imageUrl) {
      case "/car-1.jpg":
        return "ELEVATE YOUR PRACTICE'S FINANCES WITH EXPERT MEDICAL BILLING";
      case "/car-2.jpg":
        return "UNLOCK YOUR REVENUE POTENTIAL: SPECIALIZED MEDICAL BILLING SOLUTIONS";
      case "/car-3.jpg":
        return "STREAMLINED BILLING FOR HEALTHCARE EXCELLENCE: PHYSICIANS REVENUE EXPERTS";
      default:
        return "";
    }
  };

  useEffect(() => {
    // Change the image every 5 seconds
    const intervalId = setInterval(() => {
      changeImage2();
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

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
                  <Link
                    to="contactUsSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    color="white"
                  >
                    <p>Details</p>
                  </Link>
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
