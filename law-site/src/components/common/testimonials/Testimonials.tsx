import "../../style/common-styles/Testimonials.css";
function Testimonials() {
  return (
    <div  className="container-fluid   mt-5">
      <div  className="row  d-flex flex-column  flex-lg-row flex-md-column">
        <div style={{borderRadius:'15px'}} className="col client-parent py-3 ">
          <p className="opacity-50 fs-5 text-start text-lg-center">Our Clients</p>
          <p className="fs-2 text-start text-lg-center">
            <b style={{ color: "#BF976C" }}>Testimonials</b>
          </p>
          <p className=" text-lg-center" style={{ fontSize: "18px",textAlign:'justify' }}>
            What Our Clients Say About Us Highbrows Legal is renowned for its
            team of exceptional lawyers in India and across Tamil Nadu. Our
            legal experts bring years of proven experience, delivering
            outstanding services to clients both locally and globally. Whether
            navigating complex legal landscapes or offering strategic advice,
            Highbrows Legal is dedicated to achieving the best outcomes for our
            clients with professionalism and integrity.
          </p>
        </div>
      </div>
      <div className="row p-0 p-lg-5 d-flex flex-column  flex-lg-row flex-md-column mt-3 gap-3 ">
        <div style={{borderRadius:'15px'}} className="col py-5 client-parent ">
          <p style={{textAlign:'justify'}}>
            "I would like to express my heartfelt gratitude to Mr. Vignesh Anand
            and his dedicated team, including Ms. Nithya Sowmya, Ms.
            Indhuvadhana, Mr. Mohamed Mubeen, and Ms. Dhivya Bharathi, for their
            exceptional legal services. Their clear communication, meticulous
            attention to detail, and in-depth understanding of the legal system
            in India provided invaluable assistance during a critical time.
            Their professionalism, expertise, and unwavering support gave me the
            confidence I needed when seeking a reliable and trustworthy legal
            team. I cannot thank them enough for their outstanding help and
            highly recommend their services to anyone in need."
          </p>
          <p className="fs-5">
            <b>M Saravanan</b>
          </p>
          <p>Businessman</p>
        </div>
        <div style={{borderRadius:'15px'}} className="col py-5  client-parent">
          <p style={{textAlign:'justify'}}>
            "I wish to extend my deepest gratitude to Highbrows Legal Advocates
            & Legal Consultants for their outstanding service and unwavering
            professionalism throughout the resolution of my international legal
            matter. Having spent years attempting to resolve the issue on my
            own, with little success and dwindling hope, I was truly astounded
            by their ability to take decisive actions at the right moments,
            demonstrating remarkable expertise and determination to achieve a
            successful outcome. Their strategic approach, attention to detail,
            and commitment to excellence have exceeded my expectations at every
            step. I am profoundly grateful for their support and highly commend
            their exceptional capabilities in navigating complex legal
            challenges. Thank you once again for your unparalleled assistance."
          </p>
          <p className="fs-5 ">
            {" "}
            <b>S Suhial Ahamed</b>
          </p>
          <p>Businessman</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
