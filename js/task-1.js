const categories = document.querySelectorAll("ul#categories>li.item");
    console.log(`Number of categories: ${categories.length}`)
categories.forEach(element => {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll("ul>li").length}`);
});