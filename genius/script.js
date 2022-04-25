let ordem = [];
let ordemClicada = [];
let ponto = 0;

//0 -- verde
// 1 -- vermelho
//2 -- amarelo
//3 -- azul

let blue = document.querySelector('.azul');
let green = document.querySelector('.verde');
let yellow = document.querySelector('.amarelo');
let red = document.querySelector('.vermelho');

function embaralhar(){
    let ordemCores = Math.floor(Math.random() * 4);
    ordem[ordem.length] = ordemCores;
    ordemClicada = [];

    for (let i in ordem){
        let cor = colocaCor(ordem[i]);
        acendeCor(cor, Number(i) + 1)
    }


}

//acende as cores
function acendeCor(elemento, time){
    time = time *500
    setTimeout(() => {
        elemento.classList.add('selecionado');
    }, time - 250 )
    
    setTimeout(() => {
        elemento.classList.remove('selecionado')}, time)


}

function comparar(){
    for (let i in ordemClicada){
        if (ordemClicada[i] !== ordem[i]){
            perdeu();
            break
        }
    } if (ordemClicada.length == ordem.length){
        alert(`Parabéns! Você acertou ${score}. Bem vindo ao próximo nível!`);
        proximoNivel();
    }
}


//função para o clique

function clicar(color){
    ordemClicada.push(color);
    colocaCor(color).classList.add('selecionado');
    setTimeout(() => {
        colocaCor(color).classList.remove('selecionado');
        comparar();
    }, 250 );

}

function colocaCor(color){
    if (color == 0){
        return green;
    } else if (color == 1){
        return red;
    } else if (color == 2){
        return yellow;
    } else if (color == 3){
        return blue;
    }
}

function proximoNivel(){
    score += 1;
    embaralhar()
}

function perdeu(){
    alert(`Game Over! Sua pontuação total foi ${score}. Clique em OK para reiniciar!`);
    ordem = [];
    ordemClicada = [];
    iniciar();


}

function iniciar(){
    score = 0;
    alert(`Bem vindo ao Genius. Acerte a ordem das cores para ganhar!`);
    proximoNivel()
    
}

iniciar();