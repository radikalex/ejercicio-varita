// Eventos

// 1.
let anchor_tags = document.getElementsByTagName('a');
for (const a of anchor_tags) {
    a.addEventListener('click', function noLinks(e){
        e.preventDefault();
        console.log('Ya no funcionó como enlace :(')
    })
}






// 2.
// Imagenes
let img_tags = document.getElementsByTagName('img');
for (const img of img_tags) {
    img.addEventListener('click', function cambiarImagen(e){
        const num = Math.floor(Math.random() * 6) + 1;
        e.target.src = `./assets/magic-${num}.gif`
    })
}
// Parrafos
let p_tags = document.getElementsByTagName('p');
for (const p of p_tags) {
    p.addEventListener('click', function cambiarParrafo(e){
        e.target.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
        e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    })
}
// Article o Section
let article_tags = document.getElementsByTagName('article');
for (const article of article_tags) {
    article.addEventListener('click', cambiarFondo);
}
let section_tags = document.getElementsByTagName('section');
for (const section of section_tags) {
    section.addEventListener('click', cambiarFondo);
}
function cambiarFondo(e){
    e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
}







// 3.
// Imagenes
for (const img of img_tags) {
    img.addEventListener('mouseover', function cambiarImagen(e){
        e.target.oldSrc = e.target.src;
        e.target.src = `./assets/abracadabra.gif`
    })
    img.addEventListener('mouseout', function cambiarImagen(e){
        e.target.src = e.target.oldSrc;
    })
}
// Parrafos
for (const p of p_tags) {
    p.addEventListener('mouseover', function cambiarParrafo(e){
        if (e.currentTarget !== e.target) { // Esto es para quue el listener no afecte a sus hijos y solo se aplique al elemento que lo "invoca"
            return;
        }
        e.target.oldColor = e.target.style.color;
        e.target.oldBackground = e.target.style.background;
        e.target.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
        e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    })
    p.addEventListener('mouseout', function cambiarParrafo(e){
        e.target.style.color = e.target.oldColor;
        e.target.style.background = e.target.oldBackground;
    })
}
// Article o Section
for (const article of article_tags) {
    article.addEventListener('mouseover', cambiarFondoHover);
    article.addEventListener('mouseout', quitarFondoHover);
}
for (const section of section_tags) {
    section.addEventListener('mouseover', cambiarFondoHover);
    section.addEventListener('mouseout', quitarFondoHover);
}
function cambiarFondoHover(e){
    if (e.currentTarget !== e.target) { // Esto es para quue el listener no afecte a sus hijos y solo se aplique al elemento que lo "invoca"
        return;
    }
    e.target.style.oldHoverBackground = e.target.style.background;
    e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
}
function quitarFondoHover(e){
    e.target.style.background = e.target.style.oldHoverBackground;
}





// Premium
// 4.
const colors = ['red', 'blue', 'green']
const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}
console.log(getRandom(colors))

// 5.
const paleta_colores = ['#264653','#2a9d8f', '#e9c46a', '#f4a261', '#e76f51']
console.log(getRandom(paleta_colores)); // Así podriamos obtener un color aleatorio de una paleta de colores

// 6.
const gifs = [
    './assets/abracadabra.gif',
    './assets/magic-1.gif',
    './assets/magic-2.gif',
    './assets/magic-3.gif',
    './assets/magic-4.gif',
    './assets/magic-5.gif',
    './assets/magic-6.gif'
]
console.log(getRandom(gifs)); // De esta manera podríamos cambiar entre gifs aleatorios en los ejercicios anteriores