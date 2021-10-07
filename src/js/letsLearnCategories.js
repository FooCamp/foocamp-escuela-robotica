export const initLetsLearnCategories = () => {
    const elements = [...document.querySelectorAll(`[data-category]`)]
    const dataCategories = elements.map(element => element.getAttribute("data-category"));
    const containerSidebar = document.getElementById("sidebar__categories");
    const containerDropdown = document.getElementById("sidebar__dropdown");
    
    const categories = dataCategories.reduce((previousValue, currentValue) => {
        if (previousValue[currentValue]) {
            previousValue[currentValue] += 1
        } else {
            previousValue[currentValue] = 1
        }
        return previousValue;
    }, {})

    const allCategoriesOption = addCategoryItem("TODOS LOS VIDEOS", dataCategories.length, "option");
    const allCategoriesLi = addCategoryItem("TODOS LOS VIDEOS", dataCategories.length, "li");
    allCategoriesLi.addEventListener("click", selectedSidebarItem);

    containerSidebar.appendChild(allCategoriesLi);
    containerDropdown.appendChild(allCategoriesOption);

    Object.keys(categories).forEach((category) => {
        const optionItem = addCategoryItem(category, categories[category], "option")
        const sidebarItem = addCategoryItem(category, categories[category], "li")
        sidebarItem.addEventListener("click", selectedSidebarItem)

        containerSidebar.appendChild(sidebarItem)
        containerDropdown.appendChild(optionItem)
    });

    containerDropdown.addEventListener("change", selectedDropdownItem);
}

const addCategoryItem = (category, itemsCount, element) => {
    const categoryItem = document.createElement(element);
    categoryItem.innerText = `${category} (${itemsCount})`
    categoryItem.setAttribute("value", category)
    return categoryItem;
}

const selectedSidebarItem = (event) => {
    const selectedCategory = event.target.getAttribute("value");
    updateCards(selectedCategory);
}

const selectedDropdownItem = (event) => {
    const selectedCategory = event.target.value;
    updateCards(selectedCategory);
};

const updateCards = (selectedCategory) => {
    const elements = [...document.querySelectorAll(`[data-category]`)];
    elements.forEach((cardElement) => {
        const cardCategory = cardElement.getAttribute("data-category")
        if (cardCategory === selectedCategory || selectedCategory === "TODOS LOS VIDEOS") {
            cardElement.classList.remove("lets-learn__card--hidden")
            cardElement.classList.add("lets-learn__card--visible")
        } else {
            cardElement.classList.remove("lets-learn__card--visible")
            cardElement.classList.add("lets-learn__card--hidden")
        }
    })
};
