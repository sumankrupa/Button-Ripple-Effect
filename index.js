const btnElement = document.querySelector(".btn")


btnElement.addEventListener("mouseover",(event)=>{
    
    const y = event.pageY-btnElement.offsetTop;
    const x = event.pageX-btnElement.offsetLeft;
    btnElement.style.setProperty("--xPos", x + "px")
    btnElement.style.setProperty("--yPos", y + "px")
})