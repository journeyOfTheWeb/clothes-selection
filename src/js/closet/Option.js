const clothesSelector = document.querySelector('clothes-selector--large');
const addButtonEl = clothesSelector.querySelector('.add__button');
const removeButtonEl = clothesSelector.querySelector('.remove__button');
const addContainerEl = clothesSelector.querySelector('.add__container');
const removeContainerEl = clothesSelector.querySelector('.remove__container');

addButtonEl.addEventListener('click',()=>{
    if(removeContainerEl.classList.contains('reveal')){removeContainerEl.classList.toggle('reveal')}
    addContainerEl.classList.toggle('reveal');
})

removeButtonEl.addEventListener('click',()=>{
    if(addContainerEl.classList.contains('reveal')){addContainerEl.classList.toggle('reveal')}
    removeContainerEl.classList.toggle('reveal');
})