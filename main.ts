//% block="Emakefun"
namespace emakefun {
  export const enum GestureType {
    //% block="none"
    GestureNone = 0x00,

    //% block="right swipe"
    GestureRightSwipe = 0x01,

    //% block="left swipe"
    GestureLeftSwipe = 0x02,

    //% block="backward swipe"
    GestureBackwardSwipe = 0x03,

    //% block="forward swipe"
    GestureForwardSwipe = 0x04,

    //% block="pull up"
    GesturePullUp = 0x05,

    //% block="push down"
    GesturePushDown = 0x06,

    //% block="leave"
    GestureLeave = 0x07,

    //% block="hover"
    GestureHover = 0x08,
  }

  /**
   * Create a new Emakefun Five Live Tracker instance
   * @param i2c_address I2C address of the board, default 0x39
   */
  //% block="create Emakefun Gesture Recognizer with I2C address $i2c_address"
  //% subcategory="GestureRecognizer"
  //% blockSetVariable=gesture_recognizer
  //% i2c_address.defl=0x39
  //% weight=100
  export function createGestureRecognizer(i2c_address: number = 0x39):
      GestureRecognizer {
    return new GestureRecognizer(i2c_address);
  }

  export class GestureRecognizer {
    private readonly i2c_address_: number = undefined;
    private gesture_: number = GestureType.GestureNone;

    /**
     * Constructor
     * @param i2c_address I2C address of the module, default 0x39
     */
    constructor(i2c_address: number = 0x39) {
      this.i2c_address_ = i2c_address;
    }

    /**
     * recognize gesture
     */
    //% block="$this recognize"
    //% subcategory="GestureRecognizer"
    //% this.defl=gesture_recognizer
    //% weight=99
    recognize(): void {
      pins.i2cWriteNumber(this.i2c_address_, 0x01, NumberFormat.UInt8LE);
      this.gesture_ =
          pins.i2cReadNumber(this.i2c_address_, NumberFormat.UInt8LE);
    }

    /**
     * Query whether the specified gesture recognized
     *
     * @param gesture The gesture type to query
     * @returns Whether the specified gesture recognized
     */
    //% block="$this gesture $gesture recognized"
    //% subcategory="GestureRecognizer"
    //% this.defl=gesture_recognizer
    //% weight=98
    gestureRecognized(gesture: GestureType): boolean {
      return this.gesture_ == gesture;
    }
  }
}