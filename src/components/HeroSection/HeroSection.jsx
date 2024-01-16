import "./HeroSection.css";
import car1 from "../../assets/car-1.jpg";
import car2 from "../../assets/car-2.jpg";
import car3 from "../../assets/car-3.jpg";

const IMAGES = [
  {
    url: car1,
    alt: "Car One",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nesciunt!",
  },
  {
    url: car2,
    alt: "Car Two",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto temporibus doloribus quasi tenetur dolorem sed perspiciatis quis ad, dolore nostrum.",
  },
  {
    url: car3,
    alt: "Car Three",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, aliquid repudiandae? Voluptatem fugiat commodi amet at magni aspernatur possimus quia, repudiandae dignissimos, laborum eum ratione!",
  },
];

function HeroSection() {
  return (
    <div className="body">
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />

          <div className="slide first">
            <img src={car1} alt="" />
            <div className="overlay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, fugit!
            </div>
          </div>
          <div className="slide">
            <img src={car2} alt="" />
            <div className="overlay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, fugit!
            </div>
          </div>
          <div className="slide">
            <img src={car3} alt="" />
            <div className="overlay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, fugit!
            </div>
          </div>

          <div className="navigation-auto">
            <div className="auto-btn-1"></div>
            <div className="auto-btn-2"></div>
            <div className="auto-btn-3"></div>
          </div>
        </div>
      </div>
      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
      </div>
    </div>
  );
}

export default HeroSection;
