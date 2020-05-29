const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', function (){
  hamburger.classList.toggle('hamburger--active');
  sidebar.classList.toggle('sidebar--active');
});