let valores = []
let numero = document.querySelector('input#numtxt')



function validar(n){
    if (Number(n) >=1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function inLista(n, valores){
    if (valores.indexOf(n) != -1){
    return true
} else {
    return false
    }
}

function adicionar(){
    if (validar(numero.value && !inLista(Number(numero.value), valores))){
        valores.push(Number(numero.value))
        let opt = document.createElement('option')
        opt.innerText += `Número ${numero.value} adicionado!`
        document.getElementById('quadro').appendChild(opt)
    } else{
        alert('Valor inválido ou já consta da lista!')
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    let maior = valores[0]
    let menor = valores[0]
    if (valores.length == 0){
        alert('Você não digitou nenhum número!')
    } else{
        for (pos in valores){
            if (valores[pos] > maior){
                maior = valores[pos]
            } else if (valores[pos] < menor){
                menor = valores[pos]
            }
        
        }

    }
    let res1 = document.getElementById('res1')
    res1.innerText = `A lista possui ${valores.length} números!`
    let res2 = document.getElementById('res2')
    res2.innerText = `O menor valor informado é ${menor}`
    let res3 = document.getElementById('res3')
    res3.innerText = `O maior valor é ${maior}`
    let res4 = document.getElementById('res4')
    res4.innerHTML = `A soma dos valores é ${somar(valores)}`
    let res5 = document.getElementById('res5')
    res5.innerText = `A média dos números adicionados é ${somar(valores)/valores.length}`
}

function somar(l){
    total = 0
    for (v = 0; v<l.length; v++)
        total += l[v]
    return total
}