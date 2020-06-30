
//1 GET 1 TO 255 
//Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.

function get_array(){
    var arr=[];
    for(var i = 1; i<=256; i++){
        arr.push(i)
    }
    return arr;
}

get_array();


//2 GET EVEN 1000
//Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.

function sum_even_numbers(){
    var sum=0;
    for(var i =1; i<1000; i++){
        if(i % 2 ===0){
            sum += i;
        }
    }
    return sum;
}

sum_even_numbers();


//3 SUM ODD 5000
//Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)

function sum_odd(){
    var sum=0;
    for(var i=0; i<5000; i++){
        if(i % 2 ===1){
            sum = sum + i;

        }
    }
    return sum;
}

sum_odd();


//4 ITERATE AN ARRAY
// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)

function iterArr(arr){
    var sum=0;
    for(var i = 0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

iterArr([1,2,5])
iterArr([-5,2,5,12])


//5 FIND MAX
// Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr){
    var max=[0];

    for(var i =1; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max;
}
x=[2,3,4,9,12]
findMax(x);


//6 FIND AVG
// Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAvg(arr){
    var sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length
}
x=[1,5,6,7,15];
findAvg(x);


//7 ARRAY ODD
// Write a function that would return an array of all the odd numbers between 1 to 50. 

function oddNumbers(){
    var arr = [];

    for( var i = 1; i <=50 ; i ++){
        if( i % 2 !==0){
            arr.push(i)
        }
    }
    return arr;
}
x=([1,3,5,7,9,17])
oddNumbers(x);



//8 GREATER THAN Y
//Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 

function greaterY(arr,y){
    var count=0;

    for(var i=0; i<arr.length; i++){
        if(arr[i]>y){
            count++;
        }
    }
    return count;
}
y=2;
x=[1,2,9,10,11];
greaterY(x,y);


//9 SQUARES
// Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself. 

function squareVal(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
x=[2,3,5,9,12];
squareVal(x);

//10 NEGATIVES
// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.


function noNeg(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}
n=[1,-5,12,-10,15];
noNeg(n);


//11 MAX,MIN,AVG
// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 


function maxMinAvg(arr){
    var max=arr[0];
    var min=arr[0];
    var sum=arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
        sum+=arr[i];
    }
    var avg = sum/arr.length;
    var newarr=[max, min,avg];
    return newarr;
}
x=[1,5,9,11,12];
maxMinAvg(x);


//12 SWAP VALUES
// Write a function that will swap the first and last values of any given array. 

function swap(arr){
    var temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    return arr;
}
x=[1,3,5,7,-9];
swap(x);

//13 NUMBER TO STRING
//Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Coding'.


function numToStr(arr){
    for (var i = 0; i< arr.length; i ++){
        if (arr[i] < 0){
            arr[i] = "Coding";
        }
    }

    return arr;
}

x=[-1,-5,-6,-9,10,12]
numToStr(x);



