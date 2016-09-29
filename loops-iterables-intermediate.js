/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */
//INPUT:   ARRAY

var sumOfArray = function(arrOfNum){
	var numAdded = 0
    var finalNum = 0
   for(var i = 0; i < arrOfNum.length; i++){
		numAdded = arrOfNum[i]
        finalNum = finalNum + numAdded;

   }


//OUTPUT: SUM OF ARRAY (NUMBER)
    return finalNum
}


console.assert(sumOfArray([3, 4]) === 7);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3, 4]) === 10);
console.assert(sumOfArray([10, 9, 8, 3, 4, 5, 6]) === 45);


console.assert(sumOfArray([3, 4]) === 7);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3, 4]) === 10);
console.assert(sumOfArray([10, 9, 8, 3, 4, 5, 6]) === 45);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

//INPUT: ARRAY of NUMBERS
var maxOfArray = function(arrMaxNum){
    var numComp = 0;
   var highestNum = null
   for(var i = 0; i < arrMaxNum.length; i++){
       numComp = arrMaxNum[i]

       if(numComp > highestNum){
           highestNum = numComp



   }
   else if(typeof numComp != 'number'){
    return null
   }
else{}
   }



return highestNum
//OUTPUT: highest NUMBER
}

console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert( maxOfArray([1,8,'bucklemyshoe', 7]) === null)


/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
 function isVowel(symbl){
    var vowels = ['a', 'e', 'i', 'o', 'u']
    var vowelVerifier = false
    if(typeof symbl === 'string'){
    for(var i = 0; i < vowels.length; i++){
     // YOUR CODE HERE

     if( symbl.toLowerCase() === vowels[i]){

       vowelVerifier = true

    }
 }
    }

     return vowelVerifier;

 }

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
 // input string
 var reverse = function(str){
	var rvsstr = ""
	var strToArr = str.split("")

        strToArr = strToArr.reverse()

        rvsstr = strToArr.join("")

    return rvsstr

}



console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "FizZBuzZ"
 */
 var fizzbuzz = function(num){
 		var fizz = ""
     for(var i = 1; i <= num; i++){

         if(i % 3 != 0 && i % 5 != 0){
             fizz = fizz + '.'
         }
     if(i % 3  ===  0 && i % 5 !=  0){
        fizz = fizz + "fizz"


     }else if(i % 5 === 0 && i % 3 != 0){
         fizz = fizz + "buzz"
     }
         else if(i % 3 === 0 && i % 5 === 0){
             fizz = fizz + "FizZBuzZ"
         }


     }

 return fizz
 }



console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
console.assert(fizzbuzz(20) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */
 function findLongestWord(sentence){
    	var senArr = sentence.split(" ")


        var numComp
      var highestSenVal = 0;
      var highestSen = "";
   for(var i = 0; i < senArr.length; i++){

        senArr[i] = removeApost(senArr[i])
       	numComp = senArr[i].length

       if(numComp > highestSenVal){
            highestSenVal = numComp
           highestSen = senArr[i]

    }



   }
    return highestSen
}
var removeApost = function(str){
    var apoCnt = 0;
    var noApoStr = ""
    for(var i = 0; i < str.length; i++){

       if(str[i] === "'"){
          apoCnt = apoCnt + 1
   }
   else{
      noApoStr = noApoStr + str[i]
   }
    }

   return noApoStr
}

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 * -- ADVENTURE MODE --
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */
var GCD = function(num1, num2){
      var comDom = 0
   for(var i = 0; i < num1; i++){
      if(num1 % i === 0){

         return comDom
      }
      else{comDom = 1}


   }



}


console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
