/*let valorAny: any;
valorAny = 3;
valorAny = 'x';
valorAny = true;

let valorString: string = 'test';
valorString = valorAny;
let valorString2 = 'teste';
valorString2 = valorAny;



function somaString(string1: string, string2: string){
    console.log(string1 + string2)
}

somaString(valorString, valorString2); */
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('olá', ' tudo bem?'));
console.log(somarValores('1', 5));
