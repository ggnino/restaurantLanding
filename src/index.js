import "./index.scss";
import headingComponent from "./components/heading-component/heading-component";
import navbarComponent from "./components/navbar-component/navbar-component";
import menuComponent from "./components/menu-component/menu-component";
import aboutComponent from "./components/about-component/about-component";
import footerComponent from "./components/footer-component/footer-components";

(function myApp() {
  const pageContainer = document.createElement("main");
  pageContainer.setAttribute("id", "content");

  pageContainer.append(
    headingComponent(),
    menuComponent(),
    aboutComponent(),
    footerComponent()
  );
  document.body.append(navbarComponent(), pageContainer);
})();
