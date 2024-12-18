// Captura o formulário
const form = document.getElementById('contactForm');

// Evento de envio do formulário
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o reload da página

    // Exibe uma animação de "loading"
    const button = form.querySelector('button');
    button.disabled = true;
    button.innerText = "Enviando...";

    // Captura os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Salva no localStorage
    localStorage.setItem('contactData', JSON.stringify({ name, email, message }));

    // Simula o envio de dados (aqui você pode integrar com um backend real)
    setTimeout(() => {
        // Exibe mensagem de sucesso
        alert('Obrigado pelo contato! Seus dados foram enviados com sucesso.');
        
        // Limpa o formulário e reativa o botão
        form.reset();
        button.disabled = false;
        button.innerText = "Enviar";
    }, 2000);
});