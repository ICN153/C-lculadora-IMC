
// Calculando o IMC
// var -> Criar uma variável, pórem, permite que esta seja "redeclarada" podendo causar BUGS
// Não permite que a variavel seja "redeclarada" e só funciona dentro do seu escopo
// const -> semelhante ao let com uma observação: NÃO PODE TER SEU VALOR ALTERADO

//Fórmula do IMC: imc peso / (altura*altura)


const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btnCalcular = document.querySelector('#btn-calcular');
const contentIMC = document.querySelector('.content-imc');
const resultIMC = document.querySelector('.result-imc');

btnCalcular.addEventListener('click', function(){

    //se peso e altura forem diferentes de vazio
    // == comparação (igualdade)
    // != comparação (diferente)
    // && e
    // || ou
    
   
if(peso.value != '' && altura.value != ''){

    //Alterando a classe "show"
    contentIMC.classList.toggle('show');
    resultIMC.classList.toggle('show');

let valorPeso = parseFloat(peso.value);
let valorAltura = parseFloat(altura.value);
let imc = valorPeso / (valorAltura*valorAltura);
//alert(imc);

const infoResult = document.querySelector('.result-imc h2 span');
infoResult.innerHTML = imc.toFixed(2);

}

else{
    alert('Preencha os campos para calcular');
}

})



//selecionar os elementos que serão manipulados pelo javascript
let lgpd = document.querySelector('.lgpd');
let btnLgpd = document.querySelector('.lgpd button');


//console.log(lgpd);
//console.log(btnLgpd);

//Associando o evento de click ao botão da lgpd

btnLgpd.addEventListener('click',function(){
    //alert('ok');

    lgpd.style.display = 'none';

    // Além de fechar, vamos guardar uma informação no navegador do usuário

    localStorage.setItem('fechouLgpd','sim');

})

//Se o usuário já fechou a lgpd (tem a informação guardada no storage)
// se a informação guardada no storage é igual (==) a 'sim'
if(localStorage.getItem('fechouLgpd') == 'sim'){
    lgpd.style.display = 'none';
}