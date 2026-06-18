const container = document.querySelector('.produtos-container');

document.querySelector('.next').addEventListener('click', () => {
    container.scrollLeft += 300;
});

document.querySelector('.prev').addEventListener('click', () => {
    container.scrollLeft -= 300;
});