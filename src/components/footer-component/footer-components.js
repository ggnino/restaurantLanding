import "./footer-component-styles.scss";

function footerComponent() {
  const footerElement = document.createElement("footer");
  const footerContentElement = document.createElement("p");

  footerContentElement.setAttribute("class", "border border-radius-md");
  footerContentElement.textContent =
    "© 2023 Built By Guillermo Gonzalez. All rights reserved.";
  footerElement.appendChild(footerContentElement);

  return footerElement;
}

export default footerComponent;
