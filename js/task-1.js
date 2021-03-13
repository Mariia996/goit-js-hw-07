const categories = document.querySelectorAll('.item');


console.log(`В списке ${categories.length} категории`);

for (const item of categories) {
    const titlesEl = item.querySelector('h2').textContent;
    const elemCount = item.querySelectorAll('li').length;
    console.log(`Категория: ${titlesEl}`);
    console.log(`Количество элементов ${elemCount}`);
}