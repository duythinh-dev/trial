import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../Icon/CloseIcon";
import "./styles.css";

export default function ProductDetail({ data, moreProducts = [] }) {
  const objAttributes = data.attributes;
  const techsData = objAttributes.technologies.data;
  const devServData = objAttributes.development_services.data;
  const galleryData = objAttributes.gallery.data;
  return (
    <div className="main-page-detail">
      <div className="main-img-container">
        <div className="header-detail-container">
          <div className="header-left">
            <Link to="/" className="header-left-container">
              <h1>VIETSWISS</h1>
              <span>code & design</span>
            </Link>
          </div>
          <div className="header-right">
            <Link className="grid-other-item" to={`/products`} type="button">
              <CloseIcon />
            </Link>
          </div>
        </div>
        <img
          className="main-img"
          src={`https://cms-vietswiss-staging.absolutagentur.ch${
            objAttributes.image.data.attributes.url || ""
          }`}
          alt=""
        />
      </div>
      <div className="main-content">
        <div className="header-info-container">
          {objAttributes.sub_title ? <p>{objAttributes.sub_title}</p> : ""}
          <h1>{objAttributes.name}</h1>
          <span>{objAttributes.description}</span>
        </div>
        <div className="divider" />
        <div className="info">
          <h3 className="title">Services we provided</h3>
          <div className="list-chip">
            {devServData.map((svItem) => (
              <div className="chip">{svItem.attributes.name}</div>
            ))}
          </div>
        </div>
        <div className="info">
          <h3 className="title">Technologies used</h3>
          <div className="tech-list">
            {techsData.map((techItem) => (
              <div className="tech-item">
                <div className="logo-tech">logo</div>
                <div className="name-tech">{techItem.attributes.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="list-image">
          {galleryData.map((galItem) => {
            const mediaType = galItem.attributes.mime;
            if (mediaType === "video/mp4")
              return (
                <video
                  controls
                  className="image-item"
                  src={`https://cms-vietswiss-staging.absolutagentur.ch${galItem.attributes.url}`}
                >
                  <source type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              );
            return (
              <img
                src={`https://cms-vietswiss-staging.absolutagentur.ch${
                  galItem.attributes.url || ""
                }`}
                alt=""
                className="image-item"
              />
            );
          })}
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
            <h1>Other words</h1>
            <Link className="grid-other-item" to={`/products`}>
              View all
            </Link>
          </div>
          <div className="divider" />
          <div className="list-other-works">
            {moreProducts.map((item) => {
              return (
                <Link
                  className="grid-other-item"
                  key={item.id}
                  to={`/products/${item.id}`}
                >
                  <img
                    className="prj-img"
                    src={`https://cms-vietswiss-staging.absolutagentur.ch${
                      item.attributes.image.data.attributes.url || ""
                    }`}
                    alt=""
                  />
                  {item.attributes.sub_title && (
                    <h3>{item.attributes.sub_title}</h3>
                  )}
                  <h2>{item.attributes.name}</h2>
                  <span>{item.attributes.description}</span>
                </Link>
              );
            })}
          </div>
        </div>
        {/* <Link to="/products">ProductDetail</Link>; */}
      </div>
    </div>
  );
}
