import { PI, Circle, calculateArea} from "./sourceFile";
import bulkFunction from "./sourceFile";

console.log(PI);

console.log(calculateArea(5));
let obj = new Circle(6);
console.log(obj.getArea());

bulkFunction.fun1();
bulkFunction.fun2();
bulkFunction.fun3();