// Captura o formulário
const form = document.getElementById('contactForm');

// Evento de envio do formulário
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o reload da página

    // Captura os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Salva no localStorage
    localStorage.setItem('contactData', JSON.stringify({ name, email, message }));

    // Exibe mensagem de sucesso
    alert('Obrigado pelo contato! Seus dados foram enviados com sucesso.');

    // Limpa o formulário
    form.reset();
});