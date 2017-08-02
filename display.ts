//% color=#ff471a icon="\uf26c"
namespace display {

    /**
     * Sets the x position of the cursor.
     * @param x number between 0 and 83 (inclusive).
     */
    //% blockId="display_set_x_position" block="set x position to %x"
    //% x.min=0 x.max=83 shim=display::setXPosition
    export function setXPosition(x: number): void {
        return
    }

    /**
     * sets the y position of the cursor.
     * @param y number between 0 and 5 (inclusive).
     */
    //% blockId="display_set_y_position" block="set y position to %y"
    //% y.min=0 y.max=5 shim=display::setYPosition
    export function setYPosition(y: number): void {
        return
    }

    /**
     * Sets boths the x and y position of the cursor.
     * @param x number between 0 and 83 (inclusive).
     * @param y number between 0 and 5 (inclusive).
     */
    //% blockId="display_set_x_y_position" block="set x to %x| and y to %y"
    //% x.min=0 x.max=83
    //% y.min=0 y.max=5 shim=display::setXYPosition
    export function setXYPosition(x: number, y: number): void {
        return
    }

    /**
     * Clears the display.
     */
    //% blockId="display_clear" block="clear the display" shim=display::clear
    export function clear(): void {
        return
    }

    /**
     * Turns the backlight on (1) or off (0)
     */
    //% blockId="display_set_backlight" block="set backlight %value"
    //% value.min=0 value.max=1 shim=display::setBacklight
    export function setBacklight(value: number): void {
        return
    }

    /**
     * Print the provided text. Supports newline in JavaScript 
     * (but probably not in block-editor due to handling of strings),
     * continues on next line if the line is too long,
     * wont begin a character on one line, to finis on the next.
     * @param text The text to print.
     * @note If the text continues below the bottom of the screen, it will wrap around to the top.
     */
    //% blockId="display_print" block="print %text" shim=display::print
    export function print(text: string): void {
        return
    }

    /**
     * Change what pins that is used for RST, CE and DC.
     */
    //% blockId="display_change_BUS_pins" block="set pins RST %RST| CE %CE| DC %DC"
    //% advanced=true shim=display::changeBusPins
    export function changeBusPins(RST: DigitalPin, CE: DigitalPin, DC: DigitalPin): void {
        return
    }

    /**
     * Change what pin that is used for LIGHT.
     */
    //% blockId="display_change_LIGHT_pins" block="set pin LIGHT %LIGHT"
    //% advanced=true shim=display::changeLightPin
    export function changeLightPin(LIGHT: DigitalPin): void {
        return
    }
}