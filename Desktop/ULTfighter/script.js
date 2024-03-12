// class constructers 

/*class NPC {
    constructor(name, age, quote) {
        this.name = name;
        this.age = age;
        this.quote = quote;
        this.alive = true;
    }
    kill() {
        this.alive = false
    }
    res() {
        this.alive = true
    }
}

let jamal = new NPC("Jamal", 19, "Hello, traveller");
console.log(jamal);
let josh = new NPC("Joshua", 51, "Sup...");
console.log(josh);
let light = new NPC("Light Yagami", 17, "What is... your name?");
console.log(light);*/


var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height)

let gravity = 0.2

class Sprite{
    constructor({postion, velocity}){
        this.postion = postion
        this.velocity = velocity
        this.height = 150
        this.attackBox ={
            postion: this.postion,
            width: 100,
            height: 50,
        }

    }

    draw(color) {
        c.fillStyle = color
        c.fillRect(this.postion.x, this.postion.y, 50, this.height)

        //attack box
        c.fillStyle = 'silver'
        c.fillRect(this.attackBox.postion.x, this.attackBox.postion.y, this.attackBox.width, this.attackBox.height)
    }

    update(color) {
        this.draw(color)
        this.postion.x += this.velocity.x
        this.postion.y += this.velocity.y
        if(this.postion.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
        } else {
            this.velocity.y += gravity
        }
}
}
let player = new Sprite({
    postion:{

    x:1,
    y:0
},
velocity:{
    x:0,
    y:0
}
})


let enemy = new Sprite({
    postion:{

    x:400,
    y:100
},
velocity:{
    x:0,
    y:0
}
})


function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update("orange")
    enemy.update("blue")
    
}

animate()

window.addEventListener('keydown', (event) => {
    console.log(event.key);
    if(event.key == "d"){
        player.velocity.x = player.velocity.x + 1
    }
    if(event.key == "a"){
        player.velocity.x = player.velocity.x + -1
    }
    if(event.key == " " || event.key == "w"){
        player.velocity.y = player.velocity.y + -5
    }
    if(event.key == "ArrowRight"){
        enemy.velocity.x = enemy.velocity.x + 1
    }
    if(event.key == "ArrowLeft"){
        enemy.velocity.x = enemy.velocity.x + -1
    }
    if(event.key == "ArrowUp"){
        enemy.velocity.y = enemy.velocity.y + -5
    }
})

window.addEventListener('keyup', (event) => {
    console.log(event.key);
    if(event.key == "d"){
        player.velocity.x = 0
    }
    if(event.key == "a"){
        player.velocity.x = 0
    }
    if(event.key == "ArrowRight"){
        enemy.velocity.x = 0
    }
    if(event.key == "ArrowLeft"){
        enemy.velocity.x = 0
    }
})


console.log(player)
console.log(enemy)