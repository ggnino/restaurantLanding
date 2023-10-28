import "./navbar-component-styles.scss";
import { createMyElements } from "../utils/utils-functions";
export default function navbar() {
  /*
   *********************** Create component elements ***************************************
   */
  const navbar = document.createElement("nav");
  const navLogoContainer = document.createElement("div");
  const navLogo = document.createElement("h2");
  const navItemsContainer = document.createElement("ul");
  const navItems = createMyElements("nav", 3);

  /*
   *********************** Set component elements attribute ***************************************
   */

  navbar.setAttribute("class", "nav flex flex-col flex-center border-bottom");
  navItemsContainer.setAttribute(
    "class",
    "nav-items flex flex-row flex-center"
  );
  navLogoContainer.setAttribute(
    "class",
    "nav-logo flex flex-center border-radius-sm"
  );

  /*
   *********************** Set component elements content ***************************************
   */

  navLogo.textContent = "Tierra";

  /*
   *********************** Add component elements ***************************************
   */

  navLogoContainer.appendChild(navLogo);
  navItemsContainer.append(...navItems);

  navbar.append(navLogoContainer, navItemsContainer);

  return navbar;
}
