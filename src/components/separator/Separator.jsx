import React from "react";
import "./separator.scss";

const Separator = (props) => {
  const info = props.info;
  return (
    <div className="separator">
      <h1>{info.title}</h1>
      <img src={info.img} alt="" className="separator-responsive-img" />
    </div>
  );
};

export default Separator;
