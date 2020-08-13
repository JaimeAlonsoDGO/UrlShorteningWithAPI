const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

menuIcon.onclick = () =>{
    menu.classList.toggle('active');
}