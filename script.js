const menuButton = document.getElementById('arrow-up');
const openMenu = document.getElementById('menu-open');

let isToggled = false;

menuButton.onclick = () => { 
    if (isToggled === false) {
        openMenu.style.display = 'block';
        isToggled = true;
    } else if (isToggled === true) {
        openMenu.style.display = 'none';
        isToggled = false;
    }
}

