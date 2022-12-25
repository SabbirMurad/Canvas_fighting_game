//fighter class ---------------------------
class Fighter{
  constructor({
    position,
    velocity,
    color,
    offset,
    sprites,
    ratio,
    direction
  }){
    //positions , size ,offsets etc
    this.canJump =true;
    this.jumpCount=0;
    this.color = color;
    this.ratio = ratio;
    this.position = position;
    this.velocity = velocity;
    this.height = canvas.height/3.7;
    this.width = canvas.width/25;
    this.lastkey;
    this.offset = offset;
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
    //health , attack
    this.isAttacking
    this.helth=100

    //sprites
    this.sprites=sprites
    this.currentSprite = sprites.idle
    this.direction = direction
    //images
    this.image = new Image();
    this.image.src = this.currentSprite[this.direction];
    this.framesTotal=this.currentSprite.framesTotal;
    this.currentFrame=0;
    this.frameHold=0;
    this.frameRate=this.currentSprite.frameRate;

    this.scale =(canvas.height/this.image.height)*this.ratio;
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
    //   canvasContext.fillRect(
    //     this.attackBox.position.x,
    //     this.attackBox.position.y,
    //     this.attackBox.width,
    //     this.attackBox.height,
    //   )
    
    canvasContext.drawImage(
      this.image,

      this.currentFrame*(this.image.width/this.framesTotal),
      0,
      this.image.width/this.framesTotal,
      this.image.height,
      
      this.position.x - ((this.image.width/this.framesTotal)*this.scale)/2,
      this.position.y,
      (this.image.width/this.framesTotal)*this.scale,
      (this.image.height)*this.scale
    )
  }

  update(){
    this.draw();
    if(keys.a.pressed|| keys.d.pressed){
      this.currentSprite = this.sprites.run;
    }
    else{
      this.currentSprite = this.sprites.idle;
    }
    this.image.src = this.currentSprite[this.direction];
    this.frameHold++;
    if(this.frameHold>this.frameRate){
      this.currentFrame++
      this.frameHold=0;
    }
    if(this.currentFrame===this.framesTotal){
      this.currentFrame=0;
    }

    if(this.lastkey === 'a'){
      this.attackBox.offset.x = this.attackBox.width - this.width;
      this.direction = 'backward'
    }
    else if(this.lastkey ==='d'){
      this.direction='forward';
    }

    
    if(this.lastkey === 'ArrowRight'){
      this.attackBox.offset.x=0;
    }
    else if(this.lastkey === 'ArrowLeft'){
    }
    this.attackBox.position.x = this.position.x -this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y+(this.height/4);

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

    if(this.position.y + this.height + this.velocity.y>=canvas.height/1.17){
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
  constructor({position,size , imageSrc}){
    this.position = position;
    this.height = size.height;
    this.width = size.width;
    this.image = new Image()
    this.image.src = imageSrc
  }

  draw(){
    canvasContext.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }

  update(){
    this.draw();
  }
}
class AnimateSprite{
  constructor({position,size, imageSrc , frames}){
    this.position = position;
    this.height = size.height;
    this.width = size.width;
    this.image = new Image();
    this.image.src = imageSrc;
    this.framesTotal=frames.framesTotal;
    this.currentFrame=0;
    this.frameHold=0;
    this.frameRate=frames.frameRate;
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
      this.width,
      this.height
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