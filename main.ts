basic.forever(function () {
    serial.writeValue("acc-x", input.acceleration(Dimension.Y))
})
