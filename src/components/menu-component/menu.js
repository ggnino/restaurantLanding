import "./menu-styles.scss";
function menu() {
  const container = document.createElement("div");
  const heading = document.createElement("h1");
  const heading2 = document.createElement("h2");
  heading.setAttribute("class", "cool2");
  heading.textContent = "CARAJO!!!!!!!!!!!!";
  heading2.textContent = "lol!!!!!!!!!!!";
  container.append(heading, heading2);
  container.setAttribute("class", "menu");
  return container;
}

export default menu;
