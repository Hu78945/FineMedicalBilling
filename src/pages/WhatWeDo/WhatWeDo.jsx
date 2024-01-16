import "./WhatWeDo.css";
import { useEffect, useRef } from "react";
import {
  faBriefcase,
  faBuilding,
  faNotesMedical,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/Cards/cards";

function WhatWeDo() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  const card6Ref = useRef(null);
  const card7Ref = useRef(null);
  const card8Ref = useRef(null);

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
      card5Ref,
      card6Ref,
      card7Ref,
      card8Ref,
    ];
    myrefs.forEach((entry) => {
      console.log(entry);
      observer.observe(entry.current);
    });
  }, []);
  return (
    <div className="what-we-do" id="specialtiesSection">
      <h2>What we do</h2>
      <div className="line">
        <span></span>
      </div>
      <div className="flex-cads">
        <Card
          width={"300px"}
          boxHeight={"200px"}
          bgColor={"white"}
          title={"Hospital Billing Services"}
          h1color={"#626d9b"}
          h1size={"1.5rem"}
          icon={faBuilding}
          ref={card1Ref}
        />
        <Card
          width={"300px"}
          boxHeight={"200px"}
          bgColor={"white"}
          title={"Inpatient and Outpatient Billing"}
          h1color={"#626d9b"}
          h1size={"1.5rem"}
          icon={faBriefcase}
          ref={card2Ref}
        />
        <Card
          width={"300px"}
          boxHeight={"200px"}
          bgColor={"white"}
          title={"Physician Billing Services"}
          h1color={"#626d9b"}
          h1size={"1.5rem"}
          icon={faPerson}
          ref={card3Ref}
        />
        <Card
          width={"300px"}
          boxHeight={"200px"}
          bgColor={"white"}
          title={"Insurance Claims Processing"}
          h1color={"#626d9b"}
          h1size={"1.5rem"}
          icon={faNotesMedical}
          ref={card4Ref}
        />
        <Card
          width={"300px"}
          boxHeight={"200px"}
          bgColor={"white"}
          title={"Denial Management and Appeals"}
          h1color={"#626d9b"}
          h1size={"1.5rem"}
          icon={faNotesMedical}
          ref={card5Ref}
        />
        <Card
          width={"300px"}
          boxHeight={"200px"}
          bgColor={"white"}
          title={"Patient Billing and Collections"}
          h1color={"#626d9b"}
          h1size={"1.5rem"}
          icon={faNotesMedical}
          ref={card6Ref}
        />
        <Card
          width={"300px"}
          boxHeight={"200px"}
          bgColor={"white"}
          title={"Auditing and Compliance"}
          h1color={"#626d9b"}
          h1size={"1.5rem"}
          icon={faNotesMedical}
          ref={card7Ref}
        />
        <Card
          width={"300px"}
          boxHeight={"200px"}
          bgColor={"white"}
          title={"Revenue Cycle Management Solutions"}
          h1color={"#626d9b"}
          h1size={"1.5rem"}
          icon={faNotesMedical}
          ref={card8Ref}
        />
      </div>
    </div>
  );
}

export default WhatWeDo;
