import { eventAdder } from "../../utils/utils-functions";
import "./heading-component-styles.scss";

function headingComponent() {
  /*
   *********************** Create component elements ***************************************
   */
  const headingContainer = document.createElement("div");
  const headerElement = document.createElement("header");
  const headerContentContainer = document.createElement("div");
  const headerContentHeading = document.createElement("h1");
  const headerContentMsg1 = document.createElement("p");
  const headerContentMsg2 = document.createElement("p");
  const headerBtn = document.createElement("a");

  /*
   *********************** Set component elements attribute ***************************************
   */
  headingContainer.setAttribute("id", "home-page");
  headerContentContainer.setAttribute(
    "class",
    "heading-group flex flex-col flex-center "
  );
  headerContentContainer.setAttribute("id", "hgroup");
  headingContainer.setAttribute(
    "class",
    "heading-container flex flex-row flex-center bg-img-center transition-page"
  );
  headerElement.setAttribute(
    "class",
    "heading flex flex-center flex-col border-sides"
  );
  headerElement.setAttribute("id", "home");
  headerBtn.setAttribute("href", "#menu");
  headerBtn.setAttribute("class", "btn border border-radius-md");

  /*
   *********************** Set component elements content ***************************************
   */

  headerContentHeading.textContent = "Tierra";
  headerContentMsg1.textContent = "Welcome to";
  headerContentMsg2.textContent = "The best plant-based restaurant in town.";
  headerBtn.textContent = "Order Now";

  /*
   *********************** Add component elements ***************************************
   */
  eventAdder(headerBtn, "click");
  headerContentContainer.append(
    headerContentMsg1,
    headerContentHeading,
    headerContentMsg2,
    headerBtn
  );
  headerElement.append(headerContentContainer);
  headingContainer.appendChild(headerElement);

  return headingContainer;
}

export default headingComponent;
