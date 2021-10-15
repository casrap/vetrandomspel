let wacht = 0
input.onButtonPressed(Button.A, function () {
    game.pause()
    basic.showNumber(game.score())
    basic.clearScreen()
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    game.setScore(0)
})
basic.forever(function () {
    game.addScore(1)
    basic.pause(wacht)
})
basic.forever(function () {
    if (game.score() == 0) {
        wacht = 1000
    }
})
basic.forever(function () {
    if (game.score() == 20) {
        wacht = 950
    }
})
basic.forever(function () {
    if (game.score() == 40) {
        wacht = 850
    }
})
basic.forever(function () {
    if (game.score() == 60) {
        wacht = 700
    }
})
basic.forever(function () {
    if (game.score() == 90) {
        wacht = 550
    }
})
basic.forever(function () {
    if (game.score() == 120) {
        wacht = 400
    }
})
