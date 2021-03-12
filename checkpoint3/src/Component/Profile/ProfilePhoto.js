import React from "react";
import Pic from "./Pic.png";
const Photo = () => {
    return (
        <img
            src={Pic}
            alt="image"
            style={{ width: "150px", height: "150px", borderRadius: 150 / 2 }}
        />
    );
};
export default Photo;
