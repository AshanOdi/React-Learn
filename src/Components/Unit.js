import React from "react";

const Unit = ({ img, name, city, position }) => {
  return (
    <div className="unit_container">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>
        <span>{city}</span>
        <span>{position}</span>
      </p>
    </div>
  );
};

export default Unit;
