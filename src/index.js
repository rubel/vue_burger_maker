const app = Vue.createApp(
    {
        data(){
            return{
                appName: "Burger Maker",
                score: 0,
                showCool: false,
                showLost: false,
                burgarParts: [],
                madeBurger: [],
                orderedBurger: [0,2,4,6,5,2,7,2,1],
                allParts: [
                    {
                        name: "Bun Top",
                        image: "./images/top.png"
                    },
                    {
                        name: "Bun Bottom",
                        image: "./images/bottom.png"
                    },
                    {
                        name: "Cheese",
                        image: "./images/cheese.png"
                    },
                    {
                        name: "Egg",
                        image: "./images/egg.png"
                    },
                    {
                        name: "Meat",
                        image: "./images/meat.png"
                    },
                    {
                        name: "Meat Stripe ",
                        image: "./images/meat2.png"
                    },
                    {
                        name: "Onion",
                        image: "./images/onion.png"
                    },
                    {
                        name: "Tikka",
                        image: "./images/tikka.png"
                    },
                    {
                        name: "Tomato",
                        image: "./images/tomatto.png"
                    }
                ]
            }
        },
        methods:{
            addBurgerPart(part){
                this.madeBurger = [part,...this.madeBurger];
                if(this.burgerCorrectSoFar()){
                    if(this.madeBurger.length === this.orderedBurger.length){
                        this.score++;
                        this.orderedBurger = [];
                        this.madeBurger = [];
                        this.addTakenAnimation();
                    }
                }else{
                    this.score = 0;
                    this.orderedBurger = [];
                    this.madeBurger = [];
                    this.showLost = true;
                }
            },
            makeRandomOrder(){
                let numParts = Math.floor(Math.random() * 5);
                numParts+=3;
                console.log(numParts);
                let newOrder = [0];
                for (let i = 0; i < numParts; i++) {
                    let part = Math.floor(Math.random()* 6)+2;
                    newOrder.push(part);
                    
                }
                newOrder.push(1);
                this.orderedBurger = newOrder;
            },
            addTakenAnimation(){
                this.showCool = true;

                setTimeout(() => {
                    this.showCool = false;
                    this.makeRandomOrder();
                }, 1200);
            },
            getBurgerPartById(id){
                return this.allParts[id];
            },
            burgerCorrectSoFar(){
                for (let index = 0; index < this.madeBurger.length; index++) {
                    if(this.madeBurger[index] != this.orderedBurger[this.orderedBurger.length-this.madeBurger.length+index]){
                        return false;
                    }
                }
                return true;
            }
        },
        computed: {
        }
    }
);

app.mount("#app");