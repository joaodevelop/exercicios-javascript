const heroi = $("#hero");
const espaço = $("#jogo");
const game = document.getElementById("jogo");
const botao = $("#start");
const instruçoes = $("#txtinst")
let tiro = $("#disparo")
const monstros = ["../JogodaNave/img/monster-1.png", "../JogodaNave/img/monster-2.png", "../JogodaNave/img/monster-3.png"];
let vel = 5000;
let pontos = 0;
const monstro = $('monstro');
// funçao que da inicio ao jogo e todo o procesos
function começar(){
    botao.remove();
    instruçoes.remove();
    alienInterval = setInterval(() => {
        criaMonstro();
    }, 3000);
    espaço.append("<div id='placar'></div>")







    // função que verifica as teclas do jogo
    function teclar(event){
        if (event.keyCode === 87){
            up();
        } else if (event.keyCode === 83){
            down();
        } else if (event.keyCode === 32){
            atirar();
        } else if( event.keyCode === 68){
            direita();
        }
    }

    function up(){
        let topo = parseInt($("#hero").css("top"));
        heroi.css('top', topo - 10);
        if (heroi.css('top') == "100px"){
            heroi.css("top", topo + 10);
        }

    }
    function down(){
        let topo = parseInt($("#hero").css("top"));
        heroi.css("top", topo + 10);
        if (heroi.css('top') == "870px"){
            heroi.css("top", topo - 10);
        }

    }

    function direita(){
        let caminha = parseInt($("#hero").css("left"));
        heroi.css("left", caminha + 10);
        console.log(caminha)

    }

    /*function atirar(){
        if (podeAtirar === true){
            podeAtirar = false;
            let posicaoY = parseInt($("#hero").css("top"))
            let posicaoX= parseInt($("#hero").css("left"))
            $("#jogo").append("<img src='../JogodaNave/img/shoot.png' id= 'disparo'>");
            let laser = $('#disparo')
            $('#disparo').css('top', posicaoY - 50);
            $('#disparo').css('left', posicaoX + 28);
            let tempoDisparo = setInterval(() => {
                let posicaoT= parseInt($("#disparo").css("left"));
                $('#disparo').css('left', posicaoT + 15);
                if (posicaoT > 1540){
                    clearInterval(tempoDisparo);
                    tempoDisparo = null;
                    $('#disparo').remove();
                    podeAtirar = true;
                } 
            }, 30)

        }
    }*/

    function atirar() {

            let laser = createLaserElement();
            $('#jogo').append(laser);
            moveLaser(laser);
        
    }

    function createLaserElement() {

            let xPosition = parseInt(heroi.css('left'));
            let yPosition = parseInt(heroi.css('top'));
            let newLaser = document.createElement('img');
            newLaser.src = '../JogodaNave/img/shoot.png';
            newLaser.classList.add('laser');
            newLaser.id = 'disparo';
            newLaser.style.left = `${xPosition + 28}px`;
            newLaser.style.top = `${yPosition - 30}px`;
            return newLaser;


    }

    function moveLaser(laser) {
        let laserInterval = setInterval(() => {
            let xPosition = parseInt(laser.style.left);
            let aliens = document.querySelectorAll('.alien');
    
            aliens.forEach((alien) => { //comparando se cada alien foi atingido, se sim, troca o src da imagem
                if(checkLaserCollision(laser, alien)) {
                    pontos++;
                    laser.remove();
                    alien.src = 'img/explosion.png';
                    let tempoExplosao = setInterval( () => {
                        alien.classList.remove('alien');
                        alien.classList.add('dead-alien');
                        clearInterval(tempoExplosao)


                    }, 30)
                    laserInterval = null;
                    clearInterval(laserInterval);

                }
            })
    
            if(xPosition > 1540) {
                laserInterval = null;
                clearInterval(laserInterval);
                laser.remove();
                
            } else {
                laser.style.left = `${xPosition + 8}px`
            }
        }, 10);
    }

   

    function criaMonstro(){

            let newAlien = document.createElement('img');
            let alienSprite = monstros[Math.floor(Math.random() * monstros.length)]; //sorteio de imagens
            newAlien.src = alienSprite;
            newAlien.id = 'monstro'
            newAlien.classList.add('alien');
            newAlien.classList.add('alien-transition');
            newAlien.style.left = '1540px';
            newAlien.style.top = `${randomInteger(100, 840)}px`;
            game.appendChild(newAlien);
            moveAlien(newAlien);


    }

    function moveAlien(alien) {
        let moveAlienInterval = setInterval(() => {
            let xPosition = parseInt(window.getComputedStyle(alien).getPropertyValue('left'));
            if(xPosition >= 800) {
                alien.style.left = `${xPosition - 4}px`;
            } else if (Array.from(alien.classList).includes('dead-alien')){
                alien.remove()
            } else {
                gameOver()
            }
        }, 30);
    }

    function checkLaserCollision(laser, alien) {
        let laserTop = parseInt(laser.style.top);
        let laserLeft = parseInt(laser.style.left);
        let alienTop = parseInt(alien.style.top);
        let alienLeft = parseInt(alien.style.left);
        let alienBottom = alienTop - 53;
        if(laserLeft != 1540 && laserLeft + 40 >= alienLeft) {
            if(laserTop <= alienTop && laserTop >= alienBottom) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    



    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }




    document.addEventListener('keydown', teclar)

    let score = document.getElementById('placar');
    
    function gameOver() {
        document.removeEventListener('keydown', teclar);
        clearInterval(alienInterval);
        let aliens = document.querySelectorAll('.alien');
        aliens.forEach((alien) => alien.remove());
        let lasers = document.querySelectorAll('.laser');
        lasers.forEach((laser) => laser.remove());
        heroi.css('top', 800);
        $("#jogo").append("<div id='fim'></div>");
        $("#fim").html("<h1> Game Over </h1>" + "<div> <input type='button' value='Atualize para Reiniciar!' onclick='reiniciaJogo()'>");

    }



} // fim do start

function reiniciaJogo(){
    começar()
}


