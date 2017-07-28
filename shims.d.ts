// Auto-generated. Do not edit.
declare namespace display {

    /**
     * Sets the x position of the cursor.
     * @ param x number between 0 and 83 (inclusive).
     */
    //% blockId="display_set_x_position" block="set x position to %x"
    //% x.min=0 x.max=83 shim=display::setXPosition
    function setXPosition(x: number): void;

    /**
     * sets the y position of the cursor.
     * @ param y number between 0 and 5 (inclusive).
     */
    //% blockId="display_set_y_position" block="set y position to %y"
    //% y.min=0 y.max=5 shim=display::setYPosition
    function setYPosition(y: number): void;

    /**
     * Sets boths the x and y position of the cursor.
     * @ param x number between 0 and 83 (inclusive).
     * @ param y number between 0 and 5 (inclusive).
     */
    //% blockId="display_set_x_y_position" block="set x to %x| and y to %y"
    //% x.min=0 x.max=83
    //% y.min=0 y.max=5 shim=display::setXYPosition
    function setXYPosition(x: number, y: number): void;

    /**
     * Clears the display.
     */
    //% blockId="display_clear" block="clear the display" shim=display::clear
    function clear(): void;

    /**
     * Turns the backlight on (1) or off (0)
     */
    //% blockId="display_set_backlight" block="set backlight"
    //% value.min=0 value.max=1 shim=display::setBacklight
    function setBacklight(value: number): void;

    /**
     * Print the provided text. Supports newline in JavaScript 
     * (but probably not in block-editor due to handling of strings),
     * continues on next line if the line is too long,
     * wont begin a character on one line, to finis on the next.
     * @ param text The text to print.
     * @ note If the text continues below the bottom of the screen, it will wrap around to the top.
     */
    //% blockId="display_print" block="print %text" shim=display::print
    function print(text: string): void;
}

// Auto-generated. Do not edit. Really.
