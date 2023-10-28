import "./navbar-component-styles.scss";

export default function navbar() {
  const navbar = document.createElement("nav");
  const navLogoContainer = document.createElement("div");
  const navLogo = document.createElement("h2");
  const navItemsContainer = document.createElement("ul");
  const navItems = [];
  for (let x = 0; x < 3; x++) {
    const liElement = document.createElement("li");
    const navLink = document.createElement("a");
    liElement.setAttribute("class", "nav-items-item border-radius-sm");
    if (x === 0) {
      navLink.textContent = "Home";
      navLink.setAttribute("href", "#home");
      navLink.setAttribute("class", "nav-items-item-link");
    } else if (x === 1) {
      navLink.textContent = "Menu";
      navLink.setAttribute("href", "#menu");
      navLink.setAttribute("class", "nav-items-item-link");
    } else {
      navLink.textContent = "About";
      navLink.setAttribute("href", "#about-us");
      navLink.setAttribute("class", "nav-items-item-link ");
    }

    liElement.appendChild(navLink);

    navItems.push(liElement);
  }
  navbar.setAttribute("class", "nav flex flex-col flex-center border-bottom");
  navItemsContainer.setAttribute(
    "class",
    "nav-items flex flex-row flex-center"
  );
  navLogo.textContent = "Tierra";
  navLogoContainer.setAttribute(
    "class",
    "nav-logo flex flex-center border-radius-sm"
  );
  navLogoContainer.appendChild(navLogo);
  navItemsContainer.append(...navItems);

  navbar.append(navLogoContainer, navItemsContainer);

  return navbar;
}
