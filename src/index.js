const goku = document.querySelector('.goku')
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.cloud')
const cloud2 = document.querySelector('.cloud2')
const cloud3 = document.querySelector('.cloud3')
const gamerOver = document.querySelector('.gamerOver')
const btnJugar = document.querySelector('.btn-jugar')

const jump = () => {
    goku.classList.toggle("jump")
    setTimeout(()=>{
        goku.classList.toggle("jump")
    },500)
}

const volverJugar = () =>{
    window.location.reload()
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft
    const gokuPosition = +window.getComputedStyle(goku).bottom.replace('px','')

    // console.log(gokuPosition)

    if(pipePosition <= 123 && pipePosition > 0 && gokuPosition < 75){
        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition}px`

        goku.style.animation = "none" 
        goku.style.bottom = `${gokuPosition}px` 

        goku.src = '../assets/goku-cayendose.png'
        goku.style.width = '170px'
        goku.style.marginLeft = '10px'
        
        cloud.style.animation = "none" 
        cloud2.style.animation = "none"
        cloud3.style.animation = "none"

        gamerOver.classList.toggle("opa")
        btnJugar.classList.toggle("opa")

        clearInterval(loop)
    } 
},10)

document.addEventListener("keydown",jump)
btnJugar.addEventListener('click',volverJugar)