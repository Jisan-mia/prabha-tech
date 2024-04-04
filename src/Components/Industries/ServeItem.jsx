import React from "react";

const ServeItem = ({ item }) => {
  return (
    <div className="served__industries-list-item">
      <div className="img-cont">
        <img src={item.image} alt="" />
      </div>
      <div className="titles">
        <div className="titles__image-cont">
          <img src={item.title_image} alt="" />
        </div>
        <h2>{item.title}</h2>
      </div>
      <p className="served__industries-list-item-description">{item.details}</p>
    </div>
  );
};

export default ServeItem;
