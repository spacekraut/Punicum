const but1 = document.querySelector('#p1');
const but2 = document.querySelector('#p2');
const resetBut = document.querySelector('#reset');
const h21 = document.querySelector('#h21');
const h22 = document.querySelector('#h22');
const h21inner = h21.innerText
const scoreSelect = document.querySelector('#scoreLimit');

scoreSelect.addEventListener('change', () => {
    const selectedNumber = scoreSelect.value;
    console.log("Selected score limit:", selectedNumber);
  });







but1.addEventListener('click', function(e){
    

    h21.innerText++;

});




but2.addEventListener('click', function(e){
    h22.innerText++;


});



