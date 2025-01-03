import { useState, useEffect } from "react";
import "../../style/practice-area-styles/PracticeCommon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPersonDigging,
  faAnglesRight,
  faGavel,
  faHandcuffs,
  faUsers,
  faHome,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

import CorporateLegalServices from "./practice-area-items/CorporateLegalServices";
import FamilyLaw from "./practice-area-items/FamilyLaw";
import IntellectualPropertyLaw from "./practice-area-items/IntellectualPropertyLaw";
import DebtRecoveryLaw from "./practice-area-items/DebtRecoveryLaw";
import RealEstateLaw from "./practice-area-items/RealEstateLaw";
import CriminalLaw from "./practice-area-items/CriminalLaw";
import More from "./practice-area-items/More";
import LabourLaw from "./practice-area-items/LabourLaw";
function OurPracticeArea() {
  const [viewField, setViewField] = useState<number | null>(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [content, setContent] = useState<JSX.Element | null>(null); // Store content to be rendered

  useEffect(() => {
    handleClick(1);
  }, []);

  const handleClick = (field: number) => {
    if (viewField === field) return; // Prevent re-render if the same item is clicked

    setViewField(field); // Immediately update the active field
    setContent(null); // Clear the previous content
    setFadeIn(false); // Reset the fade-in effect

    setTimeout(() => {
      // Update content after delay
      switch (field) {
        case 1:
          setContent(<CorporateLegalServices />);
          break;
        case 2:
          setContent(<IntellectualPropertyLaw />);
          break;
        case 3:
          setContent(<CriminalLaw />);
          break;
        case 4:
          setContent(<FamilyLaw />);
          break;
        case 5:
          setContent(<LabourLaw />);
          break;
        case 6:
          setContent(<RealEstateLaw />);
          break;
        case 7:
          setContent(<DebtRecoveryLaw />);
          break;
        case 8:
          setContent(<More />);
          break;
        default:
          setContent(null);
          break;
      }

      setFadeIn(true);
    }, 100);
  };

  return (
    <div className="container-fluid mt-5 px-0  ">
      <div className="row  px-lg-0 px-3 flex-column flex-lg-row flex-md-column ">
        <div className="">
          <p style={{ fontSize: "20px", opacity: "0.5" }}>
            {" "}
            <b>More Than 50 Practice Areas in All over INDIA </b>{" "}
          </p>
          <h1>
            <b>
              Our <b style={{ color: "#BF976C" }}>Practice</b> Area
            </b>
          </h1>
        </div>
        <div
          style={{ textDecoration: "none" }}
          className="col col-lg-3 d-flex  flex-column   px-0 "
        >
          {[
            { id: 1, label: "CORPORATE LEGAL SERVICES", icon: faBriefcase },
            { id: 2, label: "INTELLECTUAL PROPERTY LAW", icon: faGavel },
            { id: 3, label: "CRIMINAL LAW", icon: faHandcuffs },
            { id: 4, label: "FAMILY LAW", icon: faUsers },
            { id: 5, label: "LABOUR LAW", icon: faPersonDigging },
            { id: 6, label: "REAL ESTATE LAW", icon: faHome },
            { id: 7, label: "DEBT RECOVERY LAW", icon: faDollarSign },
            { id: 8, label: "More", icon: faAnglesRight },
          ].map((item) => (
            <a
              key={item.id}
              style={{
                textDecoration: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              className={`px-2 py-3 mt-3  py-0 mx-2 prac-text ${
                viewField === item.id
                  ? " custom-color custom-color1"
                  : "text-dark"
              }`}
              onClick={() => handleClick(item.id)}
            >
              <FontAwesomeIcon
                icon={item.icon}
                style={{ marginRight: "8px" }}
              />
              {item.label}
            </a>
          ))}
        </div>

        {/* Content Section */}
        <div className="col mt-0 mt-lg-4 mt-md-5 d-flex p-lg-0 p-0   ">
          <div className={`show-div fade-in ${fadeIn ? "show" : ""}`}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPracticeArea;
