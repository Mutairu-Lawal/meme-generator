import React from "react";

const Context = ({ formData, selectedMeme }) => {
  const { url, name } = selectedMeme;
  return (
    <>
      <div className="container mt-4 context-container flex-grow-1">
        <div className="row">
          <div className="col-12">
            <div className="context">
              <img src={url} alt={`image of ${name}`} className="img-fit" />
              <p className="top-text">{formData.topText}</p>
              <p className="bottom-text">{formData.bottomText}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Context;
