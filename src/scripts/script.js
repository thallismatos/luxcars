// Carregar o header e footer nas páginas carro, contatos, desenvolvedores, orcamentos, seguros e termos facilitando a manutenção do código.

function loadHeader() {
  // Obtém o caminho completo da página atual
  const currentPath = window.location.pathname;
  const fullURL = window.location.href;

  // Verifica se estamos na página raiz ou na "index.html"
  const isIndexPage = fullURL === window.location.origin + '/' || currentPath.endsWith('index.html');

  // Define o caminho do header com base na página atual
  let headerPath;
  let logoPath; // Variável para o caminho da logo

  if (isIndexPage) {
    headerPath = 'src/pages/reutilizavel/header.html'; // Caminho para index.html
    logoPath = 'src/assets/geral/logo.jpg'; // Caminho para logo na página index.html
  } else {
    headerPath = '../pages/reutilizavel/header.html'; // Caminho para outras páginas dentro de src/pages
    logoPath = '../assets/geral/logo.jpg'; // Caminho para logo em outras páginas
  }

  fetch(headerPath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar o header: ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('reutilizar-cabecalho').innerHTML = data;

      // Define o caminho da logo no cabeçalho carregado
      document.getElementById('logo').src = logoPath;

      initMenu(); // Chama a função para inicializar o menu após o cabeçalho ser carregado
    })
    .catch(error => console.error('Erro ao carregar o cabeçalho:', error));
}

function initMenu() {
  const menuList = document.getElementById('menu-list');

  // Define os itens do menu padrão
  const menuItems = [
    { name: 'Carros', href: 'src/pages/carros.html' },
    { name: 'Seguros', href: 'src/pages/seguros.html' },
    { name: 'Contatos', href: 'src/pages/contatos.html' },
    { name: 'Orçamentos', href: 'src/pages/orcamentos.html' },
  ];

  const currentPath = window.location.pathname;
  const fullURL = window.location.href;

  // Verifica se estamos na página raiz ou na "index.html"
  const isIndexPage = fullURL === window.location.origin + '/' || currentPath.endsWith('index.html');
  const isInsideSrcPages = window.location.pathname.includes('/src/pages/');

  // Adiciona os itens do menu
  if (isIndexPage) {
    menuItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', item.href);
      a.textContent = item.name;
      li.appendChild(a);
      menuList.appendChild(li);
    });
  } else if (isInsideSrcPages) {
    const homeItem = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.setAttribute('href', '../../../index.html');
    homeLink.textContent = 'Home';
    homeItem.appendChild(homeLink);
    menuList.appendChild(homeItem);

    menuItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', item.href.replace('src/pages/', ''));
      a.textContent = item.name;
      li.appendChild(a);
      menuList.appendChild(li);
    });
  }

  // Adiciona o evento de clique ao ícone do hamburger após o menu ter sido carregado
  const hamburgerIcon = document.getElementById('hamburger-icon');
  hamburgerIcon.addEventListener('click', () => {
    menuList.classList.toggle('open');
  });
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
