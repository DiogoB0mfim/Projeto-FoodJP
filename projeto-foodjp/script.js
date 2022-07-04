//Função para mudar cor do header na rolagem//
window.addEventListener('scroll', function(){
    var menu = document.querySelector('.menu');
    menu.classList.toggle('sticky', window.scrollY > 0);
  })