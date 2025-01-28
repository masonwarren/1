scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
    . . . . f f f f f f . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . f f e e f f . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . e f f f f e . . . . . . 
    . . . . . e e e e . . . . . . . 
    . . c c c c c c c c c c . . . . 
    . . c c c c c c c c c c . . . . 
    . . c c c c c c c c c c . . . . 
    . . c c c c c c c c c c . . . . 
    . . e e 8 8 8 8 8 8 e e . . . . 
    . . . . 8 8 8 8 8 8 . . . . . . 
    . . . . 8 8 . . 8 8 . . . . . . 
    . . . f f f . . f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level4`)
