// This function passes test 1

function pigLatin(word) {
    let result = word + "way";
    return result;
}


// chatGPT code that passes tests 2 and 3
// function pigLatin(word) {
// 	const vowelsArray = ["a", "e", "i", "o", "u"];
// 	const consonantsArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

// 	let wordArray = word.split("");
// 	let firstLetter = wordArray[0];

// 	// Check if the first letter is a consonant
// 	function isConsonant(letter) {
// 			return consonantsArray.includes(letter);
// 	}

// 	if (isConsonant(firstLetter)) {
// 			// If the first letter is a consonant, move it to the end of the word
// 			wordArray.shift();  // Remove the first letter
// 			wordArray.push(firstLetter);  // Add it to the end
// 			return wordArray.join("") + "ay";  // Add "ay" to create Pig Latin
// 	} else {
// 			// If the first letter is a vowel, simply add "ay" to the end
// 			return word + "way";
// 	}
// }

// This is our code that passes tests 2 and 3

const vowelsArray = ["a", "e", "i", "o", "u"]
const consonantsArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
const letterQ = ["q"]

//This is our newest experimental function
// function textToInputArray(text) {
//     let inputArray = text.split(" ");
//     console.log(inputArray);
//     inputArray.forEach(function (element) {
//         pigLatin(element);
//     })
// }

function consonantDetector(consonantsArray, firstLetter) {
    for (let i = 0; i < consonantsArray.length; i += 1) {
        if (consonantsArray[i] === firstLetter) {
            return true;
        };
        console.log("Looped");
    }
    return false;
}
function consonantDetector2(consonantsArray, secondLetter) {
    for (let i = 0; i < consonantsArray.length; i += 1) {
        if (consonantsArray[i] === secondLetter) {
            return true;
        };
        console.log("Looped");
    }
    return false;
}
function consonantDetector3(consonantsArray, thirdLetter) {
    for (let i = 0; i < consonantsArray.length; i += 1) {
        if (consonantsArray[i] === thirdLetter) {
            return true;
        };
        console.log("Looped");
    }
    return false;
}
function consonantDetector4(consonantsArray, fourthLetter) {
    for (let i = 0; i < consonantsArray.length; i += 1) {
        if (consonantsArray[i] === fourthLetter) {
            return true;
        };
        console.log("Looped");
    }
    return false;
}

function quDetector(quLetters) {
    if (quLetters === "qu") {
        return true;
    };
}


function pigLatin(word) {
    let output;
    let wordArray = word.split("");
    console.log(wordArray);
    console.log(wordArray[0]);
    let firstLetter = wordArray[0];
    let secondLetter = wordArray[1];
    let thirdLetter = wordArray[2];
    let fourthLetter = wordArray[3];
    let quLetters = wordArray[0] + wordArray[1];
    console.log(firstLetter);
    if (quDetector(quLetters)) {
        wordArray.shift();
        wordArray.shift();
        wordArray.push(quLetters)
        output = wordArray.join("") + "ay";
    } else if (consonantDetector(consonantsArray, firstLetter) && consonantDetector2(consonantsArray, secondLetter) && consonantDetector3(consonantsArray, thirdLetter) && consonantDetector4(consonantsArray, fourthLetter)) {
        wordArray.shift();
        wordArray.shift();
        wordArray.shift();
        wordArray.shift();
        wordArray.push(firstLetter, secondLetter, thirdLetter, fourthLetter);
        output = wordArray.join("") + "ay";
    } else if (consonantDetector(consonantsArray, firstLetter) && consonantDetector2(consonantsArray, secondLetter) && consonantDetector3(consonantsArray, thirdLetter)) {
        wordArray.shift();
        wordArray.shift();
        wordArray.shift();
        wordArray.push(firstLetter, secondLetter, thirdLetter);
        output = wordArray.join("") + "ay";
    } else if (consonantDetector(consonantsArray, firstLetter) && consonantDetector2(consonantsArray, secondLetter)) {
        wordArray.shift();
        wordArray.shift();
        wordArray.push(firstLetter, secondLetter);
        output = wordArray.join("") + "ay";
    } else if (consonantDetector(consonantsArray, firstLetter)) {
        wordArray.shift();
        wordArray.push(firstLetter);
        output = wordArray.join("") + "ay";
    } else {
        output = wordArray.join("") + "way";
    }
    return output;
}