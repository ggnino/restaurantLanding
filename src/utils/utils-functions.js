function createMyElements(element, num) {
  const elements = [];

  for (let x = 0; x < num; x++) {
    if (element === "nav") {
      const liElement = document.createElement("li");
      const navLink = document.createElement("a");
      liElement.setAttribute("class", "nav-items-item border-radius-sm");

      if (x === 0) {
        navLink.setAttribute("href", "#home");
        navLink.setAttribute("class", "nav-items-item-link");
        navLink.textContent = "Home";
      } else if (x === 1) {
        navLink.setAttribute("href", "#menu");
        navLink.setAttribute("class", "nav-items-item-link");
        navLink.textContent = "Menu";
      } else {
        navLink.setAttribute("href", "#about-us");
        navLink.setAttribute("class", "nav-items-item-link ");
        navLink.textContent = "About";
      }

      liElement.appendChild(navLink);

      elements.push(liElement);
    } else if ("menu-highlights") {
      const menuItemContainer = document.createElement("div");
      const menuItemImg = document.createElement("img");
      const menuItemDesc = document.createElement("p");
      menuItemContainer.setAttribute(
        "class",
        "menu-items-item border border-radius-md"
      );
      menuItemImg.setAttribute("class", "menu-img border-radius");
      menuItemDesc.setAttribute("class", "description flex border-radius");

      if (x === 0) {
        menuItemImg.setAttribute("src", "../src/assets/imgs/vegan-burger.jpg");
        menuItemDesc.textContent = `Our vegan burger will leave you stunned by the flavor. Our
        homemade burger patties are not like any other bland patty, ours
        come packed with protein, plenty of herbs and
        spices. Dressing up it with our homemade cheddar cheese and
        topped with your choice of lettuce or kale, onions and tomato.
        With our french fries included, your going to be shocked at how
        good a plant based burger can really be.`;
      } else if (x === 1) {
        menuItemImg.setAttribute(
          "src",
          "../src/assets/imgs/vegan-steak-and-potatoes.jpg"
        );
        menuItemDesc.textContent = `Yes, that is right, we have steak and of course its plant-based.
        Our homemade steak is based off of gluten.
        Seasoned to perfection, you'll love those hints of oregano and
        salt buzzing those taste buds. Served with your choice of two
        sides and a drink, you will be wondering
        why haven't I changed to plant-based diet, yet?`;
      } else {
        menuItemImg.setAttribute(
          "src",
          "../src/assets/imgs/chik'n-and-fries.png"
        );
        menuItemDesc.textContent = `A plant-based spin on a lovely classic, that we all enjoy. Our
        fried chik'n is more that just finger licking good, it just
        defies everything that you might know about food, especially
        plant-based food. Fried to a cripsy perfection with those lovely
        fries, you will be wondering how good will this taste on a sandwich?`;
      }
      menuItemContainer.append(menuItemImg, menuItemDesc);
      elements.push(menuItemContainer);
    }
  }
  return elements;
}
export { createMyElements };
