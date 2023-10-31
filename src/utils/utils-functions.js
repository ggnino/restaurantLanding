import burgerImg from "../assets/imgs/vegan-burger.jpg";
import chickenImg from "../assets/imgs/chik'n-and-fries.png";
import steakImg from "../assets/imgs/vegan-steak-and-potatoes.jpg";

const links = {
  home: false,
  menu: false,
  about: false,
};

// function for creating multiple instances of the same element
function createMyElements(element, num) {
  const elements = [];

  for (let x = 0; x < num; x++) {
    // creating multiple nav links
    if (element === "nav") {
      const liElement = document.createElement("li");
      const navLink = document.createElement("a");

      liElement.setAttribute("class", "nav-items-item");

      if (x === 0) {
        navLink.setAttribute("id", "home");
        navLink.setAttribute("href", "#");
        navLink.setAttribute("class", "nav-items-item-link  border-top-radius");
        navLink.textContent = "Home";
      } else if (x === 1) {
        navLink.setAttribute("id", "menu");
        navLink.setAttribute("href", "#");
        navLink.setAttribute("class", "nav-items-item-link  border-top-radius");
        navLink.textContent = "Menu";
      } else {
        navLink.setAttribute("id", "about");
        navLink.setAttribute("href", "#");
        navLink.setAttribute(
          "class",
          "nav-items-item-link  border-top-radius "
        );
        navLink.textContent = "About";
      }

      eventAdder(navLink, "hover");

      liElement.appendChild(navLink);

      elements.push(liElement);
    }
    // creating multiple menu item elements
    else if (element === "menu-highlights") {
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
        menuItemImg.setAttribute("src", burgerImg);
        menuItemDesc.textContent = `Our vegan burger will leave you stunned by the flavor. Our
        homemade burger patties are not like any other bland patty, ours
        come packed with protein, plenty of herbs and
        spices. Dressing up it with our homemade cheddar cheese and
        topped with your choice of lettuce or kale, onions and tomato.
        With our french fries included, your going to be shocked at how
        good a plant based burger can really be.`;
      } else if (x === 1) {
        menuItemContainer.setAttribute("id", "steak");
        menuItemImg.setAttribute("src", steakImg);
        menuItemDesc.textContent = `Yes, that is right, we have steak and of course its plant-based.
        Our homemade steak is based off of gluten.
        Seasoned to perfection, you'll love those hints of oregano and
        salt buzzing those taste buds. Served with your choice of two
        sides and a drink, you will be wondering
        why haven't I changed to plant-based diet, yet?`;
      } else {
        menuItemContainer.setAttribute("id", "chicken");
        menuItemImg.setAttribute("src", chickenImg);
        menuItemDesc.textContent = `A plant-based spin on a lovely classic, that we all enjoy. Our
        fried chik'n is more that just finger licking good, it just
        defies everything that you might know about food, especially
        plant-based food. Fried to a cripsy perfection with those lovely
        fries, you will be wondering how good will this taste on a sandwich?`;
      }

      menuItemContainer.append(menuItemImg, menuItemDesc);

      eventAdder(menuItemContainer, "hover");

      elements.push(menuItemContainer);
    }
    // creating multiple about-us content elements
    else if (element === "about-us") {
      const aboutUsContentContainer = document.createElement("div");
      const aboutUsContentElement = document.createElement("p");
      const classNames =
        "about-us-container flex flex-col flex-center bg-img-center border";

      aboutUsContentContainer.setAttribute("class", classNames);
      aboutUsContentElement.setAttribute(
        "class",
        "description flex border-radius-md"
      );

      if (x === 0) {
        aboutUsContentContainer.setAttribute(
          "class",
          classNames + " border-top-radius"
        );
        aboutUsContentElement.textContent =
          "We here at Tierra, are very concerned with our planet mother earth. One of the biggest threats to mother earth is climate change and one of the factors affecting that climate change, is factory farming. We must change our eating habits so we can ease the damage caused by intensive animal farming. We have dedicated our lives to help our society transition from consuming animal products to plant-based products.";
      } else
        aboutUsContentElement.textContent =
          "We know when people think of eating plant-based or vegan, two things usually come to mind, boring and taste like dirt. But we here at Tierra, made sure that none of our food is boring. We went above and beyond to make sure when we serve our food on the table, that all the rich and lovely flavor is there and not in the dirt. When our customers leave here, they will leave here not just satisfied; but even more knowledgeable than before. They know now, that the animal products that they use to love wasn't all that tasteful. What was tasteful was the way the food was prepared. Now, a plant-based lifestyle seems doable and even maintainable; for any individual that comes through these doors.";

      aboutUsContentContainer.appendChild(aboutUsContentElement);
      elements.push(aboutUsContentContainer);
    }
    // creating multiple form elements
    else if (element === "form") {
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
// function for resetting style for nav links
function resetNavLinks(element) {
  const { navLinks } = getMyElements();

  for (let props in navLinks) {
    if (!isNaN(props) && navLinks[props].id !== element.id) {
      navLinks[props].style.color = "white";
      navLinks[props].style.backgroundColor = "transparent";
    }
  }
}
// function for setting nav selection
function setSelection(id) {
  for (let prop in links) {
    links[prop] = false;
  }
  links[id] = !links[id];
}
// function for getting nav seletion
function getSelection() {
  return links;
}
// function for getting necessary elements
function getMyElements() {
  const menuHighlight = document.getElementById("menu-highlight");
  const navLinks = document.getElementsByClassName("nav-items-item-link");
  const homeElement = document.getElementById("home-page");
  const menuElement = document.getElementById("menu-view");
  const aboutUsElement = document.getElementById("about-us");

  return { homeElement, menuElement, aboutUsElement, navLinks, menuHighlight };
}
// handler function for clicks
function clickHandler(e) {
  const { homeElement, menuElement, aboutUsElement, navLinks } =
    getMyElements();

  const headerBtn = e.target.className.includes("btn") ? "menu" : null;
  let navLink = null;

  headerBtn ? setSelection(headerBtn) : setSelection(e.target.id);

  for (let prop in navLinks) {
    if (navLinks[prop].id === "menu") {
      navLink = navLinks[prop];
    }
  }
  resetNavLinks(e.target);

  if (e.target.id === "about") {
    toggleElements(homeElement, menuElement, aboutUsElement);
  } else if (e.target.id === "home") {
    toggleElements(aboutUsElement, menuElement, homeElement);
  } else if (e.target.id === "menu" || headerBtn) {
    // clicked order btn, color menu nav link
    if (headerBtn && navLink) {
      navLink.style.color = "gold";
      navLink.style.backgroundColor = "black";
    }
    toggleElements(homeElement, aboutUsElement, menuElement);
  }
}
// function for hiding and showing page elements
function toggleElements(element1, element2, element3) {
  element1.style.opacity = 0;
  element2.style.opacity = 0;

  element3.style.display = "flex";

  element1.style.display = "none";
  element2.style.display = "none";

  setTimeout(() => {
    element3.style.opacity = 1;
  }, 100);
}

// function for adding events to elements
function eventAdder(element, type = null) {
  if (type === "hover") {
    type = "mouseenter mouseleave".split(" ");
    if (element.className.includes("menu")) {
      element.addEventListener(type[0], (e) => menuItemHover(e));
      element.addEventListener(type[1], (e) => menuItemHover(e));
    } else {
      element.addEventListener(type[0], (e) => navHover(e));
      element.addEventListener(type[1], (e) => navHover(e));
      type = "click";
      element.addEventListener(type, (e) => clickHandler(e));
    }
  } else if (type === "click")
    element.addEventListener(type, (e) => clickHandler(e));
}
// handler function for nav link hover
function navHover(e) {
  const event = e.type;
  const selected = getSelection();

  if (event === "mouseenter" && !selected[e.target.id]) {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "gold";
  } else if (event === "mouseleave" && !selected[e.target.id]) {
    e.target.style.backgroundColor = "";
    e.target.style.color = "";
  }
}
// handler function for menu item hover
function menuItemHover(e) {
  const { menuHighlight } = getMyElements();
  const element = e.target.id;
  const event = e.type;
  const text = "Menu Highlights";

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
    menuHighlight.textContent = text;
  }
}
export { createMyElements, menuItemHover, eventAdder };
