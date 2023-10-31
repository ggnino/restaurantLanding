import { createMyElements } from "../../utils/utils-functions";
import "./about-component-styles.scss";

function aboutComponent() {
  /*
   *********************** Create component elements ***************************************
   */
  const aboutSectionElement = document.createElement("section");
  const aboutUsContainer = document.createElement("div");
  const aboutUsContentContainer = document.createElement("div");
  const aboutUsContent = createMyElements("about-us", 2);
  const aboutUsFormTitle1 = document.createElement("h3");
  const aboutUsFormTitle2 = document.createElement("h3");
  const aboutUsFormAddress = document.createElement("address");
  const aboutUsFormElement = document.createElement("form");
  const aboutUsFormFieldSets = createMyElements("form", 3);
  const formBtn = document.createElement("button");

  /*
   *********************** Set component elements attribute ***************************************
   */
  aboutSectionElement.setAttribute(
    "class",
    "about-us flex flex-row bg-img-center transition-page"
  );
  aboutSectionElement.setAttribute("id", "about-us");
  aboutUsContainer.setAttribute(
    "class",
    "about-us-container flex flex-row flex-center border-sides"
  );

  aboutUsContentContainer.setAttribute(
    "class",
    "about-us-container flex flex-col flex-center bg-img-center border border-bottom-radius"
  );
  aboutUsFormTitle1.setAttribute("class", "border border-radius-md");
  aboutUsFormTitle2.setAttribute("class", "border border-radius-md");
  aboutUsFormElement.setAttribute(
    "class",
    "about-us-form border border-radius-md"
  );
  formBtn.setAttribute("class", "btn border border-radius-md");
  formBtn.setAttribute("type", "submit");

  /*
   *********************** Set component elements content ***************************************
   */

  aboutUsFormTitle1.textContent = "Opening hours Mon-Sat: 8AM - 10:30PM";
  aboutUsFormAddress.textContent =
    "Address: 123 Placeholder St, City, State 11212, USA.";
  aboutUsFormTitle2.textContent =
    "If you have any thoughts, questions or concerns please reach out to us thru our form or give us a call";
  formBtn.textContent = "Send";

  /*
   *********************** Add component elements ***************************************
   */
  aboutUsFormTitle1.appendChild(aboutUsFormAddress);
  aboutUsFormElement.append(...aboutUsFormFieldSets, formBtn);
  aboutUsContentContainer.append(
    aboutUsFormTitle1,
    aboutUsFormTitle2,
    aboutUsFormElement
  );
  aboutUsContainer.append(...aboutUsContent, aboutUsContentContainer);
  aboutSectionElement.append(aboutUsContainer);
  return aboutSectionElement;
}

export default aboutComponent;
