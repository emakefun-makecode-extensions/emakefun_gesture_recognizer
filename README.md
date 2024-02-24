# MakeCode Extension For Emakefun Gesture Recognizer

## Introduction

## Usage

## Example

### Show Gesture

You can copy the code from below or view the project (blocks and JavaScript view) [here](https://makecode.microbit.org/_XDE97wd6Je2b).

```block
let gesture_recognizer = emakefun.createGestureRecognizer(57)
basic.forever(function () {
    gesture_recognizer.recognize()
    if (gesture_recognizer.gestureRecognized(emakefun.GestureType.GestureRightSwipe)) {
        serial.writeLine("gesture: right swipe")
        basic.showArrow(ArrowNames.East)
    } else if (gesture_recognizer.gestureRecognized(emakefun.GestureType.GestureLeftSwipe)) {
        serial.writeLine("gesture: left swipe")
        basic.showArrow(ArrowNames.West)
    } else if (gesture_recognizer.gestureRecognized(emakefun.GestureType.GestureBackwardSwipe)) {
        serial.writeLine("gesture: backward swipe")
        basic.showArrow(ArrowNames.South)
    } else if (gesture_recognizer.gestureRecognized(emakefun.GestureType.GestureForwardSwipe)) {
        serial.writeLine("gesture: forward swipe")
        basic.showArrow(ArrowNames.North)
    } else if (gesture_recognizer.gestureRecognized(emakefun.GestureType.GesturePullUp)) {
        serial.writeLine("gesture: pull up")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (gesture_recognizer.gestureRecognized(emakefun.GestureType.GesturePushDown)) {
        serial.writeLine("gesture: push down")
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (gesture_recognizer.gestureRecognized(emakefun.GestureType.GestureLeave)) {
        serial.writeLine("gesture: leave")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (gesture_recognizer.gestureRecognized(emakefun.GestureType.GestureHover)) {
        serial.writeLine("gesture: hover")
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
```

## Supported targets

- for PXT/microbit

## License

MIT
