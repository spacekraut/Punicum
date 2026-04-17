

// const delayed = (newColor,delay,doNext) =>{
//     setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
// }, delay)};


// delayed ('green',1000,()=>{
//     delayed('blue', 1000,)
// })

// const fakeRequestCallback = (url,success,failure) => {
//     const delay = Math.floor(Math.random()*4500)+500;
//     setTimeout(() => {
//        if(delay> 4000){
//         failure('Connection Timeout:(')
//        } else {
//         success (`Here is your fake data from ${url}`)
//        }
//     }, delay);
// }

// fakeRequestCallback ('books.com', function(){
//     console.log('IT WORKED !!!')
// }, function (){
//     console.log('ERROR ! ! !')
// })





const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay);
    });
};

const changeColors = async ()=>{
    await delayedColorChange('orange',1000)
    await delayedColorChange('purple',1000)
    await delayedColorChange('yellow',1000)
    await delayedColorChange('green',1000)

}
changeColors ()

