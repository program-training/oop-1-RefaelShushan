// את הקוד שלכם תכתבו כאן
//  1. Rectangle - מלבן
// class Rectangle {
//     width: number;
//     height: number;

//     constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//     }
//     area():number {
//     return this.width*this.height;
//     }
//     }

//  2. Square - ריבוע
// class Square extends Rectangle{

//     constructor(edge: number){
//         super(edge,edge)
//     }
//     }

// 3. Shape - צורה
// class Shape {
//   info(): string {
//     return "This is a Shape";
//   }
// }
// class Rectangle extends Shape {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     super();
//     this.width = width;
//     this.height = height;
//   }
//   area(): number {
//     return this.width * this.height;
//   }
//   info(): string {
//     return "This is a Rectangle";
//   }
//   scale(x: number): this {
//     this.width *= x;
//     this.height *= x;
//     return this;
//   }
//   static twoRectangles(
//     Rectangle1: Rectangle,
//     Rectangle2: Rectangle
//   ): Rectangle {
//     const nweRectangle = new Rectangle(
//       Rectangle1.width + Rectangle2.width,
//       Rectangle1.height + Rectangle2.height
//     );
//     return nweRectangle;
//   }
// }
// const a = new Rectangle (2,3)
// const b = new Rectangle (2,3)
// console.log(Rectangle.twoRectangles(a,b));

// class ColorRectangle extends Rectangle {
//   color: string;

//   constructor(width: number, height: number, color: string) {
//     super(width, height);
//     this.color = color;
//   }
//   info(): string {
//     return `This is a Rectangle in color ${this.color}`;
//   }
// }

// 5

class Shape {
    draw(): void {
        console.log('drawing a shape');
    }
}

class Triangle extends Shape {
    draw(): void {
        console.log('drawing a Triangle');
    }
}

class Circle extends Shape {
    draw(): void {
        console.log('drawing a Circle');
    }
}

class Square extends Shape {
    draw(): void {
        console.log('drawing a Square');
    }
}

function renderShapes(shapes: (Shape | Circle | Square | Triangle)[]): void {
    shapes.forEach((item) => item.draw());
}

const sh = new Shape();
const ci = new Circle();
const sq = new Square();
const tr = new Triangle();

let arry = [sh, ci, sq, tr]
renderShapes(arry);
