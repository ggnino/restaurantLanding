import { createMyElements } from "../../utils/utils-functions";
import "./about-component-styles.scss";

function aboutComponent() {
  /*
   *********************** Create component elements ***************************************
   */
  const aboutSectionElement = document.createElement("section");
  const aboutUsContainer = document.createElement("div");
  const aboutUsTitle = document.createElement("h2");
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
    "about-us flex flex-row bg-img-center"
  );
  aboutSectionElement.setAttribute("id", "about-us");
  aboutUsContainer.setAttribute(
    "class",
    "about-us-container flex flex-row flex-center border-sides"
  );
  aboutUsTitle.setAttribute("class", "title border border-radius-md");
  aboutUsContentContainer.setAttribute(
    "class",
    "about-us-container flex flex-col flex-center bg-img-center border"
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

  aboutUsTitle.textContent = "About Us";
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
  aboutUsContainer.append(
    aboutUsTitle,
    ...aboutUsContent,
    aboutUsContentContainer
  );
  aboutSectionElement.append(aboutUsContainer);
  return aboutSectionElement;
}

export default aboutComponent;
/* 
    ****************************Component Blueprint *****************************
    <section class="about-us flex-row relative" id="about-us">
				<div
					class="about-us-container flex-row border border-radius"
					id="first"
				>
					<h3 class="title absolute border border-radius">About Us</h3>
					<div
						class="about-us-container background-img-center border-topAndBottom"
						id="st1"
					>
						<p class="description relative border-radius">
							We here at Tierra, are very concerned with our planet
							<strong>mother earth</strong>. One of the biggest threats to
							mother earth is <strong> climate change</strong> and one of the
							factors affecting that climate change, is
							<strong>factory farming</strong>. We must change our eating habits
							so we can ease the damage caused by intensive animal farming. We
							have dedicated our lives to help our society transition from
							consuming animal products to plant-based products.
						</p>
					</div>
					<div
						class="about-us-container background-img-center border-topAndBottom"
						id="st"
					>
						<p class="description relative border-radius">
							We know when people think of eating plant-based or vegan, two
							things usually come to mind, <i>boring and taste like dirt</i>.
							But we here at Tierra, made sure that none of our food is boring.
							We went above and beyond to make sure when we serve our food on
							the table, that all the rich and lovely flavor is there and not in
							the <i>dirt</i>. When our customers leave here, they will leave
							here not just satisfied; but even more knowledgeable than before.
							They know now, that the animal products that they use to love
							wasn't all that tasteful. What was tasteful was the way the food
							was prepared. Now, a plant-based lifestyle seems doable and even
							maintainable; for any individual that comes through these doors.
						</p>
					</div>

					<div
						class="about-us-container flex-col flex-center background-img-center border-topAndBottom"
						id="st2"
					>
						<h4 class="border border-radius">
							Opening hours Mon-Sat: 8AM - 10:30PM
							<address>
								Address: 123 Placeholder St, City, State 11212, USA.
							</address>
						</h4>

						<h4 class="border border-radius">
							If you have any thoughts, questions or concerns please reach out
							to us thru our form or give us a <a href="tel:180045454">call</a>.
						</h4>
						<form
							class="about-us-form border border-radius"
							method="post"
							action="https://www.freecodecamp.com/email-submit"
						>
							<fieldset>
								<label for="name">Name:</label>
								<input type="text" id="name" name="name" required />
							</fieldset>
							<fieldset>
								<label for="email">Email:</label>
								<input type="email" id="email" name="email" required />
							</fieldset>
							<fieldset>
								<label for="comments">Comments:</label>
								<textarea
									rows="5"
									cols="25"
									id="comments"
									name="comments"
									placeholder="Enter your comments here..."
								></textarea>
							</fieldset>
							<button class="btn border border-radius" type="submit">
								Send
							</button>
						</form>
					</div>
				</div>
			</section>  
    */
