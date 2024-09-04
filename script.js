// Importo la funzione per creare un app VueJs
const { createApp } = Vue;

// Creo app Vue
createApp({
    data() {
        return {
            images: [
                {sources: '../img/01.webp', description: 'first image'},
                {sources: '../img/02.webp', description: 'second image'},
                {sources: '../img/03.webp', description: 'third image'},
                {sources: '../img/04.webp', description: 'fourth image'},
                {sources: '../img/05.webp', description: 'fifth image'}
            ]
        };
    }
}).mount('#app');