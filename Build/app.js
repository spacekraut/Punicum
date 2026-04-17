// const text = prompt('Enter your text here')



// let rando = Math.floor(Math.random() * text.length)

// let rando2 = Math.floor(Math.random() * text.length) + 1

// while (rando < rando2) {

//     alert(`Your random numbers are ${rando}, ${rando2} and your text is ${text}`)
//     let sliced = text.slice(`${rando}`, `${rando2}`)

// alert(`Your sliced is ${sliced}`)
// };



// // let sliced = text.slice(`${rando}`, `${rando2}`)

// // alert(`Your sliced is ${sliced}`)




const text = prompt('Enter your text here');

let rando = Math.floor(Math.random() * text.length);
let rando2 = Math.floor(Math.random() * text.length) + 1;

// Keep trying until numbers are valid (rando <= rando2)
while (rando > rando2) {
    rando = Math.floor(Math.random() * text.length);
    rando2 = Math.floor(Math.random() * text.length) + 1;
}

alert(`Your random numbers are ${rando}, ${rando2} and your text is: ${text}`);

const sliced = text.slice(rando, rando2);
alert(`Your sliced text is: ${sliced}`);
