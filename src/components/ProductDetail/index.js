import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../Icon/CloseIcon";
import "./styles.css";

export default function ProductDetail({ data }) {
  console.log(data);
  return (
    <div className="main-page-detail">
      <div className="main-img-container">
        <div className="header-detail-container">
          <div className="header-left">
            <h1>VIETSWISS</h1>
            <span>code & design</span>
          </div>
          <div className="header-right">
            <button type="button">
              <CloseIcon />
            </button>
          </div>
        </div>
        <img
          className="main-img"
          src={`https://cms-vietswiss-staging.absolutagentur.ch${data.attributes.image.data.attributes.url}`}
          alt={data.name}
        />
      </div>
      <div className="main-content">
        <div className="header-info-container">
          <p>{data.name}</p>
          <h1>{data.name}</h1>
          <span>{data.name}</span>
        </div>
        <div className="divider" />
        <div className="info">
          <span className="title">Services we provided</span>
          <div className="list-chip">
            {[1, 2, 3, 4].map(() => (
              <div className="chip">sadasds</div>
            ))}
          </div>
        </div>
        <div className="info">
          <span className="title">Technologies used</span>
          <div className="tech-list">
            {[1, 2, 3, 4].map(() => (
              <div className="tech-item">
                <div className="logo-tech">sdsd</div>
                <div className="name-tech">Reactjs</div>
              </div>
            ))}
          </div>
        </div>
        <div className="list-image">
          {[1, 2, 3, 4].map(() => (
            <div>
              <img
                src={`https://cms-vietswiss-staging.absolutagentur.ch${data.attributes.image.data.attributes.url}`}
                alt={data.name}
                className="image-item"
              />
            </div>
          ))}
        </div>
        <div className="contact-info">
          <span className="contact-title">
            Have a similar project or idea?
            <br /> Let's discuss the details.
          </span>
          <button type="button">Contact</button>
        </div>
        <div className="other-word">
          <div className="title-container">
            <span className="title">Other words</span>
            <span className="title">View all</span>
          </div>
          <div className="divider" />
          <div className="list-other-works">
            <Link
              className="grid-other-item"
              // key={prj.id}
              to={`/products/${data.id}`}
            >
              <img
                className="prj-img"
                src="https://vapa.vn/wp-content/uploads/2022/12/hinh-de-thuong-don-gian-003.jpg"
                alt=""
              />
              {data.attributes.sub_title && (
                <h3>{data.attributes.sub_title}</h3>
              )}
              <h2>{data.attributes.name}</h2>
              <span>{data.attributes.description}</span>
            </Link>
            <Link
              className="grid-other-item"
              // key={prj.id}
              to={`/products/${data.id}`}
            >
              <img
                className="prj-img"
                src="https://vapa.vn/wp-content/uploads/2022/12/hinh-de-thuong-don-gian-003.jpg"
                alt=""
              />
              {data.attributes.sub_title && (
                <h3>{data.attributes.sub_title}</h3>
              )}
              <h2>{data.attributes.name}</h2>
              <span>{data.attributes.description}</span>
            </Link>
          </div>
        </div>
        {/* <Link to="/products">ProductDetail</Link>; */}
      </div>
    </div>
  );
}
