document.getElementById('chamar-btn').addEventListener('click', () => {
    const guiche = document.getElementById('guiche').value;

    // Obter a fila de pacientes
    let fila = JSON.parse(localStorage.getItem('filaPacientes')) || [];
    if (fila.length === 0) {
        document.getElementById('mensagem').textContent = 'Não há pacientes na fila.';
        return;
    }

    // Obter o próximo paciente da fila
    const pacienteAtual = fila.shift();
    pacienteAtual.guiche = guiche;

    // Atualizar o armazenamento local
    localStorage.setItem('filaPacientes', JSON.stringify(fila));
    localStorage.setItem('atendimentoAtual', JSON.stringify(pacienteAtual));
    atualizarListaChamados(pacienteAtual);
    atualizarListaFila();

    // Mensagem de confirmação
    document.getElementById('mensagem').textContent = `Paciente ${pacienteAtual.nome} chamado para o Guichê ${pacienteAtual.guiche}.`;
});

function atualizarListaChamados(pacienteAtual) {
    const listaChamados = JSON.parse(localStorage.getItem('listaChamados')) || [];
    listaChamados.push(pacienteAtual);
    localStorage.setItem('listaChamados', JSON.stringify(listaChamados));
}

function atualizarListaFila() {
    const listaFila = JSON.parse(localStorage.getItem('filaPacientes')) || [];
    const listaElement = document.getElementById('lista-fila');
    listaElement.innerHTML = ""; // Limpar a lista antes de preencher

    listaFila.forEach(paciente => {
        const li = document.createElement("li");
        li.textContent = `Nome: ${paciente.nome} - Tipo: ${paciente.tipo}`;
        listaElement.appendChild(li);
    });
}

// Atualizar a lista de pacientes na fila ao carregar a página
window.onload = function() {
    atualizarListaFila();
};
