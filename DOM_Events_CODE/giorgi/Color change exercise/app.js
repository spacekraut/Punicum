const h1 = document.querySelector('h1')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){
   const newColor = randCol ()
    
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor

})

const randCol = function (){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
   return `rgb(${r},${g},${b})`;
}