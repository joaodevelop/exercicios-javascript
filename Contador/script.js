function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if (inicio.value == '' || fim.value.lenght == '' || passo.value.lenght == ''){
        alert('[ERRO] Preencha os campos com números válidos.')
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = 'Contando...'
        if (i < f){
            for (c = i; c <= f ; c += p){
                res.innerHTML += `${c}👉 `
            }
        } else {
            p = -p
            for (c = i; c >= f ; c += p){
                res.innerHTML += `${c}👉 `
            }
        }
    }   res.innerHTML += `🛑`
}