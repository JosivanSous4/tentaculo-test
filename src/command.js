const fs = require('fs');
const Rover = require('./rover.js')
const path = require('path')   

class Command{
    
    constructor(){
        this.input = []
        this.rovers = []
        this.coordinateX = null
        this.coordinateY = null
    }

    readFile(pathFile){
        const filePath = path.join(__dirname, `../uploads/${pathFile}`);

        this.input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
        const [coordinateX, coordinateY] = this.input.shift().split(' ').map(Number);

        this.coordinateX = coordinateX
        this.coordinateY = coordinateY

        this.validate();
    }

    movements(){
        for (let i = 0; i < this.input.length; i += 2) {
            const [x, y, direction] = this.input[i].split(' ');
            const rover = new Rover(Number(x), Number(y), direction);
          
            for (const instruction of this.input[i + 1]) {
              rover.move(instruction);
            }
          
            this.rovers.push(rover);
        }
    }

    printResult(){
        for (const rover of this.rovers) {
            console.log(rover.toString());
        }
    }

    validate(){
        for (let i = 0; i < this.input.length; i += 2) {
            for (const instruction of this.input[i + 1]) {
                this.validateSequence(instruction)
            }
        }
    }

    validateSequence(instructions){
        const arraySequence = ["L", "M", "R"]
        for (const instruction of instructions) {

            if (arraySequence.indexOf(instruction) < 0) {
                throw new Error(`Instrução inválida!`);
            }
        }
    }
}

module.exports = Command