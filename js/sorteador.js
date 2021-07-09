const submeterformulario = () => {
    const rangeinicial = document.getElementById("Rangeinicial").value;
    const rangefinal = document.getElementById("Rangefinal").value;
    const minhaaposta = document.getElementById("minha aposta").value;

    realizarsorteio(+rangeinicial, +rangefinal, +minhaaposta);
}
const realizarsorteio = (rangeinicial, rangefinal, minhaaposta) => {
    
    if(!rangeinicial) {
        alert("Informe o range inicial");
        return;
    }
    if(!rangefinal) {
        alert("Informe o range final");
        return;
    }
    if(!minhaaposta) {
        alert("Informe a sua aposta");
        return;
    }
    const numerosorteado = novosorteio(rangeinicial, rangefinal);
    
    if(numerosorteado === minhaaposta){
        alert("Parabéns!, você acertou");
        return;
    }
    
    alert(`Errou! o número sorteado foi ${numerosorteado}`);
    



}
const novosorteio = (rangeinicial, rangefinal) => {
    return (Math.floor(Math.random() * (rangefinal - rangeinicial + 1)) + rangeinicial);
}