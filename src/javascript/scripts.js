function adicionarCaracter(caracter){
    const valorInput = document.querySelector('.display').value
    
    document.querySelector('.display').value = valorInput + caracter
   
}
function limparTela(){
    document.querySelector('.display').value = ''
}
function calcular(){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = eval(valorInput)

}
function inverterSinal(){
    const display = document.querySelector('.display');
    const valorAtual = parseFloat(display.value); 
    display.value = valorAtual * -1;
}