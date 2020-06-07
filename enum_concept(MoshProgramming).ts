// 1. from "50mins_typeScript (codevolution)" video:
enum Color {Red, Green, Blue};

// creating a variable ecl of enum type
const ecl : Color = Color.Green;
console.log(ecl);                           // prints 1 as Green is in 1st position

// temerping/customizing the index value (this is a good practice where we have assigned an enum value instead of random number assignment above)
enum Rang {Red = 6, Green, Blue};

const rcl : Rang = Rang.Red;
console.log(rcl);               // prints 6 or,     
console.log(Rang.Red);          // also prints 6

console.log(Rang[2]);           // prints undefined as index starts from 6 above
console.log(Rang[7]);           // prints Green as index starts from 6 above


// 2. from "ES6 and Typescript Tutorial - 45 - Enumeration (codevolution)" video........(definition): Enumeration or enum type, both are same are used to give friendlier names to numeric values and create a specific type for a variable

enum EyeColor {Brown = 1, Black = 5, Blue = 10};

const eyc : EyeColor = EyeColor.Brown;
console.log(eyc);                                  // prints 1
console.log(EyeColor[eyc]);                       // prints Brown



// 3. from "Programming with Mosh" video
enum Color1 {Red = 0, Green = 1, Blue = 2, Purple = 3};
const bckGroundColor1 : Color1 = Color1.Blue;

console.log(bckGroundColor1);                                   // prints 2         

enum Color2 {Red = 0, Green = 1, Blue = 2, Purple = 2};
const bckGroundColor2 : Color2 = Color2.Purple;

console.log(bckGroundColor2);                                      // prints 2  (will print whatever number is assigned to the element)


/* In JavaScript, we need to do too much declarations
const colorRed = 0,
colorGreen = 1,
colorBlue = 2;                                  */

