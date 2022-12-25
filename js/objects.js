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
    height:canvas.height/1.7,
    width:canvas.width/3.3
  },
  frames:{
    framesTotal:6,
    frameRate:10
  },
  position:{
    x:(canvas.width/1.8),
    y:canvas.height/3.8
  },
  imageSrc:'/game_assets/decorations/shop_anim.png'
})
// creating the player 1
const player1 = new Fighter({
  position:{
    x:canvas.width/10,
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
  ratio:.28,
  sprites:{
    direction : 'forward',
    idle:{
      framesTotal:8,
      frameRate:10,
      forward:'game_assets/Martial_Hero/Sprites/Idle.png',
      backward:'game_assets/Martial_Hero/Sprites/Idle_backward.png'
    },
    run:{
      framesTotal:8,
      frameRate:1000,
      imageSrc:'game_assets/Martial_Hero/Sprites/Run.png',
    }
  },
})

//creating the player 2
const player2 = new Fighter({
  position:{
    x:canvas.width-200-canvas.width/10,
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
  size:{
    width : canvas.width/10,
    height : canvas.height/3.7
  },
  sprites:{
    idle:{
      framesTotal:8,
      frameRate:10,
      imageSrc:'game_assets/Martial_Hero/Sprites/Idle.png',
    },
    run:{
      framesTotal:8,
      frameRate:10,
      imageSrc:'game_assets/Martial_Hero/Sprites/Run.png',
    }
  },
})