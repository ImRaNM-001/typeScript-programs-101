/*  if no of parameters a fn() has to take is not known, we can make use of rest parameters which is denoted by ellipsis (3 dots) ...
            */

// Anonymous (or) fn expression (or) fat arrow fn accepting known parameters
const greet1 = (greetWord : string, name : string) : string => greetWord + ' ' + name;
console.log(greet1('Farewell', 'Darcy') );          // prints Farewell Darcy


// fn expression accepting rest parameter to denote parameters unknown to user (ex: name parameter don't know how many values to take)
const greet2 = (greetWord : string, ...name : string[] ) : string => greetWord + ' ' + name.join(', ');
console.log(greet2('Farewell', 'Shannel') );                // prints Farewell Shannel
console.log(greet2('Farewell') );                            // prints Farewell 
console.log(greet2('Farewell', 'Martha', 'Paula') );       // prints Farewell Martha, Paula


















