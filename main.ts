scene.onOverlapTile(SpriteKind.Player, assets.tile`empty cave`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    truck.vy = -200
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes-up`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.over(false)
})
let truck: Sprite = null
truck = sprites.create(assets.image`truck2`, SpriteKind.Player)
truck.ay = 500
truck.vx = 100
animation.runImageAnimation(
truck,
assets.animation`truck2 animated`,
100,
true
)
scene.cameraFollowSprite(truck)
music.play(music.createSong(hex`0078000408020400001c00010a006400f401640000040000000000000000000000000005000004190010001800012020002800010830003800011238004000020a2505001c000f0a006400f4010a00000400000000000000000000000000000000020c0000000800011618002000010a06001c00010a006400f4016400000400000000000000000000000000000000020c0010001800010828003000010608001c000e050046006603320000040a002d000000640014000132000201000232000000080002202908001000020a2710001800012518002000012020002800012428003000012730003800012438004000011d`), music.PlaybackMode.LoopingInBackground)
