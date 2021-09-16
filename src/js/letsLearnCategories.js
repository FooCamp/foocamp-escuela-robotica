export const initLetsLearnCategories = (selector) => {
    const elements = [...document.querySelectorAll(`[data-category]`)]
    const dataCategories = elements.map(element => element.getAttribute("data-category"));
    const categories = dataCategories.reduce((previousValue, currentValue) => {
        if (previousValue[currentValue]) {
            previousValue[currentValue] += 1
        } else {
            previousValue[currentValue] = 1
        }
        return previousValue;
    }, {})

    Object.keys(categories).forEach((category) => {
        console.log('key', category);
        console.log('value', categories[category]);
    });

    //const container = document.getElementById("categories");

    //const ul = document.createElement('ul');
}
