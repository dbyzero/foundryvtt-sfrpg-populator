/// List of creature combat ratings
import { Utils } from "../utils/Uils.js"

export const CR = [
    "1/3",
    "1/2",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
]

/* CR Helpers */
declare module "../utils/uils" {
    namespace Utils {
        function CRforNumber(number: number): string
    }
}

Utils.CRforNumber = (number: number): string => {
    let cr: string
    if (number === 1 / 3) {
        cr = "1/3"
    } else if (number === 1 / 2) {
        cr = "1/2"
    } else {
        cr = number.toString()
    }
    return cr
}
