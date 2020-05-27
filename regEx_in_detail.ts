// ex 1: from sony interview
const str1 = 'Hi !!!!!! My Name Is cxxxx';
console.log(str1.replace(/[aeiou]/gi, '')   );          // prints       H !!!!!! My Nm s cxxxx


// ex 2: from SDET video about string replace() fn
const str2 : string = 'typescript practice',
str2_rep = str2.replace(/[p]/gi, '');           // used to regex to replace all p's
console.log(str2_rep);                          // prints           tyescrit ractice

console.log(str2.replace('t', 'D') );           // will replace only first t occurance, prints  Dypescript practice
console.log(str2.replace('type', 'Shell') );    // prints               Shellscript practice



// ex 3: from CGI typeScript training by a lady
let str3 = 'This is training class. The class is about typeScript',
newStr = str3.replace(/class/gi, 'session');          // class word replaced with session
console.log(newStr);                    // prints           This is training session. The session is about typeScript

// below example is my R&D (not from mind of any trainer)
newStr = str3.replace(/[class]/gi, 'session');      // this [] is dangerous as it it will replace all "c's", "l's", "a's", "s's" with the word "session" and prints                 Thisession isession trsessionining sessionsessionsessionsessionsession. The sessionsessionsessionsessionsession isession sessionbout typesessionsessionript




