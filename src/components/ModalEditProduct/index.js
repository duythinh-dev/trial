import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct, createProduct } from "../../containers/Products/actions";

import "./styles.css";

export default function ModalEditProduct({ modalData, setModalData }) {
  const dispatch = useDispatch();
  const closeModal = () => {
    setModalData({ open: false, data: null });
  };

  const isModalCreatePost = modalData.type === "create";
  const [editedPost, setEditedPost] = useState(
    isModalCreatePost
      ? { image: null, name: "", description: "" }
      : {
          image: modalData.data?.attributes?.image?.data?.attributes.url
            ? `https://cms-vietswiss-staging.absolutagentur.ch${modalData.data?.attributes?.image?.data?.attributes.url}`
            : "https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg",
          name: modalData.data.attributes.name,
          description: modalData.data.attributes.description,
        }
  );
  console.log(editedPost);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({
      ...editedPost,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const formData = new FormData();

        formData.append("files", file);
        setEditedPost({
          ...editedPost,
          image: e.target.result,
          fileImage: formData,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const changedData = { ...modalData };

    if (!isModalCreatePost) {
      changedData.data.attributes.name = editedPost.name;
      changedData.data.attributes.description = editedPost.desc;
      dispatch(
        editProduct({
          data: changedData.data,
          handleCloseModal: closeModal,
          editedPost,
        })
      );
    } else {
      dispatch(
        createProduct({
          data: {
            ...editedPost,
          },
          handleCloseModal: closeModal,
        })
      );
    }
    // onSave(editedPost);
    // closeModal();
  };

  function openUploadModal() {
    document.getElementById("image").click();
  }

  return (
    <>
      {modalData.open && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>Modal Edit</h2>
            </div>
            <div>
              <form className="edit-post-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="image">Hình ảnh:</label>

                  <div className="custom-upload" onClick={openUploadModal}>
                    <label htmlFor="file-upload" className="upload-label">
                      <span className="upload-icon">+</span> Tải lên hình ảnh
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      className="file-input"
                      onChange={handleImageChange}
                    />
                  </div>
                  {editedPost.image && (
                    <img
                      src={editedPost.image}
                      alt="Hình ảnh bài viết"
                      width="500"
                    />
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="name">Tên:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={editedPost.name}
                    onChange={handleInputChange}
                  />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="subName">Tên phụ:</label>
                  <input
                    type="text"
                    id="subName"
                    name="subName"
                    value={editedPost.attributes.subName}
                    onChange={handleInputChange}
                  />
                </div> */}
                <div className="form-group">
                  <label htmlFor="description">Mô tả:</label>
                  <textarea
                    id="description"
                    name="description"
                    value={editedPost.description}
                    onChange={handleInputChange}
                    rows="8"
                  />
                </div>
                <button type="submit" className="button-save">
                  Lưu
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
