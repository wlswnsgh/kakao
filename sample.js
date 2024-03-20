const boxEl = document.querySelector('.box');
const ClickEl = document.querySelector('.Click');

ClickEl.addEventListener('click', function() {
console.log('boxEl');

if(boxEl.classList.contains('active')){
    boxEl.classList.remove('active');
} else {
    boxEl.classList.add('active');
}
});

