var eventWhell = document.querySelector("#carousel-item")

console.log("OK")
if (eventWhell){
    console.log("OK")
    eventWhell.addEventListener("wheel", event => {
        if(event.deltaY > 0){
            event.target.scrollBy(300, 0)
        }else{
            event.target.scrollBy(-300, 0)
        }
    })
}