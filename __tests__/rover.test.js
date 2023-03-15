const Rover = require("../src/rover");

describe('Rover', () => {
    test('should create a Rover instance with correct properties', () => {
      const rover = new Rover(1, 2, 'N');
      expect(rover.x).toBe(1);
      expect(rover.y).toBe(2);
      expect(rover.direction).toBe('N');
    });
      
    test('should turn left correctly', () => {
      const rover = new Rover(1, 2, 'N');
      rover.turnLeft();
      expect(rover.direction).toBe('W');
      rover.turnLeft();
      expect(rover.direction).toBe('S');
      rover.turnLeft();
      expect(rover.direction).toBe('E');
      rover.turnLeft();
      expect(rover.direction).toBe('N');
    });
  
    test('should turn right correctly', () => {
      const rover = new Rover(1, 2, 'N');
      rover.turnRight();
      expect(rover.direction).toBe('E');
      rover.turnRight();
      expect(rover.direction).toBe('S');
      rover.turnRight();
      expect(rover.direction).toBe('W');
      rover.turnRight();
      expect(rover.direction).toBe('N');
    });
  
    test('should move forward correctly', () => {
      const rover = new Rover(1, 2, 'N');
      rover.goForward();
      expect(rover.y).toBe(3);
      rover.turnRight();
      rover.goForward();
      expect(rover.x).toBe(2);
    });
  
    test('should throw an error for invalid instruction', () => {
      const rover = new Rover(1, 2, 'N');
      expect(() => rover.move('A')).toThrowError('Instrução inválida!');
    });
  
    test('should move and turn according to instructions', () => {
      const rover = new Rover(1, 2, 'N');
      rover.move('L');
      rover.move('M');
      rover.move('L');
      rover.move('M');
      rover.move('L');
      rover.move('M');
      rover.move('L');
      rover.move('M');
      rover.move('M');
      expect(rover.toString()).toBe('1 3 N');
    });
});
  