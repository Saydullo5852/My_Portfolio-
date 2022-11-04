

const skils = document.getElementsByClassName("items--container")[0];


 document.getElementById("right__icon").addEventListener("click", ()  => {
function scrollRight ()  {
    skils.scrollLeft += 200;
}

scrollRight()
 })

 document.getElementById("left__icon").addEventListener("click", () => {
    function scrollLeft () {
        skils.scrollLeft -= 200;
    }
    scrollLeft()
 })

