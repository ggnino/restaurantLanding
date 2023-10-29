import { createMyElements } from "../../utils/utils-functions";
import "./menu-component-styles.scss";
function menuComponent() {
  /*
   *********************** Create component elements ***************************************
   */
  const menuSectionElement = document.createElement("section");
  const menuItemsContainer = document.createElement("div");
  const menuTitleElement = document.createElement("h2");
  const menuItemsRow1Container = document.createElement("div");
  const menuItemsRow2Container = document.createElement("div");
  const menuHighlightsContainer = document.createElement("h2");
  const menuHighlights = createMyElements("menu-highlights", 3);
  const menuHighlight = document.createElement("h3");
  const menuBtn = document.createElement("button");

  /*
   *********************** Set component elements attribute ***************************************
   */
  menuSectionElement.setAttribute("id", "menu");
  menuSectionElement.setAttribute(
    "class",
    "menu flex flex-col flex-center bg-img-center border-topAndBottom"
  );
  menuSectionElement.setAttribute("tabindex", 0);
  menuItemsContainer.setAttribute(
    "class",
    "menu-items flex flex-col flex-center border-sides"
  );
  menuTitleElement.setAttribute("class", "title border border-radius-md");
  menuItemsRow1Container.setAttribute("class", "flex menu-items-row");
  menuItemsRow2Container.setAttribute(
    "class",
    "flex menu-items-row menu-items-row-2"
  );
  menuHighlightsContainer.setAttribute("id", "menu-highlight");
  menuHighlightsContainer.setAttribute(
    "class",
    "menu-highlights flex flex-col flex-center border border-radius-sm "
  );
  menuHighlight.setAttribute("class", "menu-highlights-highlight");
  menuBtn.setAttribute("class", "btn border border-radius-md");

  /*
   *********************** Set component elements content ***************************************
   */

  menuTitleElement.textContent = "A taste of what we are cooking";
  menuHighlight.textContent = "Menu Highlights";
  menuBtn.textContent = "Full Menu";

  /*
   *********************** Add component elements ***************************************
   */

  menuHighlightsContainer.appendChild(menuHighlight);
  menuItemsRow1Container.append(menuHighlightsContainer, menuHighlights[0]);
  menuItemsRow2Container.append(menuHighlights[1], menuHighlights[2]);
  menuItemsContainer.append(
    menuTitleElement,
    menuItemsRow1Container,
    menuItemsRow2Container,
    menuBtn
  );
  menuSectionElement.append(menuItemsContainer);
  return menuSectionElement;
}

export default menuComponent;
