function 右をむく () {
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 1023)
}
function 回転とめる () {
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function 左をむく () {
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function 止まる () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
}
function 後ろにすすむ () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    basic.showString("B")
}
function 前にすすむ () {
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 0)
    basic.showString("F")
}
let 赤外線センサー左の値 = 0
let 赤外線センサー右の値 = 0
pins.digitalWritePin(DigitalPin.P12, 1)
basic.forever(function () {
    赤外線センサー右の値 = pins.analogReadPin(AnalogPin.P1)
    赤外線センサー左の値 = pins.analogReadPin(AnalogPin.P2)
    if (赤外線センサー右の値 > 800 || 赤外線センサー左の値 > 800) {
        basic.clearScreen()
        回転とめる()
        後ろにすすむ()
    } else if (赤外線センサー右の値 > 200 && 赤外線センサー左の値 > 200) {
        basic.clearScreen()
        回転とめる()
        前にすすむ()
    } else if (赤外線センサー右の値 < 200 && 赤外線センサー左の値 > 200) {
        basic.clearScreen()
        左をむく()
        前にすすむ()
    } else if (赤外線センサー右の値 > 200 && 赤外線センサー左の値 < 200) {
        basic.clearScreen()
        右をむく()
        前にすすむ()
    } else if (赤外線センサー右の値 < 100 && 赤外線センサー左の値 < 100) {
        止まる()
        回転とめる()
        basic.showIcon(IconNames.Diamond)
    }
})
