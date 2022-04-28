let jogo = {};
const jogador = document.querySelector('#jogador');
let posiçaoY = parseInt(Math.random()* 335);
let podeAtirar = true;
var somDisparo=document.getElementById("somDisparo");
var somExplosao=document.getElementById("somExplosao");
var musica=document.getElementById("musica");
var somGameover=document.getElementById("somGameover");
var somPerdido=document.getElementById("somPerdido");
var somResgate=document.getElementById("somResgate");


function start(){
    $("#inicio").hide();
    $('#fundoGame').append("<div id='jogador' class='anima1'><div>");
    $('#fundoGame').append("<div id='inimigo1' class='anima2'><div>");
    $('#fundoGame').append("<div id='inimigo2'><div>");
    $('#fundoGame').append("<div id='amigo' class='anima3'><div>");
    $("#fundoGame").append("<div id='placar'></div>");
    $("#fundoGame").append("<div id='energia'></div>");

     
    //Game Loop

    jogo.timer = setInterval(loop,30);

    function loop() {

        movefundo();
        moveInimigo1();
        moveInimigo2();
        moveAmigo();
        colisao();
        placar();
        energia();

    } // Fim da função loop()
    let velocidade = 5;
    let gameOver= false;
    let pontos = 0;
    let salvos = 0;
    let perdidos =0;
    let life = 3;
    function movefundo() {
        
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",esquerda-1);
        
        } // fim da função movefundo()

        var TECLA = {
            W: 87,
            S: 83,
            SPACE: 32
            }

    //verifica teclas do JOGO
    function teclou(event){
        if (event.keyCode === 38){
            up();
        } else if (event.keyCode === 40){
            down();
        } else if (event.keyCode === 32){
            disparo()

        }

    }

    //SUBIR
    function up(){
        var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo-10);
        if (topo <= 0){
            $("#jogador").css("top",topo+10);
            
        }
    }
    //DESCER
    function down(){
        var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo+10);
        if (topo >= 434){
            $("#jogador").css("top",topo-10);
            
        }
        
    }

    function moveInimigo1(){
        let posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left", posicaoX - velocidade);
        $("#inimigo1").css("top", posiçaoY);

        if (posicaoX <=0){
            posiçaoY = parseInt(Math.random()* 335);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posiçaoY);
        }


    }

    function moveInimigo2(){
        let posicaoL = parseInt($("#inimigo2").css("left"));
        $("#inimigo2").css("left", posicaoL - 3);


        if (posicaoL <=0){
            $("#inimigo2").css("left", 775);

        }


    }

    function moveAmigo(){
        let posicaoR = parseInt($("#amigo").css("left"));
        $("#amigo").css("left", posicaoR + 2);


        if (posicaoR >=820){
            $("#amigo").css("left", 10);

        }


    }


    function disparo() {
        
        if (podeAtirar==true) {
        somDisparo.play();	
        podeAtirar=false;
        
        topo = parseInt($("#jogador").css("top"))
        posicaoX= parseInt($("#jogador").css("left"))
        tiroX = posicaoX + 190;
        topoTiro=topo+37;
        $("#fundoGame").append("<div id='disparo'></div");
        $("#disparo").css("top",topoTiro);
        $("#disparo").css("left",tiroX);
        
        var tempoDisparo= setInterval(executaDisparo, 30);
        
        } 
    
            function executaDisparo() {
            posicaoX = parseInt($("#disparo").css("left"));
            $("#disparo").css("left",posicaoX+15); 

                    if (posicaoX>900) {
                            
                window.clearInterval(tempoDisparo);
                tempoDisparo=null;
                $("#disparo").remove();
                podeAtirar=true;
                        
                    }
        } // Fecha executaDisparo()
    } // Fecha disparo()


    function colisao(){
        let colisao1 = ($("#jogador").collision($("#inimigo1")));
        let colisao2 = ($("#jogador").collision($("#inimigo2")));
        let colisao3 = ($("#disparo").collision($("#inimigo1")));
        let colisao4 = ($("#disparo").collision($("#inimigo2")));
        let colisao5 = ($("#jogador").collision($("#amigo")));
        let colisao6 = ($("#inimigo2").collision($("#amigo")));
        let inimigo1X = ($("#inimigo1").css('left'));
        let inimigo1Y = ($("#inimigo1").css('top'));
        let inimigo2X = ($("#inimigo2").css('left'));
        let inimigo2Y = ($("#inimigo2").css('top'));
        let amigoX = ($("#amigo").css("left"));
        let amigoY = ($("#amigo").css("top"));
        //jogador com helicoptero
        if (colisao1.length > 0){
            life--;

            explosao1(inimigo1X, inimigo1Y);
            posiçaoY = parseInt(Math.random()* 335);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posiçaoY);


            //jogador com caminhão   
        } else if( colisao2.length > 0){
            life--;


            explosao2(inimigo2X, inimigo2Y);
            inimigo2.remove();
            reposicionaInimigo();
            $("#inimigo2").css("left", 775);

            //disparo com helicoptero      
        } else if (colisao3.length > 0){
            pontos += 100;
            velocidade += 0.3;
            explosao1(inimigo1X,inimigo1Y);
            $("#disparo").css("left",950);
            posiçaoY = parseInt(Math.random()* 335);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posiçaoY);

            //disparo com caminhao
        } else if (colisao4.length > 0){
            pontos += 50;
            explosao2(inimigo2X, inimigo2Y);
            $("#disparo").css("left",950);
            inimigo2.remove();
            reposicionaInimigo();
            $("#inimigo2").css("left", 775);
            //amigo encontra jogador
        } else if (colisao5.length > 0){
            somResgate.play();
            salvos++;        
            $("#amigo").remove();
            reposicionaAmigo();
        //amigo encontra caminhao
        } else if (colisao6.length > 0 ){
            perdidos ++;
            morreAmigo(amigoX, amigoY);
            $("#amigo").remove();
            reposicionaAmigo();
        }
    }



    function explosao1(inimigo1X,inimigo1Y) {
        somExplosao.play();
        $("#fundoGame").append("<div id='explosao1'></div");
        let div=$("#explosao1");
        div.css("top", inimigo1Y);
        div.css("left", inimigo1X);
        
        div.animate({width:200, opacity:0}, "slow");
        let tempoExplosao = setInterval(() =>{
            
            div.remove();
            clearInterval(tempoExplosao);
            tempoExplosao = null;

        }, 1000);

    }

    function explosao2(inimigo2X,inimigo2Y) {
        somExplosao.play();
        $("#fundoGame").append("<div id='explosao2'></div");
        let div=$("#explosao2");
        div.css("top", inimigo2Y);
        div.css("left", inimigo2X);
        div.animate({width:200, opacity:0}, "slow");

        let tempoExplosao2= setInterval(() =>{
            
            div.remove();
            clearInterval(tempoExplosao);
            tempoExplosao2 = null;
        
        }, 1000);

    }



    function reposicionaInimigo(){
        let inimigo2 =$("#inimigo2");
        let tempoColisao = setInterval(() =>{
            clearInterval(tempoColisao);
            tempoColisao = null;
            if (gameOver === false){
                $("#fundoGame").append("<div id='inimigo2'></div>");

            }
        },    5000)
        
    }

    function reposicionaAmigo(){
        let encontroAmigo = setInterval( () =>{
            clearInterval(encontroAmigo);
            encontroAmigo = null;
            if (gameOver === false){
                $("#fundoGame").append("<div id='amigo'><div>");
            }
        }, 6000)

    }

    function morreAmigo(amigoX, amigoY){
        somPerdido.play();
        ($("#fundoGame").append('<div id="explosao3" class= "anima4"></div>'));
        let div = $("#explosao3");
        div.css('top', amigoY);
        div.css('left', amigoX);
        let tempoExplosao3= setInterval(()=>{
            $("#explosao3").remove();
            clearInterval(tempoExplosao3);
            tempoExplosao3=null;

        }, 1000);
            
    }

    function placar() {
        
        $("#placar").html("<h2> Pontos: " + pontos + " Salvos: " + salvos + " Perdidos: " + perdidos + "</h2>");
        
    } 

    function energia(){
        let lifeatual = $('#energia')
        if (life === 3){
            lifeatual.css("background-image", "url(../jogo1/imgs/energia3.png)");
        } else if( life == 2){
            lifeatual.css("background-image", "url(../jogo1/imgs/energia2.png)");
        } else if( life == 1){
            lifeatual.css("background-image", "url(../jogo1/imgs/energia1.png)");
        } else if (life === 0){
            lifeatual.css("background-image", "url(../jogo1/imgs/energia0.png)");
            fimdeJogo()
        }

    }

    function fimdeJogo(){
        gameOver = true
        clearInterval(jogo.timer);
        jogo.timer = null;
        somGameover.play();
        musica.pause();
        $("#jogador").remove();
        $("#inimigo1").remove();
        $("#inimigo2").remove();
        $("#amigo").remove();
        $("#fundoGame").append("<div id='fim'></div>");
        $("#fim").html("<h1> Game Over </h1><p>Sua pontuação foi: " + pontos + "</p>"+ "<p> Você salvou " + salvos + " prisioneiros! </p>" + "<p> Você perdeu "+ perdidos + " soldados! </p>"  + "<div> <input type='button' value='Reiniciar Jogo' onclick='reiniciaJogo()'>");
        
    }


    document.addEventListener('keydown', teclou);


    musica.addEventListener("ended", function(){ musica.currentTime = 0; musica.play(); }, false);
    musica.play();
}

function reiniciaJogo() {
	somGameover.pause();
	$("#fim").remove();
	start();
	
}

