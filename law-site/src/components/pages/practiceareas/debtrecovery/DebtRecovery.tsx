import DebtRecoveryContent from "./DebtRecoveryContent";
import debtrecoverybanner from '../../../../assets/mainpracticearea/banner/debtrecoverybanner.png'
const DebtRecovery = () => {
  return (
    <div>
      <div className="w-100">
        <img src={debtrecoverybanner} className="img-fluid w-100" alt="" />
      </div>
      <div className="container-lg container-fluid py-lg-5 py-4">
        <div className="row px-3">
          <p className="" style={{ fontSize: "35px" }}>
            {" "}
           <b>Debt Recovery: Efficient Legal Solutions for Recovering Outstanding
           Payments and Securing Financial Stability.</b> 
          </p>
          <div className="col px-3">
            <p style={{ fontSize: "19px", textAlign: "justify" }}>
              At Highbrows Legal, we understand that recovering outstanding
              debts is crucial for both businesses and individuals. Our team
              specializes in debt recovery law, providing comprehensive
              solutions to ensure that your financial interests are protected.
              Whether you are a creditor or debtor, we offer expert legal
              guidance in navigating the complexities of debt recovery in India.
            </p>
          </div>
        </div>
        <DebtRecoveryContent />
      </div>
    </div>
  );
};

export default DebtRecovery;
