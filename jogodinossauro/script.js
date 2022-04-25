const dino = document.getElementById('dino');
taPulando = false;
const fundo  = document.querySelector('.background');
let posição = 0;



function teclaUp(event){
    if (event.keyCode === 32){
        if (!taPulando){
            pular()
        }
        
    }
}

function pular(){
    taPulando = true;
    let upInterval = setInterval ( () => {
        if (posição >= 150){
            //parou
            clearInterval(upInterval);
            //descendo
            let downInterval = setInterval( () => {
                if (posição <= 0) {
                    clearInterval(downInterval);
                    taPulando = false;
                } else{
                posição -= 20;
                dino.style.bottom = posição + 'px';
                }
            }, 20)

        }else{
        //subindo
        posição +=20;
        dino.style.bottom = posição + 'px';
        }
    }, 20)

}

function criaCactus(){
    const cactus = document.createElement('div');
    let posicaoCactu = 2200;
    let aleatorio = getRandomArbitrary(500, 6000);

    cactus.classList.add('cactus');
    cactus.style.left = 2200 + 'px';
    fundo.appendChild(cactus);
    let leftinterval = setInterval( () => {
        if (posicaoCactu < -60){
            clearInterval(leftinterval);
            fundo.removeChild(cactus);
        } else if (posicaoCactu > 0 && posicaoCactu < 60 && posição < 60) {
            clearInterval(leftinterval);
            fundo.removeChild(cactus);
            alert('Game Over!');
        } else {
            posicaoCactu -= 10;
        cactus.style.left = posicaoCactu + 'px';

        }
    
    }, 30)

    setTimeout(criaCactus, aleatorio)
}

criaCactus();
document.addEventListener('keydown', teclaUp);


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }