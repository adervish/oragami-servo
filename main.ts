function doy () {
    return Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 0, 1023, 0, 180)
}
radio.onReceivedValue(function (name, value) {
    serial.writeLine("" + name + value)
    if (name == "s1") {
        servos.P2.setAngle(value)
    }
    if (name == "s2") {
        servos.P1.setAngle(value)
    }
})
function doX () {
    return Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 0, 1023, 0, 180)
}
radio.setGroup(1)
joystickbit.Vibration_Motor(100)
basic.forever(function () {
    radio.sendValue("s1", doX())
    radio.sendValue("s2", doy())
})
