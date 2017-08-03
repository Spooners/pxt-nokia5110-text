// tests go here; this will not be compiled when this package is used as a library
//display.changeBusPins(DigitalPin.P3, DigitalPin.P4, DigitalPin.P5)
//display.changeSPIPins(DigitalPin.P6, DigitalPin.P7, DigitalPin.P16) // Does not work
//display.changeLightPin(DigitalPin.P8)
display.changePins(DigitalPin.P3, DigitalPin.P4, DigitalPin.P5, DigitalPin.P8)
display.print("Dette er en lang tekst som\nmaa printes over mange linjer.")
display.setXYPosition(20, 5)
display.print("Mer tekst")
display.setBacklight(1)