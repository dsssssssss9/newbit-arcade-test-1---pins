controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    colorbit_51bit.clear()
    colorbit_51bit.show()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    colorbit_51bit.showColor(colorbit.colors(BitColors.Red))
    colorbit_51bit.show()
})
let colorbit_51bit: colorbit.Strip = null
let PinNo = 2
let mySprite = sprites.create(img`
    .............ccfff..............
    ...........ccddbcf..............
    ..........ccddbbf...............
    ..........fccbbcf...............
    .....fffffccccccff.........ccc..
    ...ffbbbbbbbcbbbbcfff....ccbbc..
    ..fbbbbbbbbcbcbbbbcccff.cdbbc...
    ffbbbbbbffbbcbcbbbcccccfcdbbf...
    fbcbbb11ff1bcbbbbbcccccffbbf....
    fbbb11111111bbbbbcccccccbbcf....
    .fb11133cc11bbbbcccccccccccf....
    ..fccc31c111bbbcccccbdbffbbcf...
    ...fc13c111cbbbfcddddcc..fbbf...
    ....fccc111fbdbbccdcc.....fbbf..
    ........ccccfcdbbcc........fff..
    .............fffff..............
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
colorbit_51bit = colorbit.initColorBit(PinNo, BitColorMode.RGB)
colorbit_51bit.setBrightness(32)
colorbit_51bit.clear()
colorbit_51bit.show()
game.onUpdate(function () {
    controller.moveSprite(mySprite)
})
