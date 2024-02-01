let key = document.querySelectorAll(".key");

//click

key.forEach((key) =>{
    key.addEventListener("click",()=>{
        key.classList.add("click-btn");
    })
})


key.forEach((key) =>{
    key.addEventListener("click",()=>{
        let e = key.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key = ${e}]`);
        if(!audio) return; //stop function from running altogether
        audio.currentTime = 0; //this restars audio from top even if it's not finished
        audio.play();
    })

})

//keypress

window.addEventListener("keypress", (e)=>{
    let k = e.key;
    let lowerC = k.toLowerCase();  //to convert presses key to lowerCase in case capslock is on
    const keyname = document.querySelector(`[data-key = ${lowerC}]`);

    key.forEach((key)=>{
        keyname.classList.add("click-btn");
    });
});

window.addEventListener("keypress", (e)=>{
    let k = e.key;
    let lowerC = k.toLowerCase();
    const audio = document.querySelector(`audio[data-key = ${lowerC}]`);
    if(!audio) return; //stop function from running altogether
    audio.currentTime = 0; //this restars audio from top even if it's not finished
    audio.play();

});

//to end transition after a certain time

key.forEach((key) =>
    key.addEventListener("transitionend",removeTransition)
);

function removeTransition(e){
    if(e.propertyName !== "transform") return; //skip it if it's not transform
    this.classList.remove("click-btn");
}