export function menu_init() {
    const boton = document.getElementById('boton-sidebar');
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    const botonLeft = document.getElementById('boton-sidebar_left');
    const body = document.getElementById('body');
    const botonFixed = document.getElementById('boton-sidebar_fixed');


    boton.addEventListener('click', () => {
        sidebar.classList.toggle('toggle');
        main.classList.toggle('main');
    });




    botonFixed.addEventListener('click', () => {
        sidebar.classList.toggle('toggle');
        main.classList.toggle('main');
    });



    botonLeft.addEventListener('click', () => {
        botonLeft.closest('.wrapper').classList.toggle('nav-open');
    });

    window.addEventListener('scroll', mostrarBotonFixed);

}

function mostrarBotonFixed() {
    let scroll = document.documentElement.scrollTop;
    const nabvar = document.getElementById('content-buttons');
    const botonFixedScroll = document.getElementById('boton-sidebar_fixed');
    if (scroll >= 25) {
        nabvar.classList.add('none');
        botonFixedScroll.classList.add('block');
    } else {
        botonFixedScroll.classList.remove('block');
        nabvar.classList.remove('none');

    }

}

export function dark_mode() {


    const colorSwitch = document.querySelector('.color-switch');

    if (localStorage.getItem('mode') == 'dark') {
        darkModeOn();
        if (colorSwitch) {
            colorSwitch.setAttribute('checked', true);
        }


    } else {
        darkModeOff();

    }
    if (colorSwitch) {
        colorSwitch.addEventListener('click', checkMode);
    }
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