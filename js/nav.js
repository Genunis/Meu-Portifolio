let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // exibe o navbar quando a página é rolada para cima
    document.querySelector('.navbar').classList.remove('hidden');
  } else {
    // esconde o navbar quando a página é rolada para baixo
    document.querySelector('.navbar').classList.add('hidden');
  }
  prevScrollpos = currentScrollPos;
}