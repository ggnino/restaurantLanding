import "./menu-styles.scss";
function menu() {
  /*
   *********************** Create component elements ***************************************
   */
  const menuSectionElement = document.createElement("section");
  const menuItemsContainer = document.createElement("div");
  const menuTitleElement = document.createElement("h2");
  const menuItemContainer = document.createElement("div");
  const menuHighlightsContainer = document.createElement("h2");
  const menuHighlight = document.createElement("h3");
  const menuItem = document.createElement("div");
  const menuItemImg = document.createElement("img");
  const menuItemDesc = document.createElement("p");

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
    "menu-items flex flex-col flex-center border border-radius-md"
  );

  /*
   *********************** Set component elements content ***************************************
   */

  /*
   *********************** Add component elements ***************************************
   */
  return menuSectionElement;
}

export default menu;
/*

******************** Component Blueprint *********************************

<section
				class="menu flex-col flex-center background-img-center border-topAndBottom"
				id="menu"
				tabindex="0"
			>
				<div
					class="menu-items relative flex-col flex-center border border-radius"
				>
					<h2 class="title absolute border border-radius">
						A taste of what we are cooking
					</h2>
					<div class="menu-items-container">
						<div
							class="menu-highlights flex-col flex-center border border-radius"
						>
							<h3 id="menu-highlight">Menu Highlights</h3>
						</div>
						<div class="menu-item border border-radius" id="burger">
							<img
								class="menu-img border-radius"
								src="./imgs/vegan-burger.jpg"
								alt="A vegan burger topped on a brioche bun with a side of potatoes chips and a soft drink of cola."
							/>
							<p class="description absolute border-radius">
								Our vegan burger will leave you stunned by the flavor. Our
								homemade burger patties are not like any other bland patty, ours
								come packed with <strong>protein</strong>, plenty of herbs and
								spices. Dressing up it with our homemade cheddar cheese and
								topped with your choice of lettuce or kale, onions and tomato.
								With our french fries included, your going to be shocked at how
								good a plant based burger can really be.
							</p>
						</div>
					</div>
					<div class="menu-items-container" id="menuContainer2">
						<div class="menu-item border border-radius" id="bistec">
							<img
								class="menu-img border-radius"
								src="./imgs/vegan-steak-and-potatoes.jpg"
								alt="A plate of a grilled vegan steak with potatoes and some collard greens."
							/>
							<p class="description absolute border-radius">
								Yes, that is right, we have steak and of course its plant-based.
								Our homemade steak is based off of <strong>gluten</strong>.
								Seasoned to perfection, you'll love those hints of oregano and
								salt buzzing those taste buds. Served with your choice of two
								sides and a drink, you will be wondering
								<i>why haven't I changed to plant-based diet, yet?</i>
							</p>
						</div>
						<div class="menu-item border border-radius" id="pollo">
							<img
								class="menu-img border-radius"
								src="./imgs/chik'n-and-fries.png"
								alt="A beautiful plate of french fries and fried vegan chicken with side of ketchup and veggies."
							/>
							<p class="description absolute border-radius">
								A plant-based spin on a lovely classic, that we all enjoy. Our
								fried chik'n is more that just finger licking good, it just
								defies everything that you might know about food, especially
								plant-based food. Fried to a cripsy perfection with those lovely
								fries, you will be wondering
								<i> how good will this taste on a sandwich? </i>
							</p>
						</div>
					</div>
				</div>
				<button class="btn border border-radius" title="#notWorkingFullMenuBtn">
					Full Menu
				</button>
			</section>
*****************************************************************************************************************************
*/
