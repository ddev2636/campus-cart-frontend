import React from "react";
import { useState } from "react";
import "../buy.css";
const Modal = (props) => {
  const { data, closeModal, showModel } = props;
  if (!data) return null;
  return (
    <>
      <div className={showModel ? "model show-model" : "model"}>
        <div className="content1">
          <button onClick={closeModal}>click</button>
          <div>{data.name}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
