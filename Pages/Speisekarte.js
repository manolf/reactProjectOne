import React, { useState } from "react";
import Menu from "../Menu";
import Categories from "../Categories";
import items from "../data";

// //dynamic approach for getting all unique values as buttons
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
//console.log(allCategories);
//const [isMainpage, setIsMainpage] = useState(false);


const Speisekarte = () => {
const [menuItems, setMenuItems] = useState(items);
const [categories, setCategories] = useState(allCategories);

const filterItems = (category) => {
  if (category === "all") {
    setMenuItems(items);
    return;
  }
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems);
};
  return (
      <>
    <main>
      <section >
        <div className="title">
          <h2>Speisen</h2>

          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
    </>
  );
};

export default Speisekarte;
