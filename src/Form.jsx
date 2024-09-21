import React from "react";
import { FcStackOfPhotos } from "react-icons/fc";
const Form = ({ handleChange, formData, getMemeImage }) => {
  const { topText, bottomText } = formData;
  return (
    <div className="container">
      <form action="#">
        <div className="row">
          <div className="col-12 col-sm-6">
            <label htmlFor="topText" className="form-label mb-1">
              Top Text
            </label>
            <input
              type="text"
              name="topText"
              id="topText"
              className="form-control"
              placeholder="Your text here"
              value={topText}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-sm-6 mt-2 mt-sm-0">
            <label htmlFor="bottomText" className="form-label mb-1">
              Bottom Text
            </label>
            <input
              type="text"
              name="bottomText"
              id="bottomText"
              className="form-control"
              placeholder="Your text here"
              value={bottomText}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3 d-grid">
            <div onClick={getMemeImage} className="btn bg-brand c-btn">
              Get a new meme image
              <FcStackOfPhotos className="ms-2 fs-2" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
