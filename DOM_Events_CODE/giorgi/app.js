const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('you clicked me')
    console.log('YAYYYYYYY')
}

document.querySelector('h1').onclick = function () {
    alert('mazafakaa')
}


const btn3 = document.querySelector('#v3');

btn3.addEventListener('dblclick', function () {
    alert('YESSS')
})