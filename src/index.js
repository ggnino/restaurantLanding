import "./index.scss";
import headingComponent from "./components/heading-component/heading-component";
import navbarComponent from "./components/navbar-component/navbar-component";
import menuComponent from "./components/menu-component/menu-component";
// import menu from "./components/menu-component/menu";
(function myApp() {
  const pageContainer = document.createElement("main");
  pageContainer.setAttribute("id", "content");

  pageContainer.append(headingComponent(), menuComponent());
  document.body.append(navbarComponent(), pageContainer);
})();
