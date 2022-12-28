//fighter class ---------------------------
class Fighter{
  constructor({
    position,
    velocity,
    color,
    offset,
    sprites,
    scale,
    direction
  }){
    //positions , size ,offsets etc
    this.color = color;
    this.position = position;
    this.height = canvas.height/4.5;
    this.width = canvas.width/30;
    this.offset = offset;
    
    //health , attack
    this.velocity = velocity;
    this.isAttacking
    this.helth=100
    this.canJump =true;
    this.jumpCount=0;
    this.lastkey;
    this.direction = direction

    //attackbox
    this.attackBox = {
      position :{
        x:this.position.x,
        y:this.position.y+(this.height/4)
      },
      width:this.width*3,
      height :this.height/4,
      offset:{
        x:offset.x,
        y:offset.y
      },
    }
    
    //sprites
    this.sprites=sprites
    let keys = Object.keys(this.sprites);
    for(let key of keys){
      this.sprites[key].images ={}
      let backwardImg = new Image();
      backwardImg.src = this.sprites[key].backwardSrc
      let forwardImg = new Image();
      forwardImg.src = this.sprites[key].forwardSrc
      this.sprites[key].images.backward =backwardImg
      this.sprites[key].images.forward =forwardImg
    }
    this.currentSprite = sprites.idle
    //images
    this.image = this.currentSprite.images[this.direction];
    this.framesTotal=this.currentSprite.framesTotal;
    this.currentFrame=0;
    this.frameHold=0;
    this.frameRate=this.currentSprite.frameRate;
    this.scale = this.currentSprite.scale;
    this.ratio =(canvas.height/this.image.height)*this.scale;
  }

  draw(){
    // canvasContext.fillStyle = this.color;
    // canvasContext.fillRect(
    //   this.position.x,
    //   this.position.y,
    //   this.width,
    //   this.height
    // )

    // canvasContext.fillStyle = "green";
    // canvasContext.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width,
    //   this.attackBox.height,
    // )
    
    canvasContext.drawImage(
      this.image,

      this.currentFrame*(this.image.width/this.framesTotal),
      0,
      this.image.width/this.framesTotal,
      this.image.height,
      
      this.position.x - ((this.image.width/this.framesTotal)*this.ratio)/2,
      this.position.y,
      (this.image.width/this.framesTotal)*this.ratio,
      (this.image.height)*this.ratio
    )
  }

  update(){
    this.draw();

    this.image = this.currentSprite.images[this.direction];
    this.framesTotal=this.currentSprite.framesTotal;
    this.frameRate=this.currentSprite.frameRate;
    this.ratio =(canvas.height/this.image.height)*this.currentSprite.scale;

    //changing frames
    this.frameHold++;
    if(this.frameHold>this.frameRate){
      this.currentFrame++
      this.frameHold=0;
    }
    if(this.currentFrame===this.framesTotal){
      this.currentFrame=0;
    }

    //changng direction player 1
    if(this.lastkey === 'a'){
      this.attackBox.offset.x = this.attackBox.width - this.width;
      this.direction = 'backward'
    }
    else if(this.lastkey ==='d'){
      this.direction='forward';
    }

    //changng direction player 2
    if(this.lastkey === 'ArrowRight'){
      this.attackBox.offset.x=0;
      this.direction='forward';
    }
    else if(this.lastkey === 'ArrowLeft'){
      this.attackBox.offset.x = this.attackBox.width - this.width;
      this.direction = 'backward'
    }

    //moving attackbox with player
    this.attackBox.position.x = this.position.x -this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y+(this.height/4);
    this.attackBox.offset.x = this.offset.x;
    this.attackBox.offset.y = this.offset.y;

    if(this.position.y+this.velocity.y>=0){
      this.position.y+=this.velocity.y;
    }

    //stoping player to go outside the canvas width
    if( 
      this.position.x+this.velocity.x>=0 &&
      this.position.x+this.width+this.velocity.x <= canvas.width
    ){
      this.position.x+=this.velocity.x;
    }

    //using gravity to pull down player unless they are allreay on the ground
    if(this.position.y + this.height + this.velocity.y>=canvas.height/1.11){
      this.velocity.y=0;
      this.canJump = true;
      this.jumpCount = 0;
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


// 
class Sprite{
  constructor({position,size , imageSrc ,scale}){
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.ratio =(canvas.height/this.image.height)*this.scale;
  }

  draw(){
    canvasContext.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.image.width*this.ratio,
      this.image.height*this.ratio
    )
  }

  update(){
    this.draw();
  }
}
class AnimateSprite{
  constructor({position, imageSrc , frames,scale}){
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.framesTotal=frames.framesTotal;
    this.currentFrame=0;
    this.frameHold=0;
    this.frameRate=frames.frameRate;
    this.scale = scale;
    this.ratio =(canvas.height/this.image.height)*this.scale;
  }
  draw(){
    canvasContext.drawImage(
      this.image,

      this.currentFrame*(this.image.width/this.framesTotal),
      0,
      this.image.width/this.framesTotal,
      this.image.height,

      this.position.x,
      this.position.y,
      (this.image.width/this.framesTotal)*this.ratio,
      this.image.height*this.ratio
    )
  }

  update(){
    this.draw();
    this.frameHold++;
    if(this.frameHold>this.frameRate){
      this.currentFrame++
      this.frameHold=0;
    }
    if(this.currentFrame===this.framesTotal){
      this.currentFrame=0;
    }
  }
}