let menu = document.getElementById("hamburger")
let img = '<img src="./assets/images/icon-close.svg" alt="">'
let nav = document.getElementById('nav')

function hidediv(){
    if(window.matchMedia('(max-width: 767px)').matches){
        nav.style.display = 'none'
        menu.addEventListener('click', () => {
            if(menu.innerHTML == img){
                menu.innerHTML='<img src="./assets/images/icon-hamburger.svg" alt="">'
                nav.style.display = 'none'
            }else{
                menu.innerHTML= img
                nav.style.display = 'block'
            }
        })
    }else{
        nav.style.display = 'block'
    }
}

hidediv()

window.addEventListener('resize', hidediv)