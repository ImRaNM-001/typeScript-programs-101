const weekno : number = 3;

// writing long if else if (nested if) statements
if(weekno === 1) console.log('Sunday');
else if(weekno === 2) console.log('Monday');
else if(weekno === 3) console.log('Tuesday');
else if(weekno === 4) console.log('Wednesday');
else if(weekno === 5) console.log('Thursday');
else if(weekno === 6) console.log('Friday');
else if(weekno === 7) console.log('Saturday');

else console.log('Invalid week number');

// or write switch case statements to avoid this log hassle
switch(weekno){
    case 1: console.log('Sunday');
    break;

    case 2: console.log('Monday');
    break;

    case 3: console.log('Tuesday');
    break;

    case 4: console.log('Wednesday');
    break;

    case 5: console.log('Thursday');
    break;

    case 6: console.log('Friday');
    break;

    case 7: console.log('Saturday');
    break;

    default: console.log('Invalid week number');
    break;
}


