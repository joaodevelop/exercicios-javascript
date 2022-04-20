let jog = null;
let jogadorSele = document.getElementById('jogador');
let quadrado1 = document.getElementById('qd1');
let quadrado2 = document.getElementById('qd2');
let quadrado3 = document.getElementById('qd3');
let quadrado4 = document.getElementById('qd4');
let quadrado5 = document.getElementById('qd5');
let quadrado6 = document.getElementById('qd6');
let quadrado7 = document.getElementById('qd7');
let quadrado8 = document.getElementById('qd8');
let quadrado9 = document.getElementById('qd9');
let winner = null;

mudaJogador('X')

function jogar(id){
    if (winner !== null){
        return;
    }
    let quadrado = document.getElementById(id);
    if (checarQuadrado(quadrado)){
        quadrado.innerText = jog
        if (checaVencedor()){
            mudaVencedor()
        }
        if (jog == 'X'){
                jog = 'O'
                mudaJogador(jog)
        } else if (jog == 'O') {
            jog = 'X'
            mudaJogador(jog)        
            }
        }    
}


function checarQuadrado(quadrado){
    if (quadrado.innerText === '-'){
        return true
    } else {
        alert('O quadrado já está ocupado!')
    }
    
}


function mudaJogador(valor){
    if (winner != '-'){
        jog = valor;
        jogadorSele.innerHTML = jog;
    }
}


function checaVencedor(){
    let vencedor = false
    if (quadrado1.innerText !== '-' && quadrado1.innerText === quadrado2.innerText && quadrado2.innerText === quadrado3.innerText){
        vencedor = true
        let seq = document.getElementsByClassName('seq1')
        for (var i = 0; i < seq.length; i++){
            seq[i].style.backgroundColor = "chartreuse";
        }
    } else if (quadrado4.innerText !== '-' && quadrado4.innerText === quadrado5.innerText && quadrado5.innerText === quadrado6.innerText){
        vencedor = true
        let seq = document.getElementsByClassName('seq4')
        for (var i = 0; i < seq.length; i++){
            seq[i].style.backgroundColor = "chartreuse";
        }
    } else if (quadrado7.innerText !== '-' && quadrado7.innerText === quadrado8.innerText && quadrado8.innerText === quadrado9.innerText){
        vencedor = true
        let seq = document.getElementsByClassName('seq7')
        for (var i = 0; i < seq.length; i++){
            seq[i].style.backgroundColor = "chartreuse";
        }
    } else if (quadrado1.innerText !== '-' && quadrado1.innerText === quadrado5.innerText && quadrado5.innerText === quadrado9.innerText){
        vencedor = true
        let seq = document.getElementsByClassName('seq5')
        for (var i = 0; i < seq.length; i++){
            seq[i].style.backgroundColor = "chartreuse";
        }
    } else if(quadrado3.innerText !== '-' && quadrado3.innerText === quadrado5.innerText && quadrado5.innerText === quadrado7.innerText){
        vencedor = true
        let seq = document.getElementsByClassName('seq3')
        for (var i = 0; i < seq.length; i++){
            seq[i].style.backgroundColor = "chartreuse";
        } 
    } else if(quadrado1.innerText !== '-' && quadrado1.innerText === quadrado4.innerText && quadrado4.innerText === quadrado7.innerText){
        vencedor = true
        let seq = document.getElementsByClassName('seq0')
        for (var i = 0; i < seq.length; i++){
            seq[i].style.backgroundColor = "chartreuse";
        } 
    } else if(quadrado2.innerText !== '-' && quadrado2.innerText === quadrado5.innerText && quadrado5.innerText === quadrado8.innerText){
        vencedor = true
        let seq = document.getElementsByClassName('seq2')
        for (var i = 0; i < seq.length; i++){
            seq[i].style.backgroundColor = "chartreuse";
        }
    } else if(quadrado3.innerText !== '-' && quadrado3.innerText === quadrado6.innerText && quadrado6.innerText === quadrado9.innerText){
        vencedor = true
        let seq = document.getElementsByClassName('seq6')
        for (var i = 0; i < seq.length; i++){
            seq[i].style.backgroundColor = "chartreuse";
        }
    } return vencedor
}


function mudaVencedor(){
    let winner = document.getElementById('vencedor')
    if (checaVencedor()){
        winner.innerHTML = jog
        alert(`${jog} é o vencedor!`)
        }
}

function reiniciar(){
    let sqs = document.getElementsByClassName('quadrado')
    for (let c = 0; c< sqs.length; c++){
        sqs[c].innerHTML = '-';
        sqs[c].style.backgroundColor = 'antiquewhite';
    } let winner = document.getElementById('vencedor');
    winner.innerHTML = '';
    
}

