import React from "react";

const Separator = () => {
  return (
    <div
      className="separator"
      style={{
        backgroundImage: "url(/images/sep.jpg)",
        width: "100%",
        height: "350px",
        backgroundSize: "cover",
        marginBottom: "200px",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <h1 style={{ color: "white", textAlign: "center" }}>
        Développement Web Responsive
      </h1>
      <img
        src="/images/resp.png"
        alt=""
        className="separator-responsive-img"
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
};

export default Separator;
