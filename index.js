class Console {
    constructor() {

    }
    log(string, ...rest) {
        const restClean = rest.join("")
        process.stdout.write('\x1b[37m' + string + restClean + '\x1b[0m')
        process.stdout.write("\n")
    }

    error(string, ...rest) {
        const restClean = rest.join("")
        process.stdout.write('\x1b[31m' + string + restClean + '\x1b[0m')
        process.stdout.write("\n")
    }

    info(string, ...rest) {
        const restClean = rest.join("")
        process.stdout.write('\x1b[37m' + string + restClean + '\x1b[0m')
        process.stdout.write("\n")
    }
    warn(string, ...rest) {
        const restClean = rest.join("")
        process.stdout.write('\x1b[33m' + string + restClean + '\x1b[0m')
        process.stdout.write("\n")
    }

    special(objColor, string, ...rest) {
        let colorCode = "\x1b[37m"
        const restClean = rest.join("")
        if (typeof objColor !== "object") {
            this.error('O primeiro parametro tem que ser obrigatoriamente um  objecto contendo a cor desejada, Ex: {color:"red"}')
            return
        }
        switch (objColor.color.toLowerCase()) {
            case "yellow":
                colorCode = "\x1b[33m"
                break;
            case "black":
                colorCode = "\x1b[30m"
                break;
            case "red":
                colorCode = "\x1b[31m"
                break;
            case "green":
                colorCode = "\x1b[32m"
                break;
            case "blue":
                colorCode = "\x1b[34m"
                break;
            case "ciano":
                colorCode = "\x1b[36m"
                break;
            default:
                colorCode = "\x1b[0m"
                break;

        }
        process.stdout.write(colorCode + string + restClean + '\x1b[0m')
        process.stdout.write("\n")
    }
}
const myConsole = new Console()

myConsole.log("Testando o console.log()")
myConsole.error("Testando o console.error()")
myConsole.info("Testando o console.info()")
myConsole.warn("Testando o console.warn()")
myConsole.special({ color: "blue" }, "Testando o console.especial()")
