new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        name: "",
        greeting: "",
        numbers: 0,
        number1: 0,
        number2: 0,
        result: 0,
        operation: "+"
    },
    methods: {
        calculate() {
            console.log("Say Hello " + this.name)

            switch (this.operation) {
                case "+": {
                    this.result = this.number1 + this.number2
                    break;
                }

                case "-": {
                    this.result = this.number1 - this.number2
                    break;
                }

                case "*": {
                    this.result = this.number1 * this.number2
                    break;
                }

                case "/": {
                    this.result = this.number1 / this.number2
                    break;
                }
            }






        }


    }
})