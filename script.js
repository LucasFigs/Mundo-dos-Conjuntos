// script.js

function mostrarIntersecao() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Interseção: {3, 4}</p>';
}

function verificarResposta(resposta) {
    const feedbackDiv = document.getElementById('feedback');
    if (resposta === '3,4') {
        feedbackDiv.innerHTML = '<p>Correto! A interseção é {3, 4}.</p>';
        feedbackDiv.style.color = 'green';
    } else {
        feedbackDiv.innerHTML = '<p>Incorreto. Tente novamente.</p>';
        feedbackDiv.style.color = 'red';
    }
}
