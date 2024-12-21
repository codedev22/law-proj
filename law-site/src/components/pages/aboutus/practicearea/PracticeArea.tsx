import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPersonDigging,
  faSignHanging,
  faGavel,
  faHandcuffs,
  faHome,
  faDollarSign,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";

import CorporateCommercial from "./subpracticearea/CorporateCommercial";
import BankingFinance from "./subpracticearea/BankingFinance";
import CriminalDefence from "./subpracticearea/CriminalDefence";
import DisputeResolution from "./subpracticearea/DisputeResolution";
import EmploymentLabour from "./subpracticearea/EmploymentLabour";
import FamilyMatrimonial from "./subpracticearea/FamilyMatrimonial";
import IntellectualPropertyRights from "./subpracticearea/IntellectualPropertyRights";
import RealEstate from "./subpracticearea/RealEstate";
function PracticeArea() {
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
          setContent(<CorporateCommercial />);
          break;
        case 2:
          setContent(<DisputeResolution />);
          break;
        case 3:
          setContent(<IntellectualPropertyRights />);
          break;
        case 4:
          setContent(<RealEstate />);
          break;
        case 5:
          setContent(<EmploymentLabour />);
          break;
        case 6:
          setContent(<FamilyMatrimonial />);
          break;
        case 7:
          setContent(<BankingFinance />);
          break;
        case 8:
          setContent(<CriminalDefence />);
          break;
        default:
          setContent(null);
          break;
      }

      setFadeIn(true);
    }, 100);
  };

  return (
    <div className="mt-5">
      <div className="row px-2 flex-column flex-lg-row flex-md-column  ">
        <div className="">
          
          <p style={{ fontSize: "40px" }}>
            <b>
            <b style={{ color: "#BF976C" }}>Practice</b> Areas
            </b>
          </p>
          <p style={{ fontSize: "20px",textAlign:'justify' }} className="opacity-50" >At Highbrows Legal, our team specialize in a wide array of practice areas to cater to the
          multifaceted needs of our clients</p>
        </div>
        <div
          style={{ textDecoration: "none" }}
          className="col col-lg-3 d-flex  flex-column px-0 "
        >
          {[
            { id: 1, label: "CORPORATE AND COMMERCIAL LAW", icon: faBriefcase },
            { id: 2, label: "DISPUTE RESOLUTION", icon: faGavel },
            { id: 3, label: "INTELLECTUAL PROPERTY RIGHTS ", icon: faBuilding  },
            { id: 4, label: "REAL ESTATE LAW", icon: faSignHanging },
            { id: 5, label: "EMPLOYMENT AND LABOUR LAW", icon: faPersonDigging },
            { id: 6, label: "FAMILY AND MATRIMONIAL LAW", icon: faHome },
            { id: 7, label: "BANKING AND FINANCE", icon: faDollarSign },
            { id: 8, label: "CRIMINAL DEFENSE", icon: faHandcuffs },
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
        <div className="col  mt-4 mt-lg-3 mt-md-5 d-flex p-lg-0 p-0   ">
          <div className={`show-div fade-in ${fadeIn ? "show" : ""}`}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeArea;
