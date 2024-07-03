radio.onReceivedNumber(function (receivedNumber) {
    v = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(-1)
})
let v = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
radio.setGroup(1)
basic.forever(function () {
    if (v == 1) {
    	
    } else if (v == -1) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 50)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 50)
        basic.showString("V")
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 50)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 50)
        basic.showString("R")
    } else {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    }
})
