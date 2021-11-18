var eventWhell = document.querySelector("#carousel-inner")

if (eventWhell){
    eventWhell.addEventListener("wheel", event => {
        if(event.deltaY > 0){
            console.log(event.deltaY)
            event.target.scrollBy(800, 0)
        }else{
            console.log(event.deltaY)
            event.target.scrollBy(-800, 0)
        }
    })
}