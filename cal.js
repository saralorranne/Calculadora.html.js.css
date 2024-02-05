// Função para somar dois números
function somar(numeroA, numeroB) {
    return numeroA + numeroB;
  }
  
  // Função para subtrair dois números
  function subtrair(a, b) {
    return a - b;
  }
  
  // Função para multiplicar dois números
  function multiplicar(a, b) {
    return a * b;
  }
  
  // Função para dividir dois números
  function dividir(a, b) {
    return a / b;
  }
  //função para o cubo de dois numeros
  
  function calcularCubo (a, b){
    return (a+b)(a+b)(a+b);
  }
  //funçao para o quadrado que calcula o quadrado do numero
  function calcularQuadrado (a, b){
    return (a+b)*(a+b);
  }
  
  //função media para calcular a média dos dois valores
  function calcularMedia (a, b){
    return (a+ b) /2;
  }
  
  function calcularMaiorMenor (a , b){
    if (a > b){
      return (a /2)* b;
    }
  else{
    return(b /2)* a;
  }
  }
  // Função principal para realizar os cálculos e exibir os resultados na página
  function calcular() {
    // Obter os valores dos campos de entrada
    const numeroA = parseFloat(document.getElementById("numeroA").value);
    const numeroB = parseFloat(document.getElementById("numeroB").value);
  
    // Exibir os resultados na página HTML
    document.getElementById("soma").innerHTML = "Soma:" + somar(numeroA, numeroB);
    document.getElementById("subtracao").innerHTML = "Subtração:" + subtrair(numeroA, numeroB);
    document.getElementById("multiplicacao").innerHTML = "Multiplicação:" + multiplicar(numeroA, numeroB);
    document.getElementById("divisao").innerHTML = "Divisão:" + dividir(numeroA, numeroB);
    document.getElementById("calcularCubo").innerHTML="calcularCubo:"+ calcularCubo(numeroA, numeroB);
    document.getElementById("calcularQuadrado").innerHTML="calcularQuadrado"+ calcularQuadrado(numeroA, numeroB);
    document.getElementById("calcularMedia").innerHTML="calcularMedia"+ calcularMedia(numeroA, numeroB);
    document.getElementById("calcularMaiorMenor").innerHTML="calcularMaiorMenor"+ calcularMaiorMenor(numeroA, numeroB);
  }