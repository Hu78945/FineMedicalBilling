import "./Services.css";
import { useEffect, useRef } from "react";

import {
  faClock,
  faCube,
  faFileInvoiceDollar,
  faFileLines,
  faImages,
  faMagnifyingGlassDollar,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/Cards/cards";
import ShortCard from "../../components/shortCard/shortCard";

function Services() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const shortCard1Ref = useRef(null);
  const shortCard2Ref = useRef(null);
  const shortCard3Ref = useRef(null);
  const shortCard4Ref = useRef(null);

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

    const myrefs = [
      card1Ref,
      card2Ref,
      card3Ref,
      card4Ref,
      shortCard1Ref,
      shortCard2Ref,
      shortCard3Ref,
      shortCard4Ref,
    ];
    myrefs.forEach((entry) => {
      console.log(entry);
      observer.observe(entry.current);
    });
  }, []);
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "2rem" }}
        id="servicesSection"
      >
        <div className="cards">
          <Card
            title={"Why Choose Fine Medical Billing?"}
            des={
              "Choosing our medical billing service will help you save time, increase revenue and reduce the stress of dealing with insurance claims."
            }
            btn={true}
            bgColor={"#00bfff"}
            ref={card1Ref}
          />
          <Card
            h1size={"1.3rem"}
            width={"15rem"}
            title={"Experienced Billing Specialists"}
            des={
              "Expert billing specialists for accurate and timely claims submission"
            }
            bgColor={"white"}
            fontColor={"grey"}
            icon={faFileLines}
            ref={card2Ref}
          />
          <Card
            h1size={"1.3rem"}
            width={"15rem"}
            title={"Revenue through Reimbursement Expertise"}
            des={"Expertise in reimbursement to increase revenue"}
            bgColor={"white"}
            fontColor={"grey"}
            icon={faCube}
            ref={card3Ref}
          />
          <Card
            h1size={"1.3rem"}
            width={"15rem"}
            title={"Flexible and tailored pricing and services"}
            des={
              "Flexible pricing and customizable services tailored to your unique needs"
            }
            bgColor={"white"}
            fontColor={"grey"}
            icon={faImages}
            ref={card4Ref}
          />
        </div>
      </div>

      <div className="smallCardsSection">
        <div className="smallCards">
          <ShortCard
            icon={faClock}
            heading={"8-16"}
            des={"Days Turn around time"}
            ref={shortCard1Ref}
          />
          <ShortCard
            icon={faMoneyBillTrendUp}
            heading={"25%"}
            des={"Revenue Increase"}
            ref={shortCard2Ref}
          />
          <ShortCard
            icon={faMagnifyingGlassDollar}
            heading={"80%"}
            des={"Collection Ratios"}
            ref={shortCard3Ref}
          />
          <ShortCard
            icon={faFileInvoiceDollar}
            heading={"30%"}
            des={"Reduction in AR"}
            ref={shortCard4Ref}
          />
        </div>
      </div>
    </>
  );
}

export default Services;
