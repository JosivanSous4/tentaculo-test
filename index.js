const Command = require('./src/command.js')

const controller = new Command()

controller.readFile('inputs.txt')
controller.movements()
controller.printResult()