const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")

function trocaImg() {
    if(img1.style.opacity == 0){
        img1.style.opacity = 1        
    }
    else{
    img1.style.opacity = 0
    }
}


setInterval(() => {
    trocaImg()
}, 3000);

