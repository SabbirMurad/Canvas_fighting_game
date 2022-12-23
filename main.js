const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

canvasContext.fillRect(0,0,canvas.width,canvas.height);

const gravity = 0.2;

//creating the class that will create the players 
class Sprite{
  constructor({position,velocity}){
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
  }

  draw(){
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(this.position.x,this.position.y,50,this.height)
  }

  update(){
    this.draw();
    this.position.y+=this.velocity.y;
    this.position.x+=this.velocity.x;

    if(this.position.y + this.height + this.velocity.y>=canvas.height){
      this.velocity.y=0;
    }
    else{
      this.velocity.y+=gravity
    }
  }
}

// creating the player 1
const player1 = new Sprite({
  position:{
    x:0,
    y:0
  },
  velocity:{
    x:0,
    y:0
  }
})

//creating the player 2
const player2 = new Sprite({
  position:{
    x:400,
    y:0
  },
  velocity:{
    x:0,
    y:0
  }
})

//keys
const keys ={
  a:{
    pressed : false
  },
  d:{
    pressed : false
  },
  ArrowRight:{
    pressed : false
  },
  ArrowLeft:{
    pressed : false
  },
}

let lastkey;
let lastkey2;
//looping animatin
function animate(){
  window.requestAnimationFrame(animate)
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  player1.update();
  player2.update();

  player1.velocity.x = 0 ;
  if(keys.a.pressed && lastkey ==='a'){
    player1.velocity.x = -2.5;
  }
  else if(keys.d.pressed && lastkey ==='d'){
    player1.velocity.x = 2.5;
  }

  player2.velocity.x = 0 ;
  if(keys.ArrowLeft.pressed && lastkey2 ==='ArrowLeft'){
    player2.velocity.x = -2.5;
  }
  else if(keys.ArrowRight.pressed && lastkey2 ==='ArrowRight'){
    player2.velocity.x = 2.5;
  }
}

animate()

window.addEventListener('keydown',(e)=>{
  switch (e.key){
    case 'd':
    keys.d.pressed = true
    lastkey = 'd';
    break;
    case 'a':
    keys.a.pressed = true 
    lastkey = 'a';
    break;
    case 'w' :
    player1.velocity.y = -10;
    break;
    case 'ArrowRight':
    keys.ArrowRight.pressed = true;
    lastkey2 = 'ArrowRight';
    break;
    case 'ArrowLeft':
    keys.ArrowLeft.pressed = true;
    lastkey2 = 'ArrowLeft';
    break;
    case 'ArrowUp' :
    player2.velocity.y = -10;
    break;
  }
})
window.addEventListener('keyup',(e)=>{
  switch (e.key){
    case 'd':
    keys.d.pressed = false;
    break;
    case 'a':
    keys.a.pressed = false;
    break;
    case 'ArrowRight':
    keys.ArrowRight.pressed = false;
    break;
    case 'ArrowLeft':
    keys.ArrowLeft.pressed = false;
    break;
  }
})