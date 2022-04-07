function tabuada(){
    var num = document.getElementById('txtnum')
    var n = Number(num.value)
    var c = 1
    if (num == ''){
        alert('ERRO! Digite um valor válido')
    } else{
        var tab = document.getElementById('quadro')
        tab.innerText = ''
        while (c <= 10){
            let res = document.createElement('option', c)
            res.innerText = `${n} x ${c} = ${n*c}` 
            document.getElementById("quadro").appendChild(res)
            c++
        }
    } 
}