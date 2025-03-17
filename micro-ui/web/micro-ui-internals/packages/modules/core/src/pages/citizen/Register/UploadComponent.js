import { TextInput } from "@egovernments/digit-ui-components";
import React, { useState } from "react";

function UploadComponent({ t, config, onSelect, formData = {}, errors, setError, clearErrors }) {
  const { uploadFile, deletePic, file, image } = config?.populators?.inputs[0];

  const CrossIcon = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.66732 1.27252L8.72732 0.33252L5.00065 4.05919L1.27398 0.33252L0.333984 1.27252L4.06065 4.99919L0.333984 8.72585L1.27398 9.66585L5.00065 5.93919L8.72732 9.66585L9.66732 8.72585L5.94065 4.99919L9.66732 1.27252Z"
        fill="white"
      />
    </svg>
  );

  const UploadIcon = () => (
    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.62109 13.9209H10.6211V7.9209H14.6211L7.62109 0.920898L0.621094 7.9209H4.62109V13.9209ZM0.621094 15.9209H14.6211V17.9209H0.621094V15.9209Z"
        fill="#007E7E"
      />
    </svg>
  );

  return (
    <div>
      <div className="custom-upload-component">
        <div className="upload-text-input">
          <TextInput value={file !== null ? "1 File Selected" : "No File Selected"} disabled />
        </div>
        <div id="file-upload" className="file-upload-button">
          <label for="file" style={{ cursor: "pointer" }}>
            <div className="upload-file-label">
              <UploadIcon />
              Upload
            </div>
          </label>
          <input type="file" accept="image/*" id="file" onChange={uploadFile} style={{ display: "none" }} />
        </div>
      </div>
      {image && (
        <div className="uploaded-image-container">
          <div className="cross-icon" onClick={deletePic}>
            <CrossIcon />
          </div>
          <img className="image-container" alt="preview image" src={image} />
        </div>
      )}
    </div>
  );
}

export default UploadComponent;
