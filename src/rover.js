
class Rover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  move(instruction) {
    switch (instruction) {
      case 'L':
        this.turnLeft();
        break;
      case 'R':
        this.turnRight();
        break;
      case 'M':
        this.goForward();
        break;
      default:
        throw new Error(`Instrução inválida!`);
      }
  }

  turnLeft() {
    switch (this.direction) {
      case 'N':
        this.direction = 'W';
        break;
      case 'E':
        this.direction = 'N';
        break;
      case 'S':
        this.direction = 'E';
        break;
      case 'W':
        this.direction = 'S';
        break;
    }
  }

  turnRight() {
    switch (this.direction) {
      case 'N':
        this.direction = 'E';
        break;
      case 'E':
        this.direction = 'S';
        break;
      case 'S':
        this.direction = 'W';
        break;
      case 'W':
        this.direction = 'N';
        break;
    }
  }

  goForward() {
    switch (this.direction) {
      case 'N':
        this.y += 1;
        break;
      case 'E':
        this.x += 1;
        break;
      case 'S':
        this.y -= 1;
        break;
      case 'W':
        this.x -= 1;
        break;
    }
  }

  toString() {
    return `${this.x} ${this.y} ${this.direction}`;
  }

}

module.exports = Rover