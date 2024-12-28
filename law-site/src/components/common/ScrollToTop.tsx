import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="mainbgcolor scroll-button "
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "4px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer",
            fontSize: "22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex:'999'
          }}
        >
          <FontAwesomeIcon icon={faAngleUp} className="maincolor scroll-icon"></FontAwesomeIcon>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;