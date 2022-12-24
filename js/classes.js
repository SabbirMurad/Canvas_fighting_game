//fighter class ---------------------------
class Fighter{
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
    this.helth=100
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


// 
class Sprite{
  constructor({position,canvas , imageSrc}){

    this.position = position;
    this.height = canvas.height/3.5;
    this.width = canvas.width/25;
    this.image = new Image()
    this.image.src = imageSrc
  }

  draw(){
    canvasContext.drawImage(this.image,this.position.x,this.position.y)
  }

  update(){
    this.draw();
  }
}