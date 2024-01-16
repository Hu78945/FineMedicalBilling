/* eslint-disable react/prop-types */
// import { forwardRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./card.css";

// const Card = ({
//   width,
//   icon,
//   title,
//   des,
//   btn = false,
//   h1size,
//   h1color,
//   bgColor,
//   fontColor,
//   boxHeight,
//   ref,
// }) => {
//   return (
//     <div
//       className="card"
//       style={{
//         width: width,
//         backgroundColor: bgColor,
//         color: fontColor,
//         height: boxHeight,
//       }}
//       ref={ref}
//     >
//       <FontAwesomeIcon icon={icon} className="icon" />
//       <h1 style={{ fontSize: h1size, color: h1color }}>{title}</h1>
//       <p>{des}</p>
//       {btn ? <div className="action-btn">Learn More &gt;</div> : <div></div>}
//     </div>
//   );
// };

// export default Card;

import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.css";

const Card = forwardRef(
  (
    {
      width,
      icon,
      title,
      des,
      btn = false,
      h1size,
      h1color,
      bgColor,
      fontColor,
      boxHeight,
    },
    ref
  ) => {
    return (
      <div
        className="card hidden"
        style={{
          width: width,
          backgroundColor: bgColor,
          color: fontColor,
          height: boxHeight,
        }}
        ref={ref}
      >
        <FontAwesomeIcon icon={icon} className="icon" />
        <h1 style={{ fontSize: h1size, color: h1color }}>{title}</h1>
        <p>{des}</p>
        {btn ? <div className="action-btn">Learn More &gt;</div> : <div></div>}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
