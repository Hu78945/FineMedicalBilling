import { useRef, useEffect } from "react";
import "./Model.css";

// eslint-disable-next-line react/prop-types
const Model = ({ des }) => {
  const modalRef = useRef(null);

  const handleClick = () => {
    modalRef.current.style.display = "none";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        modalRef.current.style.display = "none";
      }
    };

    // Add event listener when the component mounts
    window.addEventListener("click", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div id="myModal" className="modal" ref={modalRef}>
        <div className="modal-content">
          <span className="close" onClick={handleClick}>
            &times;
          </span>
          <p>{des ? des : "Loading..."}</p>
        </div>
      </div>
    </>
  );
};

Model.displayName = "Model";

export default Model;
