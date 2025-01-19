var menuBtn = document.getElementById('menuBtn');
var navMenu = document.getElementById('navMenu');
var searchBar = document.getElementById('searchBar');

menuBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('showHideMenu');
    searchBar.classList.toggle('showHideMenu');
    
});