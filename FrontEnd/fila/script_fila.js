document.getElementById('convencional-btn').addEventListener('click', () => {
    adicionarPaciente("Convencional");
});

document.getElementById('prioridade-btn').addEventListener('click', () => {
    adicionarPaciente("Prioridade");
});

function adicionarPaciente(tipo) {
    const nome = document.getElementById('nome').value.trim();
    const notification = document.getElementById('notification');

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar paciente à fila
    let fila = JSON.parse(localStorage.getItem('filaPacientes')) || [];
    fila.push({ nome: nome, tipo: tipo });
    localStorage.setItem('filaPacientes', JSON.stringify(fila));

    // Atualizar a contagem de pacientes na fila
    document.getElementById('pacientes-na-frente').textContent = fila.length;

    // Mensagem de confirmação
    notification.textContent = `Paciente ${nome} (${tipo}) adicionado à fila com sucesso!`;
    notification.classList.remove('hidden');
    notification.classList.add('visible');

    setTimeout(() => {
        notification.classList.remove('visible');
        notification.classList.add('hidden');
    }, 3000);

    // Limpar o campo de entrada
    document.getElementById('nome').value = '';
}

// Atualizar a contagem ao carregar a página
window.onload = function() {
    let fila = JSON.parse(localStorage.getItem('filaPacientes')) || [];
    document.getElementById('pacientes-na-frente').textContent = fila.length;
};
