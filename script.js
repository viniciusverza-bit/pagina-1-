// Selecionando os elementos do DOM
const ideaForm = document.getElementById('ideaForm');
const ideasContainer = document.getElementById('ideasContainer');

// Função para lidar com o envio do formulário
ideaForm.addEventListener('submit', function(event) {
    // Evita que a página seja recarregada ao enviar o formulário
    event.preventDefault();

    // Pegando os valores inseridos pelo usuário
    const name = document.getElementById('studentName').value;
    const course = document.getElementById('studentCourse').value;
    const idea = document.getElementById('studentIdea').value;

    // Remove a mensagem de "Nenhuma ideia enviada ainda" se ela existir
    const emptyMessage = document.querySelector('.empty-message');
    if (emptyMessage) {
        emptyMessage.remove();
    }

    // Criando a estrutura HTML da nova ideia
    const ideaBox = document.createElement('div');
    ideaBox.classList.add('idea-box');

    ideaBox.innerHTML = `
        <p><strong>${name}</strong> (${course}) diz:</p>
        <p>"${idea}"</p>
    `;

    // Adiciona a nova ideia no topo do mural
    ideasContainer.insertBefore(ideaBox, ideasContainer.firstChild);

    // Limpa o formulário para o próximo envio
    ideaForm.reset();
});
