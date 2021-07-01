const app = Vue.createApp({
    data(){
        return {
            product : 'Shoes',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.camt.cmu.ac.th',
            inStock: true,
            inventory : 100,
            onSale: true,
            details: ['50% cotton','30% wool','20% polyester'],
            variants : [
                {id:2234,color:'green',image: './assets/images/socks_green.jpg'},
                {id:2235,color:'blue',image: './assets/images/socks_blue.jpg'}
            ],
            size:['S','M','L'],
            cart:0,
             
        }
    },
    methods : {
        addToCart(){
            this.cart += 1
        },
        updateImage(path){
            this.image = path;
        },
        updateStock(){
            this.inStock = !this.inStock;
        }
    }
});