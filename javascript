input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(0x65471f)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.photonFlip()
})
input.touchA6.onEvent(ButtonEvent.Click, function () {
    if (true) {
        while (true) {
            light.setAll(light.rgb(153, 51, 255))
            light.photonForward(1)
            pause(1000)
            light.setAll(light.rgb(255, 51, 204))
            light.photonForward(1)
            pause(1000)
        }
    } else {
        light.clear()
    }
})
input.touchA4.onEvent(ButtonEvent.Click, function () {
    if (true) {
        while (true) {
            light.setAll(light.rgb(0, 102, 255))
            light.photonForward(1)
            pause(1000)
            light.setAll(light.rgb(102, 255, 255))
            light.photonForward(1)
            pause(1000)
        }
    } else {
        light.clear()
    }
})
input.touchA1.onEvent(ButtonEvent.Click, function () {
    if (true) {
        while (true) {
            light.setAll(light.rgb(255, 51, 0))
            light.photonForward(1)
            pause(1000)
            light.setAll(light.rgb(255, 204, 0))
            light.photonForward(1)
            pause(1000)
        }
    } else {
        light.clear()
    }
})
input.touchA2.onEvent(ButtonEvent.Click, function () {
    if (true) {
        while (true) {
            light.setAll(light.rgb(51, 255, 119))
            light.photonForward(1)
            pause(1000)
            light.setAll(light.rgb(0, 153, 204))
            light.photonForward(1)
            pause(1000)
        }
    } else {
        light.clear()
    }
})
music.baDing.play()
light.showAnimation(light.sparkleAnimation, 1000)
light.clear()
