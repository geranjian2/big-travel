export function menu_init() {
    const boton = document.getElementById('boton-sidebar');
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    const botonFixed = document.getElementById('boton-sidebar_fixed');
    const nabvar = document.getElementById('content-buttons');
    const botonLeft = document.getElementById('boton-sidebar_left');
    const body = document.getElementById('body');

    boton.addEventListener('click', () => {
        sidebar.classList.toggle('toggle');
        main.classList.toggle('main');
    });

    botonFixed.addEventListener('click', () => {
        alert();
        // sidebar.classList.toggle('toggle');
        // main.classList.toggle('main');
    });

    botonLeft.addEventListener('click', () => {
        console.log(body);
        botonLeft.closest('.wrapper').classList.toggle('nav-open');
    });

    window.addEventListener('scroll', mostrarBotonFixed);

}

function mostrarBotonFixed() {
    let scroll = document.documentElement.scrollTop;
    console.log(scroll);
    if (scroll >= 25) {
        nabvar.classList.add('none');
        botonFixed.classList.add('block');
    } else {
        botonFixed.classList.remove('block');
        nabvar.classList.remove('none');

    }
}

export function dark_mode() {


    const colorSwitch = document.querySelector('.color-switch');
    if (localStorage.getItem('mode') == 'dark') {
        darkModeOn();
        colorSwitch.setAttribute('checked', true);
    } else {
        darkModeOff();

    }

    colorSwitch.addEventListener('click', checkMode);
}

function checkMode() {
    if (this.checked) {
        localStorage.setItem('mode', 'dark')
        darkModeOn();
    } else {
        localStorage.setItem('mode', 'ligth')
        darkModeOff();

    }



}

function darkModeOn() {

    document.body.classList.add('dark-mode');
}

function darkModeOff() {
    document.body.classList.remove('dark-mode');
}