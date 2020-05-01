// Two types of parameters in functions - optional and default

// 1 - optional parameters fns()......note - optional parameters cannot be the 1st parameter
const greet1 = (greetWord : string, name : string) : string => `${greetWord} ${name}`;     // used stylish template literals to return string
console.log(greet1('Welcome', 'Jack') );         // prints Welcome Jack

let greet2 = (greetWord : string, name ?: string) : string => greetWord + ' ' + name;
console.log(greet2('Welcome') );        // prints Welcome undefined     [default value of optional parameter i.e, name is undefined]

// tweaking greet2 fn() to exclude undefined (followed Brad Traversy video on typsecript)
greet2 = (greetWord : string, name ?: string) : string =>{
    if(name == undefined) return greetWord;     // here we are targetting value of name (which is undefined) not "typeof"
    else return greetWord + ' ' + name;     

    // trying coderevolution way
    if(name) return greetWord + ' ' + name;     // if(name) means if "name" is passed as an argument
    else return greetWord;      
}
console.log(greet2('Welcome_only') );        // prints Welcome_only


// 2- default parameters fns(), using a default parameter
const greet3 = (name : string, greetWord : string = 'Welcome') : string => greetWord + ' ' + name;
console.log(greet3('Jack Ma') );            // prints Welcome Jack Ma

// overridding default value of greetWord
console.log(greet3('Moosa bhai', 'Khushamadid') );      // Welcome replaced and now prints Khushamadid Moosa bhai




















