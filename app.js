//numero de tentativas máximas
let tentaMax = 3;

let tentRestSpan = document.getElementById('user-trys');
let resultP = document.getElementById('output-text');
let palpP = document.getElementById('palpite-text');

let numInput = document.getElementById('value-sub');//retorna o que o user escrever
let btnInput = document.getElementById('btn-sub');

//variável que terá um número
let number = [Math.floor(Math.random()*100)];

//Vai fazendo refresh as tentativas que o jogador tem!!
function tentativas(numtent,number){
    if( numtent > 0)
        tentRestSpan.innerHTML = numtent;
    else 
        location.reload(); //se o numero de tentativas exceder a página dá refresh
}


function verificaNum() {
    let input = document.getElementById('value-sub').value;

    if(input == number){
        palpP.innerHTML = `Acertaste, o número é o ${number}`;
    }
    else if (input < number){
        palpP.innerHTML = "Palpite baixo!";
        tentaMax--;
        tentativas(tentaMax,number);
    }

    else if (input > number){
        palpP.innerHTML = "Palpite alto!";
        tentaMax--;
        tentativas(tentaMax,number);
    }
}

function main(){
    btnInput.addEventListener('click', function(){
        verificaNum();
    });
}

main();