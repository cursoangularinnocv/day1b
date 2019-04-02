interface IDrawable {
    draw(): void;
    rotate(deg: number, clockwise: boolean):void;
}

class Shape {
    calculateArea():number {
        return Math.PI;
    }
}

class Rectangle extends Shape implements IDrawable {
    rotate(deg: number, clockwise: boolean): void {
        throw new Error("Method not implemented.");
    }

    draw() {
        
    }

    
}
class Circle extends Shape implements IDrawable {
    draw() {
        
    }

    rotate(deg: number) {
        
    }
}

class Triangle extends Shape implements IDrawable {
    draw() {
        
    }

    rotate(deg: number) {
        
    }
}

class Painter {
    constructor(shape: IDrawable) {
        shape.rotate(20, false)
    }
}

var p = new Painter(new Circle())