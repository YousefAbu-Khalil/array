// 1-Write a function to find the largest element in an array.

function largest(array){
    var max=array[0];
    for(var i =0 ; i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    console.log(max);
}
var array=[589796,5,70,300];
largest(array);

// 2-Write a function to find the smallest element in an array.

function smallest(array){
    var min=array[0];
    for(var i =0 ; i<array.length;i++){
        if(array[i]<min){
            min=array[i];
        }
    }
    console.log(min);
}
var array=[589796,5,70,300];
smallest(array);

// 3-Write a function to find the sum of all elements in an array.

function sum(array){
    var sum=array[0];
    for(var i =1 ; i<array.length;i++){
            sum += array[i];
    }
    console.log(sum);
}
var array=[10,5,70,300];
sum(array);

// 4-Write a function to find the average of all elements in an array.

function sum(array){
    var sum=array[0];
    var avg;
    for(var i =1 ; i<array.length;i++){
            sum += array[i];
            avg = sum/array.length;
    }
    console.log(avg);
}
var array=[10,5,70,300,55];
sum(array);

// 5-Write a function to find the median of all elements in an array.

// 6-Write a function to remove all duplicates from an array.


// 7-Write a function to sort an array in ascending order.

// 8-Write a function to sort an array in descending order.

// 9-Write a function to shuffle the elements of an array randomly.
