export const PI = 3.14;

export function calculateArea(radius: number): number {
    return PI * radius * radius;
}

export class Circle {
    constructor(public radius: number) { }

    getArea(): number {
        return calculateArea(this.radius);
    }
}

function funOne() {
    console.log('One');
}
function funTwo() {
    console.log('Two');
}
function funThree() {
    console.log('Three');
}
export default {
    fun1: funOne,
    fun2: funTwo,
    fun3: funThree
}
