function buscarComunicados() {
    const input = document.getElementById('edital-input');
    const filtro = input.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.grid-content');
    const emptyState = document.getElementById('empty-state');
    let encontrados = 0;

    cards.forEach((card) => {
        const titulo = card
            .querySelector('.grid-content-title h3')
            .textContent.toLowerCase();
        const descricao = card
            .querySelector('.grid-content-description')
            .textContent.toLowerCase();
        const categoria = card
            .querySelector('.grid-content-category')
            .textContent.toLowerCase();
        const keywords = card.getAttribute('data-keywords').toLowerCase();

        const textoCompleto = `${titulo} ${descricao} ${categoria} ${keywords}`;

        if (filtro === '' || textoCompleto.includes(filtro)) {
            card.classList.remove('hidden');
            encontrados++;
        } else {
            card.classList.add('hidden');
        }
    });

    if (encontrados === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}

document
    .getElementById('edital-input')
    .addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            buscarComunicados();
        }
    });

document
    .getElementById('edital-input')
    .addEventListener('input', buscarComunicados);
