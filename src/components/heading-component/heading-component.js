import "./heading-component-styles.scss";

function headingComponent() {
  const headingContainer = document.createElement("div");
  const headerElement = document.createElement("header");
  const headerContentContainer = document.createElement("div");
  const headerContentHeading = document.createElement("h1");
  const headerContentMsg1 = document.createElement("p");
  const headerContentMsg2 = document.createElement("p");
  const headerBtn = document.createElement("a");

  headerContentHeading.textContent = "Tierra";
  headerContentMsg1.textContent = "Welcome to";
  headerContentMsg2.textContent = "The best plant-based restaurant in town.";
  headerBtn.textContent = "Order Now";

  headerContentContainer.setAttribute(
    "class",
    "heading-group flex flex-col flex-center"
  );
  headerContentContainer.setAttribute("id", "hgroup");
  headingContainer.setAttribute(
    "class",
    "heading-container flex flex-row flex-center bg-img-center"
  );
  headerElement.setAttribute(
    "class",
    "heading flex flex-center flex-col border-sides"
  );
  headerElement.setAttribute("id", "home");
  headerBtn.setAttribute("href", "#menu");
  headerBtn.setAttribute("class", "btn border-radius-md");

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
