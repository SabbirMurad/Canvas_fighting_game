//creating background
const background1 = new Sprite({
  position:{
    x:0,
    y:0
  },
  scale:1.13,
  imageSrc:'/game_assets/background/background_layer_1.png'
})
const background2 = new Sprite({
  position:{
    x:0,
    y:0
  },
  scale:1.13,
  imageSrc:'/game_assets/background/background_layer_2.png'
})
const background3 = new Sprite({
  position:{
    x:0,
    y:0
  },
  scale:1.13,
  imageSrc:'/game_assets/background/background_layer_3.png'
})

//creating the walls
const wall1 = new Sprite({
  position:{
    x:0+(canvas.width/7)*0,
    y:canvas.height/1.11
  },
  scale:.1,
  imageSrc:'/game_assets/walls/wall_4.png'
})
const wall2 = new Sprite({
  position:{
    x:0+(canvas.width/7)*1,
    y:canvas.height/1.11
  },
  scale:.1,
  imageSrc:'/game_assets/walls/wall_5.png'
})
const wall3 = new Sprite({
  position:{
    x:0+(canvas.width/7)*2,
    y:canvas.height/1.11
  },
  scale:.1,
  imageSrc:'/game_assets/walls/wall_4.png'
})
const wall4 = new Sprite({
  position:{
    x:0+(canvas.width/7)*3,
    y:canvas.height/1.11
  },
  scale:.1,
  imageSrc:'/game_assets/walls/wall_4.png'
})
const wall5 = new Sprite({
  position:{
    x:0+(canvas.width/7)*4,
    y:canvas.height/1.11
  },
  scale:.1,
  imageSrc:'/game_assets/walls/wall_4.png'
})
const wall6 = new Sprite({
  position:{
    x:0+(canvas.width/7)*5,
    y:canvas.height/1.11
  },
  scale:.1,
  imageSrc:'/game_assets/walls/wall_4.png'
})
const wall7 = new Sprite({
  position:{
    x:0+(canvas.width/7)*6,
    y:canvas.height/1.11
  },
  scale:.1,
  imageSrc:'/game_assets/walls/wall_4.png'
})
// //creating the decorations
const rock1 = new Sprite({
  position:{
    x:(canvas.width/10)*2.5,
    y:canvas.height/1.17
  },
  scale:.05,
  imageSrc:'/game_assets/decorations/rock_3.png'
})
const rock2 = new Sprite({
  position:{
    x:(canvas.width/1.08),
    y:canvas.height/1.235
  },
  scale:.09,
  imageSrc:'/game_assets/decorations/rock_3.png'
})
const rock3 = new Sprite({
  position:{
    x:(canvas.width/2),
    y:canvas.height/1.15
  },
  scale:.03,
  imageSrc:'/game_assets/decorations/rock_2.png'
})
const fence1 = new Sprite({
  position:{
    x:(canvas.width/6),
    y:canvas.height/1.24
  },
  scale:.09,
  imageSrc:'/game_assets/decorations/fence_1.png'
})
const fence2 = new Sprite({
  position:{
    x:0-(canvas.width/9),
    y:canvas.height/1.24
  },
  scale:.09,
  imageSrc:'/game_assets/decorations/fence_2.png'
})
const fence3 = new Sprite({
  position:{
    x:(canvas.width/3.05),
    y:canvas.height/1.24
  },
  scale:.09,
  imageSrc:'/game_assets/decorations/fence_2.png'
})

const grass1 = new Sprite({
  position:{
    x:(canvas.width/5.5),
    y:canvas.height/1.13
  },
  scale:.02,
  imageSrc:'/game_assets/decorations/grass_3.png'
})
const grass2 = new Sprite({
  position:{
    x:(canvas.width/3.6),
    y:canvas.height/1.13
  },
  scale:.02,
  imageSrc:'/game_assets/decorations/grass_3.png'
})
const sign1 = new Sprite({
  position:{
    x:(canvas.width/1.15),
    y:canvas.height/1.33
  },
  scale:.15,
  imageSrc:'/game_assets/decorations/sign.png'
})
//creating the shop
const shop = new AnimateSprite({
  frames:{
    framesTotal:6,
    frameRate:10
  },
  position:{
    x:(canvas.width/1.8),
    y:canvas.height/3.8
  },
  scale:.64,
  imageSrc:'/game_assets/decorations/shop_anim.png'
})
// creating the player 1
const player1 = new Fighter({
  direction : 'forward',
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
  sprites:{
    idle:{
      scale:.23,
      framesTotal:8,
      frameRate:10,
      forwardSrc:'game_assets/Martial_Hero/Sprites/Idle.png',
      backwardSrc:'game_assets/Martial_Hero/Sprites/Idle_backward.png'
    },
    run:{
      scale:.23,
      framesTotal:8,
      frameRate:10,
      forwardSrc:'game_assets/Martial_Hero/Sprites/Run.png',
      backwardSrc:'game_assets/Martial_Hero/Sprites/Run_backward.png'
    }
  },
})

//creating the player 2
const player2 = new Fighter({
  direction : 'backward',
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
    x:0,
    y:0
  },
  sprites:{
    idle:{
      scale:.23,
      framesTotal:8,
      frameRate:10,
      forwardSrc:'game_assets/Martial_Hero/Sprites/Idle.png',
      backwardSrc:'game_assets/Martial_Hero/Sprites/Idle_backward.png'
    },
    run:{
      scale:.23,
      framesTotal:8,
      frameRate:10,
      forwardSrc:'game_assets/Martial_Hero/Sprites/Run.png',
      backwardSrc:'game_assets/Martial_Hero/Sprites/Run_backward.png'
    }
  },
})