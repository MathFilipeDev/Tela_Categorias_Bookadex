const categoriaBtn = document.getElementById('categoriaBtn');
const categoriaMenu = document.getElementById('categoriaMenu');

categoriaBtn.addEventListener('click', () => {
  categoriaMenu.classList.toggle('hidden');
});

// Fecha o menu se clicar fora
window.addEventListener('click', (e) => {
  if (!categoriaBtn.contains(e.target) && !categoriaMenu.contains(e.target)) {
    categoriaMenu.classList.add('hidden');
  }
});
