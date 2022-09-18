let resultado = document.querySelector('#resultado')
let confirmar = document.querySelector('#confirmar')
let limparCampo = document.querySelector('#limparCampo')
let btnbackspace = document.querySelector('#btnBackSpace')



function insert(valor){
    resultado.innerHTML += valor
}



function limpar(){
    resultado.innerHTML = ''
}
limparCampo.addEventListener('click', limpar)



function backspace(){
    if(resultado.textContent){
        let result = document.querySelector('#resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1)
    }
}
btnbackspace.addEventListener('click', backspace)



function confirmarCalc(){
    if(resultado.textContent != 'Erro'){
        document.querySelector('#resultado').innerHTML = eval(resultado.innerHTML)
    }
}
confirmar.addEventListener('click', confirmarCalc)


