"use strict";
// Create a function named findMenuItemsByTag. The function should receive an array of menu items and a tag, and return all items that match that tag.
// If no item matches the tag, return an empty array.
Object.defineProperty(exports, "__esModule", { value: true });
const findMenuItemsByTag = (menu, tag) => {
    const filteredMenuItems = menu.filter((menuItem) => menuItem.tag === tag);
    return filteredMenuItems;
};
const menu = [
    { name: "Veggie Bowl", price: 350, tag: "vegan" },
    { name: "Tofu Wrap", price: 300, tag: "vegan" },
    { name: "Chicken Wings", price: 450, tag: "spicy" },
    { name: "Beef Burger", price: 500, tag: "spicy" },
];
console.log(findMenuItemsByTag(menu, "vegan"));
console.log(findMenuItemsByTag(menu, "gluten-free"));
//# sourceMappingURL=problem-7.js.map