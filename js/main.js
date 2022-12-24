canvasContext.fillRect(0,0,canvas.width,canvas.height);

//creating the class that will create the players 
class Sprite{
  constructor({position,velocity,color,offset,canvas}){
    this.color = color;
    this.position = position;
    this.velocity = velocity;
    this.height = canvas.height/3.5;
    this.width = canvas.width/25;
    this.lastkey;
    this.offset = offset
    this.attackBox = {
      position :{
        x:this.position.x,
        y:this.position.y
      },
      width:canvas.width/10,
      height :canvas.height/15,
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
    
    if(this.isAttacking){
      canvasContext.fillStyle = "green";
      canvasContext.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height,
      )
    }
  }

  update(){
    this.draw();

    this.attackBox.position.x = this.position.x -this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y;

    this.attackBox.offset.x = this.offset.x;
    this.attackBox.offset.y = this.offset.y;
    if(this.position.y+this.velocity.y>=0){
      this.position.y+=this.velocity.y;
    }
    if( 
      this.position.x+this.velocity.x>=0 &&
      this.position.x+this.width+this.velocity.x <= canvas.width
    ){
      this.position.x+=this.velocity.x;
    }

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
    x:200,
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
    x:canvas.width-200-canvas.width/25,
    y:0
  },
  velocity:{
    x:0,
    y:0
  },
  color:'blue',
  offset:{
    x:canvas.width/10 -canvas.width/25,
    y:0
  },
  canvas:{
    width : canvas.width,
    height : canvas.height
  }
})

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
  if(canAttack(player1,player2)){
    player1.isAttacking = false;
    player2HelthRemain-=10;
    player2Helth.querySelector('.yellow_foreground').style.width=player2HelthRemain+'%';
    player2Helth.querySelector('.red_background').style.width=player2HelthRemain+'%';
  }

  if(canAttack(player2,player1)){
    player2.isAttacking = false;
    player1HelthRemain-=10;
    player1Helth.querySelector('.yellow_foreground').style.width=player1HelthRemain+'%';
    player1Helth.querySelector('.red_background').style.width=player1HelthRemain+'%';
  }

  //gameover
  if(player1HelthRemain<=0 || player2HelthRemain<=0){
    gameover();
  }
}
animate()
//movements and attacts on key press 
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