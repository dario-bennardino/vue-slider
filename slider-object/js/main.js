const { createApp } = Vue;

createApp({
    data(){
        return{
            images: [
                'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
                'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
                'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
                'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
                'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
            ],
            counter: 0
        }
    },

    methods: {
        nextPrev(isNext){
            //se isNext è true incremento altrimenti decremento 

            isNext ? this.counter++ : this.counter--;

            //controllo la validità del counter
            if(this.counter === this.images.length){
                this.counter = 0
            }else if(this.counter < 0){
                this.counter = this.images.length - 1;
            }
        },
        // autoPlay(){
        //     setInterval{ ()=> this.nextPrev(true), 2000 }
        // }
    },

    mounted(){
        // this.autoplay()
    }
}).mount('#app')





