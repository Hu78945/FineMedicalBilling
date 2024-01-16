/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";
import "./shortCard.css";
const ShortCard = forwardRef(({ icon, heading, des }, ref) => {
  return (
    <div className="ShortCard hidden" ref={ref}>
      <FontAwesomeIcon icon={icon} className="floter-icon" />
      <h3>{heading}</h3>
      <p>{des}</p>
    </div>
  );
});

ShortCard.displayName = "shortCard";

export default ShortCard;
