"use strict"

class Converter {
    constructor(number) {
        this.number = number;
        this.units = 0;
        this.tens = 0;
        this.hundreds = 0;


    }
    get check() {
        let dotCheck = this.number.includes(".") // проверяет отсуствие точки.
        let isInt = Number.isInteger(parseInt(this.number)) // проверяет, значение можно преобразовать в целое число
        return !dotCheck && isInt && parseInt(this.number) >= 0 && parseInt(this.number) <= 999;
    }

    get show() {
        if (!this.check) {
            console.log("необходимо ввести целое число от 0 до 999")
        } else {
            this.units = parseInt(this.number) % 10
            this.tens = Math.floor(parseInt(this.number) / 10) % 10
            this.hundreds = Math.floor(parseInt(this.number) / 100)
        }
        return this.form
    }
    get form(){

        return {
            units: this.units,
            tens: this.tens,
            hundreds: this.hundreds,
        }
    }
}

let a = new Converter(prompt("введите число от 1 до 999"))
console.log(a.show)