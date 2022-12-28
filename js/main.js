
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

  

  sign1.update();

  rock1.update();
  rock2.update();
  rock3.update();
  
  

  wall1.update();
  wall2.update();
  wall3.update();
  wall4.update();
  wall5.update();
  wall6.update();
  wall7.update();

  grass1.update();
  grass2.update();

  player1.update();
  player2.update();

  //individual sprite change
  if(player1.velocity.y<0){
    player1.currentSprite = player1.sprites.jump;
    console.log("jumping")
  }
  else if((keys.a.pressed|| keys.d.pressed) && 
    (player1.lastkey === 'a' ||player1.lastkey === 'd')){
      player1.currentSprite = player1.sprites.run;
  }
  else{
    player1.currentSprite = player1.sprites.idle;
  }

  if((keys.ArrowLeft.pressed|| keys.ArrowRight.pressed) && 
    (player2.lastkey === 'ArrowLeft' ||player2.lastkey === 'ArrowRight')){
      player2.currentSprite = player2.sprites.run;
    }
    else{
      player2.currentSprite = player2.sprites.idle;
    }

  //player 1 movement
  player1.velocity.x = 0 ;
  if(keys.a.pressed && player1.lastkey ==='a'){
    player1.velocity.x = -canvas.width/210;
  }
  else if(keys.d.pressed && player1.lastkey ==='d'){
    player1.velocity.x = canvas.width/210;
  }

  //player 2 movement
  player2.velocity.x = 0 ;
  if(keys.ArrowLeft.pressed && player2.lastkey ==='ArrowLeft'){
    player2.velocity.x = -canvas.width/210;
  }
  else if(keys.ArrowRight.pressed && player2.lastkey ==='ArrowRight'){
    player2.velocity.x = canvas.width/210;
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
      if(player1.jumpCount==2){
        player1.canJump=false;
      }
      if(player1.canJump){
        player1.jumpCount++;
        player1.velocity.y = -canvas.height/50;
      }
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
      if(player2.jumpCount==2){
        player2.canJump=false;
      }
      if(player2.canJump){
        player2.jumpCount++;
        player2.velocity.y = -canvas.height/50;
      }
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
