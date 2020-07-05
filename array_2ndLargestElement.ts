const iArr : number[] = [5, 4, 3, 2, 1];

iArr.sort((a : number, b : number) => b - a);

console.log(iArr[0]);           // prints 5 which is the largest element
console.log(iArr[1]);           // prints 4 which is the 2nd largest element