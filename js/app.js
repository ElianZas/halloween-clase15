const bars = document.getElementById("bars");
const nav = document.getElementById("nav");



function mostrarNav(){
    nav.classList.toggle("mostrar-nav")
   
}


const init =()=>{
    bars.addEventListener("click", mostrarNav);
};

init();