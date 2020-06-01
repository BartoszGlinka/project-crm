const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

hamburger.addEventListener('click', function (){
  hamburger.classList.toggle('hamburger--active');
  sidebar.classList.toggle('sidebar--active');
  content.classList.toggle('content--active');
});