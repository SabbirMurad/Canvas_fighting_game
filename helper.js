//necesarry properties
const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');
const gravity = 0.7;
const container = document.querySelector('.container');
let player1Helth = container.querySelector('.player1_helthbar');
let player2Helth = container.querySelector('.player2_helthbar');
let timer = container.querySelector('.timer');
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
//helth remaining
let player1HelthRemain=100,player2HelthRemain=100;

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
    }
  },1000)
}
countdown();