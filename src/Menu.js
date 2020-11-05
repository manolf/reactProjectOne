import React from "react";

const Menu = ({ items }) => {
  const fillingUp = "--------------------------------------------------";
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">€ {price}</h4>
                
              </header>
              {desc.length < 50 ? (
                <p className="item-text">
                  {" "}
                  {desc}{" "}
                  <span className="item-text-invisible">
                    {" "}
                    {fillingUp.slice(0, 50 - desc.length)}
                  </span>{" "}
                </p>
              ) : (
                <p className="item-text">{desc} </p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
