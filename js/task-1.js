const categories = document.querySelectorAll("li.item");
console.log("Number of categories:", categories.length);
categories.forEach((category) => {
    const title = category.querySelector(".title-list").textContent;
    const elements = category.querySelectorAll("ul > li");
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements.length}`);
});


