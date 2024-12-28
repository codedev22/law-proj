import { BlogItems } from "./BlogItems"
import { Link } from "react-router-dom"
import blogbanner from '../../../assets/blogimages/blogbanner.png'
const Blog = () => {
  return (
    <div className="w-100">
      <img src={blogbanner} className="img-fluid w-100" alt="blogbanner" />
      <div className="container-lg container-fluid py-4 ">

        <div className="row gap-lg-5  px-3 py-lg-2 d-flex flex-column flex-lg-row">
          {BlogItems.filter((card) => (card.blogtype === "row1")).map((card) => (
            <div key={card.id} className="col py-lg-3 d-flex py-3">
              <div className="card card-shadow">
                <img src={card.blogimg} className="card-img-top" alt="blogimg" />
                <div className="card-body  ">
                  <h5 className="card-title">
                    {card.blogtitle}
                  </h5>
                  <p style={{ textAlign: "justify" }} className="card-text py-2">
                    {card.blogcontent}
                  </p>
                  <Link to={card.bloghref} className="btn mainbgcolor text-light">
                    READ MORE
                  </Link>

                </div>
              </div>
            </div>

          ))}
        </div>
        <div className="row gap-lg-5  py-2   px-3   d-flex flex-column flex-lg-row">
          {BlogItems.filter((card) => (card.blogtype === "row2")).map((card) => (
            <div key={card.id} className="col py-lg-3 d-flex py-3">
              <div className="card card-shadow">
                <img src={card.blogimg} className="card-img-top" alt="blogimg" />
                <div className="card-body p-4">
                  <h5 className="card-title">
                    {card.blogtitle}
                  </h5>
                  <p style={{ textAlign: "justify" }} className="card-text">
                    {card.blogcontent}
                  </p>
                  <Link to={card.bloghref} className="btn mainbgcolor text-light">
                    READ MORE
                  </Link>

                </div>
              </div>
            </div>

          ))}
        </div>
        <div className="row gap-lg-5 py-2   px-3  d-flex flex-column flex-lg-row">
          {BlogItems.filter((card) => (card.blogtype === "row3")).map((card) => (
            <div key={card.id} className="col py-lg-3 d-flex py-3">
              <div className="card card-shadow">
                <img src={card.blogimg} className="card-img-top" alt="blogimg" />
                <div className="card-body p-4">
                  <h5 className="card-title">
                    {card.blogtitle}
                  </h5>
                  <p style={{ textAlign: "justify" }} className="card-text">
                    {card.blogcontent}
                  </p>
                  <Link to={card.bloghref} className="btn mainbgcolor text-light">
                    READ MORE
                  </Link>
                </div>

              </div>
            </div>

          ))}
        </div>
      </div>
    </div>




  )
}

export default Blog

