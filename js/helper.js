//necesarry properties
const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');
const gravity = 0.7;
const containerInfo = document.querySelector('.container_info');
const gameOverText = containerInfo.querySelector('.game_over_text');
const reloadBtn = containerInfo.querySelector('.reload_button');

const containerHelth = document.querySelector('.container_helthbar');
let player1Helth = containerHelth.querySelector('.player1_helthbar');
let player2Helth = containerHelth.querySelector('.player2_helthbar');
let timer = containerHelth.querySelector('.timer');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//helth remaining
let player1HelthRemain=100,player2HelthRemain=100;
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
let timeCount = 9
timer.innerHTML=timeCount;
function countdown(){
  let counting = setInterval(()=>{
    timeCount--;
    timer.innerHTML=timeCount;
    if(timeCount<=0){
      clearInterval(counting);
      gameover();
    }
  },1000)
}
countdown();

//gameover
function gameover(){
  if(player1HelthRemain===player2HelthRemain){
    containerInfo.style.display='flex';
    gameOverText.innerText=`Draw`;
  }
  else if(player1HelthRemain<=player2HelthRemain){
    containerInfo.style.display='flex';
    gameOverText.innerHTML=`player 2 wins`;
  }
  else{
    containerInfo.style.display='flex';
    gameOverText.innerHTML=`player 1 wins`;
  }
}

// reload game
reloadBtn.addEventListener('click',()=>{
  containerInfo.style.display='none';
})