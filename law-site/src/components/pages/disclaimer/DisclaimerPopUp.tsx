import { useEffect,useState } from "react";
const DisclaimerPopUp = () => {
    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasAcceptedDisclaimer = localStorage.getItem("disclaimerAccepted");
    if (!hasAcceptedDisclaimer) {
      setShowModal(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setShowModal(false);
  };

  const handleDisagree = () => {
    window.location.href = "https://www.google.com";
  };
  return (
    <div>
        {showModal && (
        <div
          className="modal-overlay overflow-y-scroll d-flex flex-wrap"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container-lg">
            <div
              style={{ borderRadius: "15px" }}
              className="modal-dialog p-0 container modal-dialog-centered bg-light"
            >
              <div className="modal-content px-4 py-4">
                <div className="modal-header">
                  <h1 className="modal-title maincolor">Disclaimer</h1>
                </div>
                <div className="modal-body container bg-light">
                  <div
                    style={{ fontSize: "15px", textAlign: "justify" }}
                    className="row d-flex flex-column"
                  >
                    <div className="col">
                      <p>
                        Under the current regulations of the Bar Council of
                        India, law firms and lawyers are restricted from
                        advertising or soliciting work through any form of
                        communication, including web pages. In compliance with
                        these regulations, Highbrows Legal is unable to provide
                        detailed information about its practice areas, expertise,
                        or team members on this website.
                      </p>
                    </div>
                    <div className="col">
                      <p>
                        By accessing this website, you confirm that you are
                        seeking information about Highbrows Legal of your own
                        accord and that any information you obtain from this
                        website is solely for your personal use. You acknowledge
                        that the content on this website is provided at your
                        request and does not amount to advertising or
                        solicitation by Highbrows Legal or any of its members.
                      </p>
                    </div>
                    <div className="col">
                      <p>
                        The information provided on this website is for general
                        informational purposes only and should not be construed
                        as legal advice or a substitute for legal consultation.
                        Accessing this website or any content herein does not
                        establish a lawyer-client relationship between the user
                        and Highbrows Legal.
                      </p>
                    </div>
                    <div className="col">
                      <p>
                        Highbrows Legal disclaims all liability for any actions
                        taken by users based on the information provided on this
                        website. Users are strongly advised to seek independent
                        legal counsel for any legal concerns or issues.
                      </p>
                    </div>
                    <div className="col">
                      <p>
                        By proceeding further, you acknowledge that you have
                        read, understood, and agreed to this disclaimer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer gap-3">
                  <button
                    className="btn mainbgcolor1 text-light"
                    onClick={handleAgree}
                  >
                    Agree
                  </button>
                  <button
                    className="btn text-light mainbgcolor"
                    onClick={handleDisagree}
                  >
                    Disagree
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default DisclaimerPopUp
