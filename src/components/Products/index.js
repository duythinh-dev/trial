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
  function navigateTo(route) {
    window.location.href = route;
  }

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
                <LightIcon className="icon-dark-more" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="main-container">
        <div className="menu-container">
          <button className="btn-menu" onclick={() => navigateTo("/")}>
            <HomePageIcon />
            <span class="tooltiptext">Home</span>
          </button>
          <button className="btn-menu" onclick={() => navigateTo("/")}>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_44_175)">
                <path
                  d="M12.9587 0.996449C13.3 0.309507 14.2799 0.309506 14.6213 0.996448L18.0003 7.79727C18.1354 8.0693 18.3951 8.25798 18.6956 8.30247L26.2077 9.41453C26.9665 9.52686 27.2694 10.4588 26.7215 10.9957L21.2977 16.3109C21.0808 16.5235 20.9816 16.8288 21.0321 17.1283L22.2959 24.6165C22.4235 25.3728 21.6307 25.9488 20.9508 25.5937L14.2197 22.0778C13.9505 21.9372 13.6295 21.9372 13.3602 22.0778L6.62913 25.5937C5.94923 25.9488 5.15645 25.3728 5.28409 24.6165L6.54784 17.1283C6.59839 16.8288 6.49919 16.5235 6.28224 16.3109L0.858448 10.9957C0.310598 10.4588 0.613414 9.52686 1.3722 9.41453L8.88434 8.30247C9.18482 8.25798 9.44453 8.0693 9.57969 7.79727L12.9587 0.996449Z"
                  fill="#C8C8C8"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_44_175"
                  x="-9.27125"
                  y="-9.36891"
                  width="46.1225"
                  height="44.9203"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="4.92509"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_44_175"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_44_175"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <span class="tooltiptext">Star</span>
          </button>
          <button className="btn-menu" onclick={() => navigateTo("/")}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.31247 9.57203C1.85037 10.7284 2.80136 11.3066 3.79115 11.3408L3.78965 11.3408H3.79134L3.79115 11.3408C5.44123 11.3335 6.57218 10.4279 6.97677 9.06032L6.98933 9.01762C7.14392 8.49152 7.30513 7.94293 7.59902 7.4962C8.49782 6.13336 9.86542 5.74446 11.7001 6.23399C13.0677 6.59731 14.3527 6.12995 15.098 4.99737C15.8029 3.9279 15.7692 2.52412 14.9834 1.48706C14.2549 0.525052 13.265 0.0969237 12.093 0.310135C10.7912 0.547226 9.95142 1.35061 9.63102 2.68275C9.20607 4.45326 8.06613 5.53296 6.45739 5.59436C5.99833 5.61212 5.53062 5.50412 5.06811 5.39732L5.06811 5.39732L5.06809 5.39732C4.95296 5.37073 4.83814 5.34422 4.72387 5.31975C3.46757 5.05195 2.43555 5.44085 1.65985 6.44038C0.919561 7.39216 0.804892 8.48039 1.31247 9.57203ZM9.47743 13.6145C9.98838 14.7249 10.8906 15.2605 11.9007 15.2946C13.4824 15.2929 14.5667 14.4059 14.9006 12.9459C15.1586 11.8184 15.7589 10.9809 16.7994 10.4965C17.6307 10.1093 18.4705 10.1673 19.344 10.4146C21.4485 11.0082 23.4097 9.32468 23.0758 7.24886C22.8498 5.85019 21.7554 4.83701 20.376 4.75173C19.0287 4.66815 17.7842 5.55682 17.4452 6.94866C17.2226 7.86973 16.8635 8.66458 16.0911 9.22575C15.0642 9.97285 13.9647 9.95579 12.7961 9.60953C11.6275 9.26328 10.6207 9.64194 9.86022 10.5801C9.11824 11.4926 8.98165 12.5365 9.47743 13.6145ZM12.0919 18.4511L12.092 18.4511L12.092 18.4511C12.2411 18.4727 12.4407 18.5016 12.6343 18.5542C14.9378 19.1716 16.479 18.2779 17.0878 15.9632C17.6713 13.751 20.1484 12.9288 21.7977 14.4042C22.7976 15.298 23.0624 16.695 22.4621 17.8975C21.8634 19.0932 20.5093 19.668 19.1906 19.4087C18.4402 19.262 17.6156 19.1358 16.8888 19.2996C15.5634 19.5981 14.8771 20.6164 14.5567 21.9366C14.1604 23.5689 12.7523 24.4746 11.2009 24.1625C9.75068 23.8708 8.73552 22.5063 8.89404 21.0598C9.06267 19.5145 10.2886 18.4058 11.9429 18.428C11.9824 18.4352 12.0332 18.4426 12.0919 18.4511ZM0.997357 17.205C1.01085 18.8339 2.28569 20.0961 3.90455 20.0842C5.46101 20.0706 6.74092 18.7845 6.7561 17.2152C6.77127 15.6375 5.44246 14.2832 3.87251 14.2763C2.29413 14.2695 0.983866 15.6016 0.997357 17.205Z"
                fill="#D1D3D7"
              />
            </svg>

            <span class="tooltiptext">Tooltip</span>
          </button>
          <button className="btn-menu" onclick={() => navigateTo("/")}>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_44_191)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.9176 15.8605L17.1545 14.3162C17.0131 14.2751 16.8631 14.2735 16.7208 14.3116C16.5785 14.3497 16.4494 14.4261 16.3474 14.5324L14.2512 16.6286C13.9683 16.9141 13.5961 17.0939 13.1967 17.1382C12.7972 17.1825 12.3947 17.0886 12.0561 16.872C11.1039 16.2689 10.0113 15.5488 9.09547 14.633C8.17962 13.7172 7.45948 12.6245 6.85649 11.6722C6.63989 11.3337 6.5459 10.9311 6.59018 10.5317C6.63447 10.1323 6.81436 9.76017 7.09985 9.47735L9.19607 7.38112C9.30238 7.27914 9.37874 7.15 9.41687 7.0077C9.45499 6.8654 9.45343 6.71538 9.41236 6.57391L7.86814 0.811035H1.77953C1.56563 0.810988 1.35987 0.893008 1.20465 1.04019C1.04944 1.18737 0.956609 1.38849 0.945299 1.60209C0.795588 4.42301 1.24094 7.24389 2.25244 9.88148C3.26393 12.5191 4.81894 14.9144 6.81647 16.9119C8.81399 18.9094 11.2094 20.4643 13.847 21.4758C16.4846 22.4872 19.3055 22.9325 22.1264 22.7827C22.34 22.7714 22.5411 22.6786 22.6884 22.5234C22.8356 22.3682 22.9176 22.1624 22.9176 21.9485V15.8605Z"
                  fill="#C8C8C8"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_44_191"
                  x="-8.93318"
                  y="-9.03914"
                  width="41.7009"
                  height="41.7003"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="4.92509"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_44_191"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_44_191"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <span class="tooltiptext">Phone</span>
          </button>
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
