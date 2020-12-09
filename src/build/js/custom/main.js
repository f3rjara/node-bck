let navbar = document.querySelectorAll(".navbar-nav .nav-item")        
navbar.forEach((elemento) => {
    const item = elemento.querySelector("a")            
    if ( window.location.pathname == item.dataset.location){
        elemento.classList.add('active')
    }
    else{
        elemento.classList.remove('active')
    }
})



