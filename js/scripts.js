document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    console.log('Formulário submetido!');
    document.getElementById('popup').style.display = 'block'; // Exibe o popup
});
