// Carregar o header e footer nas páginas carro, contatos, desenvolvedores, orcamentos, seguros e termos facilitando a manutenção do código

function loadHeader() {
  fetch('../pages/reutilizavel/header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar o header: ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('reutilizar-cabecalho').innerHTML = data;
    })
    .catch(error => console.error(error));
}

function loadFooter() {
  fetch('../pages/reutilizavel/footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar o footer: ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('reutilizar-rodape').innerHTML = data;
    })
    .catch(error => console.error(error));
}

// Carregar o header e footer quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
  loadFooter();
});

/* Carros - Ver mais */
document.getElementById('ver-mais').addEventListener('click', function() {
  var maisCarros = document.querySelector('.mais-carros');
  if (maisCarros.style.display === 'none') {
    maisCarros.style.display = 'flex'; // Altera para flex para manter a linha
    this.textContent = 'Ver Menos'; // Altera o texto do botão
  } else {
    maisCarros.style.display = 'none';
    this.textContent = 'Ver Mais'; // Restaura o texto do botão
  }
});


