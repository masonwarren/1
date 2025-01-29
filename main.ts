controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Bob.vy == 0) {
        Bob.vy = -152
    }
})
let Bob: Sprite = null
scene.setBackgroundColor(13)
Bob = sprites.create(img`
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
controller.moveSprite(Bob, 70, 0)
scene.cameraFollowSprite(Bob)
tiles.setCurrentTilemap(tilemap`level4`)
Bob.ay = 350
