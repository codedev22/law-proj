import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faHandHoldingDollar,
  faCartShopping,
  faCarBurst,
  faNoteSticky,
  faSmoking,
  faSuitcaseMedical,
  faCodeBranch,
  faMoneyCheck,
  faScaleBalanced,
  faPersonHarassing,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import '../../style/practice-area-styles/PracticeCommon.css'
function More() {
  const items = [
    { id: 1, label: "Will Drafting", icon: faNoteSticky },
    { id: 2, label: "Bounced Cheque", icon: faMoneyCheck },
    { id: 3, label: "Fraud", icon: faUserSecret },
    { id: 4, label: "Drugs Cases", icon: faSmoking },
    { id: 5, label: "Civil & Commercial law", icon: faGavel },
    { id: 6, label: "Mortgage Claim", icon: faHandHoldingDollar },
    { id: 7, label: "Insurance Law", icon: faCarBurst },
    { id: 8, label: "IT & E-Commerce law", icon: faCartShopping },
    { id: 9, label: "Mergers & acquisitions law", icon: faCodeBranch },
    { id: 10, label: "Health law", icon: faSuitcaseMedical },
    { id: 11, label: "Sexual Assault", icon: faPersonHarassing },
    { id: 12, label: "All religion Marriage Registrations", icon: faScaleBalanced },
  ];

  return (
    <div className="container-fluid p-2">
      <div className="row more-row">
        <div className="col">
          <ul style={{ listStyle: "none", fontSize: "20px" }}>
            {items
              .filter((item) => item.id <= 6) // Filter for first column (id 1-6)
              .map((item) => (
                <li key={item.id} className="mb-3 ">
                  <FontAwesomeIcon style={{color:'#BF976C'}} className=" more-icon1 me-2  " icon={item.icon} />
                  {item.label}
                </li>
              ))}
          </ul>
        </div>
        <div className="col">
          <ul style={{ listStyle: "none", fontSize: "20px" }}>
            {items
              .filter((item) => item.id > 6) // Filter for second column (id 7-12)
              .map((item) => (
                <li key={item.id} className="mb-3 ">
                  <FontAwesomeIcon style={{color:'#BF976C'}} className="more-icon2 me-2 " icon={item.icon} />
                  {item.label}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default More;
