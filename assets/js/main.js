// grap elements 

const selectElement = selector => {
    element = document.querySelector(selector);
    if (selector) return element;
    throw new Error(`Something went wrong, make sure that the selector '${selector}' is correct.`)
}

//toggle-menu 
const body = document.body;
const toggleMenu = () => {
    const openMenuBtn = selectElement('#open-menu-btn');
    const closeMenuBtn = selectElement('#close-menu-btn');
    const nav = selectElement('nav');

    openMenuBtn.addEventListener('click', (e) => {
        nav.classList.toggle('activated')
        body.classList.toggle('activated')
    })

    closeMenuBtn.addEventListener('click', (e) => {
        nav.classList.toggle('activated')
        body.classList.toggle('activated')
    })

    window.addEventListener('keyup', e => {
        if (e.key === 'Escape') {
            nav.classList.toggle('activated')
            body.classList.toggle('activated')
        }
    })
}

toggleMenu()
