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
document.addEventListener('DOMContentLoaded', function () {
  loadHeader();
  loadFooter();
});

/* Carros - Ver mais */
document.getElementById('ver-mais').addEventListener('click', function () {
  var maisCarros = document.querySelector('.mais-carros');

  // Verifica a largura da tela
  var larguraTela = window.innerWidth;

  // Verifica se o elemento está oculto ou não
  if (maisCarros.style.display === 'none' || maisCarros.style.display === '') {
    // Se a largura da tela estiver entre 1000px e 1025px, aplica 'grid'
    if (larguraTela >= 640 && larguraTela <= 1200) { /* Tiver q colcoar isso, pois tive problema no layout */
      maisCarros.style.display = 'grid';
    } else {
      maisCarros.style.display = 'flex';
    }
    this.textContent = 'Ver Menos';
  } else {
    maisCarros.style.display = 'none';
    this.textContent = 'Ver Mais';
  }
});


