//necesarry properties
const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');
canvasContext.fillRect(0,0,canvas.width,canvas.height);
const gravity = 0.7;
const containerInfo = document.querySelector('.container_info');
const gameOverText = containerInfo.querySelector('.game_over_text');
const reloadBtn = containerInfo.querySelector('.reload_button');

const containerHelth = document.querySelector('.container_helthbar');
let player1Helth = containerHelth.querySelector('.player1_helthbar');
let player2Helth = containerHelth.querySelector('.player2_helthbar');
let timer = containerHelth.querySelector('.timer');

let totalTime =10;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
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

//check if can attack
function canAttack(attacker,defender){
  return (
    (attacker.attackBox.position.x + attacker.attackBox.width) >= defender.position.x && 
    attacker.attackBox.position.x <= (defender.position.x + defender.width) &&
    (attacker.attackBox.position.y + attacker.attackBox.height) >= defender.position.y &&
    attacker.attackBox.position.y <= (defender.position.y + defender.height) &&
    attacker.isAttacking
  );
}

//timer function
let timeCount = totalTime
timer.innerHTML=timeCount;
let counting
function countdown(){
  counting = setInterval(()=>{
    timeCount--;
    timer.innerHTML=timeCount;
    if(timeCount<=0){
      gameover();
    }
  },1000)
}
countdown();

//gameover
function gameover(){
  clearInterval(counting);
  containerInfo.style.display='flex';
  if(player1.helth===player2.helth){
    gameOverText.innerText=`Draw`;
  }
  else if(player1.helth<=player2.helth){
    gameOverText.innerHTML=`player 2 wins`;
  }
  else{
    gameOverText.innerHTML=`player 1 wins`;
  }
}

// reload game
reloadBtn.addEventListener('click',()=>{
  containerInfo.style.display='none';
  timeCount =totalTime;
  timer.innerHTML=timeCount;

  player1.helth=100;
  player2.helth=100;
  player1Helth.querySelector('.yellow_foreground').style.width='100%';
  player1Helth.querySelector('.red_background').style.width='100%';
  player2Helth.querySelector('.yellow_foreground').style.width='100%';
  player2Helth.querySelector('.red_background').style.width='100%';

  countdown();

  player1.position.x=200;
  player2.position.x=canvas.width-200-canvas.width/25;
})