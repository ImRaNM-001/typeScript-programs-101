// a dedicated illustration/explanation is coded in this file --> "typeof_all_DataTypes" from javaScript_Programs_3 folder

const errObject = (name : string =>{
    try{
        if(name.length > 2) console.log('Test Passed');
    }
    catch(err){                       // passing object of Error class as there is no Exception class in TS
        console.log(typeof err);     // prints "object" as default value of any variable of class type is object, here err is automatically inferred as object of Error class by TS
    }
});

errObject();                    // prints object
errObject('Hola');               // prints Test Passed


class Krishh{
    constructor(private name : string){}

    get _name(){
        return this.name;
    }
}

const kk : Krishh = new Krishh("Son of alien");
console.log(typeof kk);                // prints object
console.log(kk._name);                 // Son of alien