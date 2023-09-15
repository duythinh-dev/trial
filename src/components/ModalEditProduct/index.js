import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../../containers/Products/actions";

import "./styles.css";

export default function ModalEditProduct({ modalData, setModalData }) {
  const closeModal = () => {
    setModalData({ open: false, data: null });
  };
  const dispatch = useDispatch();
  const [editedPost, setEditedPost] = useState({
    image: `https://cms-vietswiss-staging.absolutagentur.ch${modalData.data.attributes.image.data.attributes.url}`,
    name: modalData.data.attributes.name,
    description: modalData.data.attributes.description,
  });
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
        setEditedPost({
          ...editedPost,
          image: e.target.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const changedData = { ...modalData };

    // Cập nhật các thông tin đã thay đổi từ form vào biến changedData
    // changedData.data.attributes.image.data.attributes.url = editedPost.image;
    changedData.data.attributes.name = editedPost.name;
    changedData.data.attributes.description = editedPost.desc;
    dispatch(
      editProduct({
        data: changedData.data,
        handleCloseModal: closeModal,
      })
    );
    // onSave(editedPost);
    // closeModal();
  };

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
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
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
