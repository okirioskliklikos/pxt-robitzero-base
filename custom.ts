enum KeyestudioPort {
    //% block="P0"
    P0,
    //% block="P1/P2"
    P1P2,
    //% block="P8/P3/P4"
    P8P3P4,
    //% block="P10"
    P10,
    //% block="P6/P7"
    P6P7,
    //% block="P5"
    P5,
    //% block="P11"
    P11,
    //% block="P12"
    P12,
    //% block="P9"
    P9
}

namespace rb0base {

    /* 
     * Get Pin From Keyestudio Microbit Base Shield
     * the user can specify the pin position not only 1 but 2 or 3 also in case he wants a different pin from 
     * the main pin of the port
     */
    export function getPinFromKeyestudioPort(port: KeyestudioPort, pin_pos: number = 1): DigitalPin {
        switch (port) {
            case KeyestudioPort.P0:
                return DigitalPin.P0;
                break;
            case KeyestudioPort.P1P2:
                return (pin_pos === 2 ? DigitalPin.P2 : DigitalPin.P1);
                break;
            case KeyestudioPort.P8P3P4:
                return (pin_pos === 3 ? DigitalPin.P4 : (pin_pos === 2 ? DigitalPin.P3 : DigitalPin.P8 ));
                break;
            case KeyestudioPort.P10:
                return DigitalPin.P10;
                break;
            case KeyestudioPort.P6P7:
                return (pin_pos === 2 ? DigitalPin.P6 : DigitalPin.P7);
                break;
            case KeyestudioPort.P5:
                return DigitalPin.P5;
                break;
            case KeyestudioPort.P11:
                return DigitalPin.P11;
                break;
            case KeyestudioPort.P12:
                return DigitalPin.P12;
                break;
            case KeyestudioPort.P9:
                return DigitalPin.P9;
                break;
            default:
                return DigitalPin.P0;
                break;

            return DigitalPin.P0;
        }
    }

    export function enablePin(pin: DigitalPin): void {
        if (pin === DigitalPin.P3
            || pin === DigitalPin.P4
            || pin === DigitalPin.P6
            || pin === DigitalPin.P7
            || pin === DigitalPin.P10) {
            led.enable(false)
        }
    }
}