let s1 : string = 'Hello World',
    s2 : string = 'Hello World',
    s3 = s1,

    n1 = new String('Hello World'),
    n2 = new String('Hello World');


    console.log(s1 === s2);             // prints true 
    console.log(s2 === s3);             // prints true 
    console.log(s3 === s1);             // prints true 
    console.log(s3 === s2);             // prints true 

    console.log(s3 == 'Hello World');             // prints true 

    console.log('\n==========');
    console.log(s2 === 'Hello World');             // prints true

    console.log(n1 == n2);                  // prints false (value comparison is absurd here as object references are different)
    console.log(n1 === n2);                 // prints false

    console.log('\n==========');
    console.log(n1 == 'Hello World');             // prints true (as only value is compared in object reference)
    console.log(n1 === 'Hello World');             // prints false (as both value and type is compared in object reference)

