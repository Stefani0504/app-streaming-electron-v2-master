document.getElementById('form-login').addEventListener('submit',async function(event) {

    event.preventDefault(); // Impede o envio do formulário


    console.log('1. cheguei no evento do formulário')

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('2. Dados do formulário:', email, password);

    const usuario = window.api.login(email, password);



});