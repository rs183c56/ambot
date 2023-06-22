const logoutBtn = document.getElementById('logout');

// user logout
if (logoutBtn) {

    logoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        location.replace('index.html');
    });
}

// This code prevents going back after log out
function preventBack() {
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function () {
    null
};
//menu bars
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
}