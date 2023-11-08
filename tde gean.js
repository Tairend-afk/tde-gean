const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página seja recarregada após o envio do formulário
    myFunction();
});

function myFunction() {
    if (confirm("Deseja enviar este formulário?")) {
        // Aqui você pode adicionar código para processar o envio do formulário
        alert("Formulário enviado com sucesso!");
    } else {
        // Código para lidar com o cancelamento do envio do formulário
        alert("Envio do formulário cancelado!");
    }
}