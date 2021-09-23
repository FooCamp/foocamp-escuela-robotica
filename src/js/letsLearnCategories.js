export const initLetsLearnCategories = () => {
    const elements = [...document.querySelectorAll(`[data-category]`)]
    const dataCategories = elements.map(element => element.getAttribute("data-category"));
    const container = document.getElementById("sidebar__categories");
    
    const categories = dataCategories.reduce((previousValue, currentValue) => {
        if (previousValue[currentValue]) {
            previousValue[currentValue] += 1
        } else {
            previousValue[currentValue] = 1
        }
        return previousValue;
    }, {})

    const allCategoriesElement = addCategoryItem("TODOS LOS VIDEOS", dataCategories.length);
    container.appendChild(allCategoriesElement);

    Object.keys(categories).forEach((category) => {
        const categoryItem = addCategoryItem(category, categories[category])
        container.appendChild(categoryItem)
    });
}

const addCategoryItem = (category, itemsCount) => {
    const liElement = document.createElement('li');
    liElement.innerText = `${category} (${itemsCount})`
    liElement.setAttribute("category", category)
    liElement.addEventListener("click", setFilterCategory)
    return liElement;
}

const setFilterCategory = (event) => {
    const selectedCategory = event.target.getAttribute("category");
    const elements = [...document.querySelectorAll(`[data-category]`)];
    elements.forEach((cardElement) => {
        const cardCategory = cardElement.getAttribute("data-category")
        if (cardCategory === selectedCategory || selectedCategory === "TODOS LOS VIDEOS") {
            cardElement.style.display = "block";
        } else {
            cardElement.style.display = "none";
        }
    })
}