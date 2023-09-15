import React from "react";
import { Link } from "react-router-dom";
import LightIcon from "../Icon/LightIcon";
import HomePageIcon from "../Icon/HomePageIcon";
import SettingIcon from "../Icon/SettingIcon";
import BackIcon from "../Icon/BackIcon";
import "./styles.css";
function Products({ projects }) {
  return (
    <div className="main">
      <header>
        <div className="header-container">
          <div className="left-object">
            <h1>VIETSWISS</h1>
            <span>code & design</span>
          </div>
          <div className="right-object">
            <div className="lang">EN</div>
            <div className="darkMode">
              <button type="button">
                <LightIcon />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="main-container">
        <div className="menu-container">
          <Link to="/" className="menu-item">
            <button type="button">
              <HomePageIcon />
            </button>
          </Link>
          <div className="menu-item">
            <button type="button">Projects</button>
          </div>
          <div className="menu-item">
            <button type="button">Phone</button>
          </div>
        </div>
        <div className="products-container">
          <div className="product-action">
            <div className="product-action-left">
              <button type="button">
                <BackIcon />
                <span> Project</span>
              </button>
            </div>
            <div className="product-action-right">
              <button type="button">
                <SettingIcon />
              </button>
            </div>
          </div>
          <div className="grid-container">
            {projects.map((prj) => {
              return (
                <Link
                  className="grid-item"
                  key={prj.id}
                  to={`/products/${prj.id}`}
                >
                  <img
                    className="prj-img"
                    src="https://vapa.vn/wp-content/uploads/2022/12/hinh-de-thuong-don-gian-003.jpg"
                    alt=""
                  />
                  {prj.attributes.sub_title && (
                    <h3>{prj.attributes.sub_title}</h3>
                  )}
                  <h2>{prj.attributes.name}</h2>
                  <span>{prj.attributes.description}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
