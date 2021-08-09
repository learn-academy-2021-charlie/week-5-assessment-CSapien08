// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

//Create a test function.
//  use describe() to pass in the name of the function, messageCoder
//  use it() to describe what messageCoder is doing
//      within it() write the test using expect and toEquals
//      test to make sure it returns the expected output
//END

describe("messageCoder", () => {
    var secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    var secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    var secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"

    it("Takes in a string and returns a coded message.", () => {
        expect(messageCoder(secretCodeWord1)).toEqual('L4ck4d41s1c4l')
        expect(messageCoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(messageCoder(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// b) Create the function that makes the test pass.
//Create a function called messageCoder
//  parameter - string
//  turn the string into array using spilt()
//  use map to iterate over the string of arrays
//      if the value is equal 'a' convert it to a 4,
//          or if it is equal to 'e' convert it to a 3,
//          or if it is equal to 'i' convert it to a 1
//          or if it is equal to 'o' convert it to a 0
//  return the string array joined back as a string using join
//END

const messageCoder = (string) => {
    return string.split('').map(value => {
        if(value.toLowerCase() === 'a' ){
            return value = 4
        }
        else if(value.toLowerCase() === 'e'){
            return value = 3
        }
        else if(value.toLowerCase() === 'i'){
            return value = 1
        }
        else if(value.toLowerCase() === 'o'){
            return value = 0
        }
        else {
            return value
        }
    }).join('')
}

//console.log(messageCoder(secretCodeWord1));

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

//Create a test function.
//  use describe() to pass in the name of the function, findWord
//  use it() to describe what findWord is doing
//      within it() write the test using expect and toEquals
//      test to make sure it returns the expected output
//END

describe("findWord", () => {
    var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    // Expected output: ["Apple", "Banana", "Orange"]
    var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    // Expected output: ["Mango", "Apricot", "Peach"]

    it("takes in an array and returns all the words that contain the letter a", () => {
        expect(findWord(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
        expect(findWord(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
    })
})

// b) Create the function that makes the test pass.
//Create a function called findWords
//  parameters - array of words
//  use filter to iterate the array and find all of the words that contain the letter 'a'
//  return the words that contain the letter 'a'
//END

const findWord = (words) => {  
    return words.filter(value => {
        if(value.toLowerCase().includes('a')){
            return value
        }
    })
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.
//Create a test function.
//  use describe() to pass in the name of the function, findWord
//  use it() to describe what findWord is doing
//      within it() write the test using expect and toEquals
//      test to make sure it returns the expected output
//END

describe("isFullHouse", () => {
    var hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    var hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    var hand3 = [5, 5, 5, 5, 4]
    // Expected output: false

    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {
        expect(isFullHouse(hand1)).toEqual(true)
        expect(isFullHouse(hand2)).toEqual(false)
        expect(isFullHouse(hand3)).toEqual(false)
    })
})

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// b) Create the function that makes the test pass.

//Create a function called isFullHouse
//  parameters - array of 5 numbers
//  create an array of 13 0's to represent the 13 cards count
//  iterate over the hand and whatever the value of the card is add 1 to the count for that value in the count array
//  A full house should have 3 and 2 of the same values so check to make there is a count of 3 and a count of 2
//  if true return true else return false
//END

const isFullHouse = (hand) => {
    handCountArr = Array(13).fill(0);
   
    for(let i = 0; i < hand.length; i++){
        handCountArr[hand[i]-1] += 1 
    }
    if(handCountArr.includes(3) && handCountArr.includes(2)){
        return true
    }
    else{
        return false
    }
}

//console.log(isFullHouse(hand1));