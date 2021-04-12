console.time("Processing time");

// Create an Array of random numbers
function randomNumber(min,max){
    const randomize = Math.random()*(max-min) + min;
    return Math.floor(randomize);
}
// Push the random number into an array
let A = [...Array().keys()];
for(i = 1; i <= 1000000; i++){
    A.push(randomNumber(1,100))
}
// describe array length
const arrayLength = A.length;
// log the array
console.log(A);


// Bubble Sort
function bubbleSort(array){
    for(let i = 0 ; i < array.length - 1; i++ ) {
        for(let j = 0; j < array.length - 1 - i; j++){
            if ( array [j] > array [j+1] ){
                [array[j] , array [j+1]] = [array[j+1] , array[j] ]
                // const temp = array[j];
                // array[j] = array[j+1];
                // array[j+1] = temp;
            }
        }
    }
    
    return array;
}
// Log the bubble sort
const bubblesort = bubbleSort(A);
const lengthbs = bubblesort.length;

for( i = 0 ; i < lengthbs ; i++){
    console.log(A[i]);
    }


console.timeEnd("Processing time");

// Selection Sort
function selectionSort(array){
    for( let i = 0 ; i < array.length - 1 ; i++ ){
        let minIndex = i;
        for(let j = i + 1 ; j < array.length ; j++){
            if (array[j] < array[minIndex]){
                minIndex = j;
            }
        };
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        // const temp = array[i];
        // array[i] = array[minIndex];
        // array[minIndex = temp];
    }
    return array;
}

// Log selection sort
const output = selectionSort(A);
const lengthss = output.length;
for( i = 0 ; i < lengthss ; i++){
        console.log(A[i]);
    };

console.timeEnd("Processing time");
