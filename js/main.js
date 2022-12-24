//creating background
const background1 = new Sprite({
  size:{
    height:canvas.height/1.15,
    width:canvas.width
  },
  position:{
    x:0,
    y:0
  },
  imageSrc:'/game_assets/background/background_layer_1.png'
})
const background2 = new Sprite({
  size:{
    height:canvas.height/1.15,
    width:canvas.width
  },
  position:{
    x:0,
    y:0
  },
  imageSrc:'/game_assets/background/background_layer_2.png'
})
const background3 = new Sprite({
  size:{
    height:canvas.height/1.15,
    width:canvas.width
  },
  position:{
    x:0,
    y:0
  },
  imageSrc:'/game_assets/background/background_layer_3.png'
})

//creating the walls
const wall1 = new Sprite({
  size:{
    height:canvas.height*0.15,
    width:canvas.width/5
  },
  position:{
    x:0+(canvas.width/5)*0,
    y:canvas.height/1.18
  },
  imageSrc:'/game_assets/walls/wall_4.png'
})
const wall2 = new Sprite({
  size:{
    height:canvas.height*0.15,
    width:canvas.width/5
  },
  position:{
    x:0+(canvas.width/5)*1,
    y:canvas.height/1.18
  },
  imageSrc:'/game_assets/walls/wall_5.png'
})
const wall3 = new Sprite({
  size:{
    height:canvas.height*0.15,
    width:canvas.width/5
  },
  position:{
    x:0+(canvas.width/5)*2,
    y:canvas.height/1.18
  },
  imageSrc:'/game_assets/walls/wall_4.png'
})
const wall4 = new Sprite({
  size:{
    height:canvas.height*0.15,
    width:canvas.width/5
  },
  position:{
    x:0+(canvas.width/5)*3,
    y:canvas.height/1.18
  },
  imageSrc:'/game_assets/walls/wall_4.png'
})
const wall5 = new Sprite({
  size:{
    height:canvas.height*0.15,
    width:canvas.width/5
  },
  position:{
    x:0+(canvas.width/5)*4,
    y:canvas.height/1.18
  },
  imageSrc:'/game_assets/walls/wall_4.png'
})
//creating the decorations
const rock1 = new Sprite({
  size:{
    height:canvas.height/15,
    width:canvas.width/15
  },
  position:{
    x:(canvas.width/10)*1.5,
    y:canvas.height/1.275
  },
  imageSrc:'/game_assets/decorations/rock_3.png'
})
const rock2 = new Sprite({
  size:{
    height:canvas.height/8,
    width:canvas.width/8
  },
  position:{
    x:(canvas.width/1.08),
    y:canvas.height/1.38
  },
  imageSrc:'/game_assets/decorations/rock_3.png'
})
const rock3 = new Sprite({
  size:{
    height:canvas.height/25,
    width:canvas.width/25
  },
  position:{
    x:(canvas.width/2),
    y:canvas.height/1.23
  },
  imageSrc:'/game_assets/decorations/rock_2.png'
})
const fence1 = new Sprite({
  size:{
    height:canvas.height/8,
    width:canvas.width/5
  },
  position:{
    x:(canvas.width/7),
    y:canvas.height/1.38
  },
  imageSrc:'/game_assets/decorations/fence_1.png'
})
const fence2 = new Sprite({
  size:{
    height:canvas.height/8,
    width:canvas.width/5
  },
  position:{
    x:0-(canvas.width/7),
    y:canvas.height/1.38
  },
  imageSrc:'/game_assets/decorations/fence_2.png'
})
const fence3 = new Sprite({
  size:{
    height:canvas.height/8,
    width:canvas.width/5
  },
  position:{
    x:(canvas.width/3.1),
    y:canvas.height/1.38
  },
  imageSrc:'/game_assets/decorations/fence_2.png'
})

const grass1 = new Sprite({
  size:{
    height:canvas.height/40,
    width:canvas.width/35
  },
  position:{
    x:(canvas.width/5.05),
    y:canvas.height/1.211
  },
  imageSrc:'/game_assets/decorations/grass_3.png'
})
const sign1 = new Sprite({
  size:{
    height:canvas.height/4.8,
    width:canvas.width/12
  },
  position:{
    x:(canvas.width/1.15),
    y:canvas.height/1.55
  },
  imageSrc:'/game_assets/decorations/sign.png'
})
const grass2 = new Sprite({
  size:{
    height:canvas.height/40,
    width:canvas.width/30
  },
  position:{
    x:(canvas.width/2.65),
    y:canvas.height/1.211
  },
  imageSrc:'/game_assets/decorations/grass_3.png'
})
//creating the shop
const shop = new AnimateSprite({
  size:{
    height:canvas.height/2.2,
    width:canvas.width/3.3
  },
  position:{
    x:(canvas.width/1.8),
    y:canvas.height/2.55
  },
  imageSrc:'/game_assets/decorations/shop.png'
})
// creating the player 1
const player1 = new Fighter({
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
const player2 = new Fighter({
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

  background1.update();
  background2.update();
  background3.update();

  fence1.update();
  fence2.update();
  fence3.update();

  shop.update();

  wall1.update();
  wall2.update();
  wall3.update();
  wall4.update();
  wall5.update();

  sign1.update();

  rock1.update();
  rock2.update();
  rock3.update();
  
  grass1.update();
  grass2.update();

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
    player2.helth-=10;
    player2Helth.querySelector('.yellow_foreground').style.width=player2.helth+'%';
    player2Helth.querySelector('.red_background').style.width=player2.helth+'%';
  }

  if(canAttack(player2,player1)){
    player2.isAttacking = false;
    player1.helth-=10;
    player1Helth.querySelector('.yellow_foreground').style.width=player1.helth+'%';
    player1Helth.querySelector('.red_background').style.width=player1.helth+'%';
  }

  //gameover
  if(player1.helth<=0 || player2.helth<=0){
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
