// Importo la funzione per creare un app VueJs
const { createApp } = Vue;

// Creo app Vue
createApp({
    data() {
        return {
            activeSlide:0,
            images: [
                {sources: 'img/01.webp', description: 'first image'},
                {sources: 'img/02.webp', description: 'second image'},
                {sources: 'img/03.webp', description: 'third image'},
                {sources: 'img/04.webp', description: 'fourth image'},
                {sources: 'img/05.webp', description: 'fifth image'}
            ]
        }
    },
    methods:{
        // Funzione che incrementa di uno il mio slider 
        nextSlide(){
            this.activeSlide++;
            if(this.activeSlide > 4) this.activeSlide = 0
        },
        // Funzione che decrementa di uno il mio slider
        prevSlide(){
            this.activeSlide--;
            if(this.activeSlide < 0) this.activeSlide  = 4
        }
    }
}).mount('#app');