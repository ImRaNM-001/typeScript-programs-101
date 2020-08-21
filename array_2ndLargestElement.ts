// I just converted the corresponding Java code to TS and it works like a charm:

const getXLargest = (arr : number[], len : number, largestCount : number) : number =>{
    arr.sort();
    return arr[len - largestCount];
};

const arr = [55, -90, 876434, 45, 12, 11],      
len = arr.length;
console.log(getXLargest(arr, len, 3) );         // finding 3rd largest and prints 45


const arr1 = [1, 2, 3, 4, 5],
len1 = arr1.length;
console.log(getXLargest(arr1, len1, 2) );         // finding 2nd largest and prints 4


/*   corresponding Java code/method prepared after "Schneider Electric" interview failure.....

    static int getXLargest(int[] arr, int len, int largestCount){  			
    Arrays.sort(arr);  		       // Arrays is a Java class of java.util package which extends Object class
    return arr[len - largestCount];	
}               */