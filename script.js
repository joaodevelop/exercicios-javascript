function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    if (hora <12){
        msg.innerHTML = `Bom dia, são ${hora} horas!`
        document.body.style.background = 'blue' 
    }else if(hora >= 12 && hora <18){
        msg.innerHTML = `Boa tarde! São <strong>${hora}</strong> horas!`
        foto.src = "fototarde.png"
        document.body.style.background = '#b05a1e'
    }else {
        msg.innerHTML = `Boa noite!! São ${hora} horas!`
        foto.src = 'fotonoite.png'
        document.body.style.background = 'gray'
    }
}
