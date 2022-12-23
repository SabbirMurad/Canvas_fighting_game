const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

canvasContext.fillRect(0,0,canvas.width,canvas.height);

const gravity = 0.7;

//creating the class that will create the players 
class Sprite{
  constructor({position,velocity,color,offset,canvas}){
    this.color = color;
    this.position = position;
    this.velocity = velocity;
    this.height = canvas.height/3;
    this.width = canvas.width/20;
    this.lastkey;
    this.offset = offset
    this.attackBox = {
      position :{
        x:this.position.x,
        y:this.position.y
      },
      width:canvas.width/5,
      height :canvas.height/10,
      offset:{
        x:offset.x,
        y:offset.y
      },
    }
    this.isAttacking
  }

  draw(){
    //playerBox
    canvasContext.fillStyle = this.color;
    canvasContext.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )

    //attackBox
    
    // if(this.isAttacking){
      canvasContext.fillStyle = "green";
      canvasContext.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height,
      )
    // }
  }

  update(){
    this.draw();

    this.attackBox.position.x = this.position.x -this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y;

    this.attackBox.offset.x = this.offset.x;
    this.attackBox.offset.y = this.offset.y;

    this.position.y+=this.velocity.y;
    this.position.x+=this.velocity.x;

    if(this.position.y + this.height + this.velocity.y>=canvas.height){
      this.velocity.y=0;
    }
    else{
      this.velocity.y+=gravity
    }
  }

  attack(){
    this.isAttacking = true;
    setTimeout(()=>{
      this.isAttacking = false;
    },100)
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
  },
  color:'red',
  offset:{
    x:0,
    y:0
  },
  canvas:{
    width : canvas.width,
    height : canvas.height
  }
})

//creating the player 2
const player2 = new Sprite({
  position:{
    x:800,
    y:0
  },
  velocity:{
    x:0,
    y:0
  },
  color:'blue',
  offset:{
    x:canvas.width/5 -canvas.width/20,
    y:0
  },
  canvas:{
    width : canvas.width,
    height : canvas.height
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

//looping animatin
function animate(){
  window.requestAnimationFrame(animate)
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  player1.update();
  player2.update();

  //player 1 movement
  player1.velocity.x = 0 ;
  if(keys.a.pressed && player1.lastkey ==='a'){
    player1.velocity.x = -5;
  }
  else if(keys.d.pressed && player1.lastkey ==='d'){
    player1.velocity.x = 5;
  }

  //player 2 movement
  player2.velocity.x = 0 ;
  if(keys.ArrowLeft.pressed && player2.lastkey ==='ArrowLeft'){
    player2.velocity.x = -5;
  }
  else if(keys.ArrowRight.pressed && player2.lastkey ==='ArrowRight'){
    player2.velocity.x = 5;
  }

  //detect for collision
  if( (player1.attackBox.position.x + player1.attackBox.width) >= player2.position.x && 
      player1.attackBox.position.x <= (player2.position.x + player2.width) &&
      (player1.attackBox.position.y + player1.attackBox.height) >= player2.position.y &&
      player1.attackBox.position.y <= (player2.position.y + player2.height) &&
      player1.isAttacking
    ){
    player1.isAttacking = false;
    console.log("player 2 hit");
  }

  if( (player2.attackBox.position.x + player2.attackBox.width) >= player1.position.x && 
      player2.attackBox.position.x <= (player1.position.x + player1.width) &&
      (player2.attackBox.position.y + player2.attackBox.height) >= player1.position.y &&
      player2.attackBox.position.y <= (player1.position.y + player1.height) &&
      player2.isAttacking
    ){
    player2.isAttacking = false;
    console.log("player 1 hit");
  }
}
animate()

window.addEventListener('keydown',(e)=>{
  switch (e.key){
    //player 1
    case 'd':
    keys.d.pressed = true
    player1.lastkey = 'd';
    break;
    case 'a':
    keys.a.pressed = true 
    player1.lastkey = 'a';
    break;
    case 'w' :
    player1.velocity.y = -20;
    break;
    case ' ' :
    player1.attack();
    break;
    //player 2 
    case 'ArrowRight':
    keys.ArrowRight.pressed = true;
    player2.lastkey = 'ArrowRight';
    break;
    case 'ArrowLeft':
    keys.ArrowLeft.pressed = true;
    player2.lastkey = 'ArrowLeft';
    break;
    case 'ArrowUp' :
    player2.velocity.y = -20;
    break;
    case '0':
    player2.attack();
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