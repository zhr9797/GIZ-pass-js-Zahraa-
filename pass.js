//NOTE : All comments are above the phrases I want to comment on
//buble sort in javascript 
//Define an array of numbers to be arranged (i used the same numbers in data.txt)

var numbers = [10, 10, 31, 19, 18, 21, 55, 23, 20, 10, 10, 78, 80, 99, 15];

//The numbers will be printed in their normal order

console.log("Numbers list befor sorting: ",numbers)

//Create a  bubblesort function

function bubbleSort(numbers) 
{
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < numbers.length; i++) 
      {
        if (numbers[i - 1] > numbers[i]) 
        {
          done = false;
          var tmp = numbers[i - 1];
          numbers[i - 1] = numbers[i];
          numbers[i] = tmp;
        }
      }
      
    }
    return numbers;
    
  }
bubbleSort(numbers);

//Here the o/p will be the numbers after sorting in ASC 

console.log("ASC numbers list After sorting: ",numbers)

//using reverse in arrays to make the o/p in DESC ordering after it was in ASC ordering

var rev=numbers.reverse();  

//Here the o/p will be the numbers after sorting in ASC 

console.log("DESC numbers list After sorting: ",rev)

