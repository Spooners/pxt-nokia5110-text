// tests go here; this will not be compiled when this package is used as a library
display.changeBusPins(DigitalPinEnum.P3, DigitalPinEnum.P4, DigitalPinEnum.P5)
display.changeSPIPins(DigitalPinEnum.P6, DigitalPinEnum.P7, DigitalPinEnum.P16)
display.changeLightPin(DigitalPinEnum.P8)
display.print("Dette er en lang tekst som\nmaa printes over mange linjer.")
//display.setXYPosition(20, 5)
//display.print("Mer tekst")
display.setBacklight(1)
/*
display.setXYPosition(1,1)
while (true) {
    display.setBacklight(1)
    basic.pause(100)
    display.setBacklight(0)
    basic.pause(100)
}
*/
// TODO: FIX SÅ MAN KAN WRITE