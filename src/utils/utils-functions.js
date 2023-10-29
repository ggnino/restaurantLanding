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
    } else if (element === "menu-highlights") {
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
        menuItemContainer.setAttribute("id", "burger");
        menuItemImg.setAttribute("src", "../src/assets/imgs/vegan-burger.jpg");
        menuItemDesc.textContent = `Our vegan burger will leave you stunned by the flavor. Our
        homemade burger patties are not like any other bland patty, ours
        come packed with protein, plenty of herbs and
        spices. Dressing up it with our homemade cheddar cheese and
        topped with your choice of lettuce or kale, onions and tomato.
        With our french fries included, your going to be shocked at how
        good a plant based burger can really be.`;
      } else if (x === 1) {
        menuItemContainer.setAttribute("id", "steak");
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
        menuItemContainer.setAttribute("id", "chicken");
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
      eventAdder(menuItemContainer);
      elements.push(menuItemContainer);
    } else if (element === "about-us") {
      const aboutUsContentContainer = document.createElement("div");
      const aboutUsContentElement = document.createElement("p");

      aboutUsContentContainer.setAttribute(
        "class",
        "about-us-container flex flex-col flex-center bg-img-center border"
      );
      aboutUsContentElement.setAttribute(
        "class",
        "description flex border-radius-md"
      );

      if (x === 0) {
        aboutUsContentElement.textContent =
          "We here at Tierra, are very concerned with our planet mother earth. One of the biggest threats to mother earth is climate change and one of the factors affecting that climate change, is factory farming. We must change our eating habits so we can ease the damage caused by intensive animal farming. We have dedicated our lives to help our society transition from consuming animal products to plant-based products.";
      } else
        aboutUsContentElement.textContent =
          "We know when people think of eating plant-based or vegan, two things usually come to mind, boring and taste like dirt. But we here at Tierra, made sure that none of our food is boring. We went above and beyond to make sure when we serve our food on the table, that all the rich and lovely flavor is there and not in the dirt. When our customers leave here, they will leave here not just satisfied; but even more knowledgeable than before. They know now, that the animal products that they use to love wasn't all that tasteful. What was tasteful was the way the food was prepared. Now, a plant-based lifestyle seems doable and even maintainable; for any individual that comes through these doors.";

      aboutUsContentContainer.appendChild(aboutUsContentElement);
      elements.push(aboutUsContentContainer);
    } else if (element === "form") {
      const formFieldSet = document.createElement("fieldset");
      const formInput = document.createElement("input");
      const textArea = document.createElement("textarea");
      const formLabel = document.createElement("label");

      if (x === 0) {
        formInput.setAttribute("type", "text");
        formInput.setAttribute("id", "name");
        formInput.setAttribute("name", "name");
        formInput.setAttribute("required", "true");
        formLabel.setAttribute("for", "name");
        formLabel.textContent = "Name:";
      } else if (x === 1) {
        formInput.setAttribute("type", "email");
        formInput.setAttribute("id", "email");
        formInput.setAttribute("name", "email");
        formInput.setAttribute("required", "true");
        formLabel.setAttribute("for", "email");
        formLabel.textContent = "Email:";
      } else {
        textArea.setAttribute("rows", 5);
        textArea.setAttribute("col", 25);
        textArea.setAttribute("id", "comments");
        textArea.setAttribute("name", "comments");
        textArea.setAttribute("placeholder", "Enter your comments here....");
        formLabel.setAttribute("for", "comments");
        formLabel.textContent = "Comments:";
      }

      if (x > 1) formFieldSet.append(formLabel, textArea);
      else formFieldSet.append(formLabel, formInput);

      elements.push(formFieldSet);
    }
  }
  return elements;
}

function eventAdder(element) {
  element.onmouseenter = menuItemHover;
  element.onmouseleave = menuItemHover;
}

const menuItemHover = (e) => {
  const menuHighlight = document.getElementById("menu-highlight");
  const element = e.target.id;
  const event = e.type;
  const text = "Menu Highlights";

  console.log(element);

  if (event === "mouseenter") {
    if (element === "burger") {
      menuHighlight.textContent = "The Green Giant";
    }

    if (element === "chicken") {
      menuHighlight.textContent = "Fried Chik'n and Fries";
    }

    if (element === "steak") {
      menuHighlight.textContent = "Churrasco Verde";
    }
  } else if (event === "mouseleave") {
    // default text
    menuHighlight.textContent = text;
  }
};
export { createMyElements, menuItemHover };
