const container = document.querySelector('div');
const img = document.querySelector('img');
container.addEventListener('mouseenter',()=>{
    container.classList.add('hoverContainer');
    img.classList.add('fitImg','hoverImg');
    console.log(1);
});

container.addEventListener('mouseleave',()=>{
    container.classList.remove('hoverContainer');
    img.classList.remove('fitImg','hoverImg');
    console.log(2);
});

container.addEventListener('touchmove',()=>{
    container.classList.add('hoverContainer');
    img.classList.add('fitImg','hoverImg');
    console.log(3);
});

container.addEventListener('touchend',()=>{
    container.classList.remove('hoverContainer');
    img.classList.remove('fitImg','hoverImg');
    console.log(4);
});