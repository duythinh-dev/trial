import React, { useState } from "react";
import { Link } from "react-router-dom";
import LightIcon from "../Icon/LightIcon";
import HomePageIcon from "../Icon/HomePageIcon";
import SettingIcon from "../Icon/SettingIcon";
import BackIcon from "../Icon/BackIcon";
import ModalEditProduct from "../ModalEditProduct";
import "./styles.css";

function Products({
  projects,
  loadingUpdatePrj,
  handleRemovePrd,
  getingProducts,
}) {
  const [modalData, setModalData] = useState({ open: false, data: null });
  const handleOpenModalEditPrd = (dataPrd) => {
    setModalData({ open: true, data: dataPrd, type: "update" });
  };
  const handleOpenModalCreatePrd = (dataPrd) => {
    setModalData({ open: true, type: "create" });
  };
  return (
    <div className="main">
      {modalData.open && (
        <ModalEditProduct modalData={modalData} setModalData={setModalData} />
      )}
      <div className={`backdrop ${loadingUpdatePrj ? "open" : ""}`}>
        <div className="progress-circle"></div>
      </div>
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
              <button type="button" onClick={() => handleOpenModalCreatePrd()}>
                <SettingIcon />
              </button>
            </div>
          </div>
          <div className="grid-container">
            {getingProducts &&
              [1, 2, 3, 4, 5, 6].map((i) => {
                return (
                  <div className="grid-item" key={i}>
                    <div className="image-container">
                      <div className="custom-skeleton"></div>
                    </div>
                  </div>
                );
              })}
            {projects.map((prj) => {
              const objAttributes = prj.attributes;
              return (
                <div className="grid-item" key={prj.id}>
                  <div className="image-container">
                    <img
                      className="prj-img"
                      src={
                        objAttributes.image?.data?.attributes.url
                          ? `https://cms-vietswiss-staging.absolutagentur.ch${objAttributes.image.data.attributes.url}`
                          : "https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg"
                      }
                      alt=""
                    />
                    <div className="action-buttons">
                      <button
                        className="edit-button"
                        onClick={() => {
                          handleOpenModalEditPrd(prj);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => {
                          handleRemovePrd(prj.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <Link className="link-detail-prd" to={`/products/${prj.id}`}>
                    {objAttributes.sub_title && (
                      <h3>{objAttributes.sub_title}</h3>
                    )}
                    <h2>{objAttributes.name}</h2>
                    <span>{objAttributes.description}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
