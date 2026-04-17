
const shelter = document.querySelector('#shelterForm');
const inPutin = document.querySelector('#inp');
const btn = document.querySelector('#sub');
const ulLi = document.querySelector('#ula');


shelter.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(inPutin.value);
    const putVal = inPutin.value;
    const newLI = document.createElement('li');
    const apenditis = newLI.innerText = putVal
    ulLi.append(newLI)
    inPutin.value = "";

});