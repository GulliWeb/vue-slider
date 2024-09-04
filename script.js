// Importo la funzione per creare un app VueJs
const { createApp } = Vue;

// Creo app Vue
createApp({
    data() {
        return {
            activeSlide:0,
            images: [
                {sources: 'img/gtaCard.jpg', description: 'first image'},
                {sources: 'https://gmedia.playstation.com/is/image/SIEPDC/star-wars-outlaws-keyart-01-en-17jul23?$1200px$', description: 'second image'},
                {sources: 'https://gmedia.playstation.com/is/image/SIEPDC/indiana-jones-and-the-great-circle-keyart-01-en-21aug24?$1200px$', description: 'third image'},
                {sources: 'img/04.webp', description: 'fourth image'},
                {sources: 'img/05.webp', description: 'fifth image'}
            ]
        }
    },
    methods:{
        // Funzione che imposta il mio indice al valore dell'immagine cliccata
        setActiveSlide(index){
            this.activeSlide = index
        },
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