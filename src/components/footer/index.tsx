import React from "react";
import Wave from "react-wavify"; // Replace 'some-wave-library' with the actual library

export const Footer = () => {
  return (
    <Wave
      fill="white"
      paused={false}
      style={{ display: "flex" }}
      options={{
        height: 20,
        amplitude: 20,
        speed: 0.2,
        points: 3,
      }}
    />
    // <div style={{ position: "relative", height: "100px" }}>

    //   <div
    //     style={{
    //       zIndex: 1,
    //       position: "absolute",
    //       top: "80%",
    //       left: "50%",
    //       transform: "translate(-50%, -50%)",
    //     }}
    //   >
    //     <h3 className="font-mono text-5xl font-semibold">Esther Lee</h3>
    //   </div>
    // </div>
  );
};

export default Footer;
