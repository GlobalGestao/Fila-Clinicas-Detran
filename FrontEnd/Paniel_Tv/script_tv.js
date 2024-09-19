function atualizarAtendimentoAtual() {
    const atendimentoAtual = JSON.parse(localStorage.getItem('atendimentoAtual'));

    if (atendimentoAtual) {
        document.getElementById('current-name').textContent = atendimentoAtual.nome || 'Nenhum';
        document.getElementById('current-guiche').textContent = atendimentoAtual.guiche || 'Nenhum';
        document.getElementById('current-type').textContent = atendimentoAtual.tipo || 'Nenhum';
    } else {
        document.getElementById('current-name').textContent = 'Nenhum';
        document.getElementById('current-guiche').textContent = 'Nenhum';
        document.getElementById('current-type').textContent = 'Nenhum';
    }
}

function atualizarListaChamados() {
    const listaChamados = JSON.parse(localStorage.getItem('listaChamados')) || [];
    const listaElement = document.getElementById('called-list');
    listaElement.innerHTML = ""; // Limpar a lista antes de preencher

    listaChamados.forEach(paciente => {
        const li = document.createElement("li");
        li.textContent = `Nome: ${paciente.nome} - Guichê ${paciente.guiche}`;
        listaElement.appendChild(li);
    });

    // Remover pacientes da lista após 1 minuto
    setTimeout(() => {
        const novosChamados = listaChamados.slice(1); // Remove o primeiro item
        localStorage.setItem('listaChamados', JSON.stringify(novosChamados));
        atualizarListaChamados(); // Atualizar a lista na tela
    }, 60000); // 1 minuto em milissegundos
}

function atualizarHoraETempo() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${horas}:${minutos}:${segundos}`;
    document.getElementById('current-weather').textContent = "25°C - Céu limpo"; // Exemplo de tempo
}

// Atualizar a hora a cada segundo
setInterval(atualizarHoraETempo, 1000);

// Atualizar as informações quando a página carrega
window.onload = function() {
    atualizarAtendimentoAtual();
    atualizarListaChamados();
    atualizarHoraETempo();
};

function atualizarAtendimentoAtual() {
    const atendimentoAtual = JSON.parse(localStorage.getItem('atendimentoAtual'));

    if (atendimentoAtual) {
        const name = atendimentoAtual.nome || 'Nenhum';
        const guiche = atendimentoAtual.guiche || 'Nenhum';
        const tipo = atendimentoAtual.tipo || 'Nenhum';

        document.getElementById('current-name').textContent = name;
        document.getElementById('current-guiche').textContent = guiche;
        document.getElementById('current-type').textContent = tipo;

        const currentAttendance = document.getElementById('current-attendance');
        currentAttendance.classList.remove('atendimento-convencional', 'atendimento-prioridade');

        if (tipo === 'Convencional') {
            currentAttendance.classList.add('atendimento-convencional');
        } else if (tipo === 'Prioridade') {
            currentAttendance.classList.add('atendimento-prioridade');
        }
    } else {
        document.getElementById('current-name').textContent = 'Nenhum';
        document.getElementById('current-guiche').textContent = 'Nenhum';
        document.getElementById('current-type').textContent = 'Nenhum';

        const currentAttendance = document.getElementById('current-attendance');
        currentAttendance.classList.remove('atendimento-convencional', 'atendimento-prioridade');
    }
}

// Atualizar as informações quando a página carrega
window.onload = function() {
    atualizarAtendimentoAtual();
};
