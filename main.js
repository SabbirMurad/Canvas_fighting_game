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

//looping animatin
function animate(){
  window.requestAnimationFrame(animate)
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  player1.update();
  player2.update();
}

animate()

window.addEventListener('keydown',(e)=>{
  switch (e.key){
    case 'd':

    break;

  }
})