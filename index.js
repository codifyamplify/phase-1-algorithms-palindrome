function isPalindrome(word) {
  console.log('i am inside isPalindrome')
  // Write your algorithm here
  const providedString = word
  const splitString = providedString.split('')
  const splitString2 = [...splitString]
  const reversedString = splitString2.reverse()
  const finishedReversedString = reversedString.join('')
  if(providedString === finishedReversedString) {
    return true
  } else {
    return false
  }
}


/*
  Add your understanding of the problem here

  Level one: write a function called is palindrome that will receive a string as an argument
  Level two: dysfunction will be a F, then, where the F/true scenario will return 1 billion true.
  Level two: this function will be and if/then, where the if scenario will return a Boolean true.
  Level two: this function will have a then scenario where a boolean false will be returned
  Note: don't worry about uppercase/lowercase, since this exercise is assuming that a lowercase word will be passed as the argument
  Possible methods to keep in mind: reverse() - reverses an array in place
/*

/* 
  Add your pseudocode here

    //function isPalindrome(string) {
      if statement:
        if string is palindrome return true boolean
          const providedString = string
          const reversedString = string.reverse()
          string === string.reverse()
          return true
      else statement
        if string is not palindrome return false boolean
          const providedString = string
          const reversedString = string.reverse()
          string !== string.reverse()
          return true
    } 
  */

/*
  Add written explanation of your solution here
    This function will take a string and create two variables: the value of the string passed as an argument and the value of the string if reversed. This function will run a strict equality operator and return a true boolean if both versions of the string are ===. This function will return a boolean false if both versions of the string are !==.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
