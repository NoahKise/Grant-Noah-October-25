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

// const vowelsArray = ["a", "e", "i", "o", "u"]
// const consonantsArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
// const letterQ = ["q"]

// function consonantDetector(consonantsArray, firstLetter) {
//     for (let i = 0; i < consonantsArray.length; i += 1) {
//         if (consonantsArray[i] === firstLetter) {
//             return true;
//         };
//         console.log("Looped");
//     }
//     return false;
// }

// function pigLatin(word) {
//     let output;
//     let wordArray = word.split("");
//     console.log(wordArray);
//     console.log(wordArray[0]);
//     let firstLetter = wordArray[0];
//     console.log(firstLetter);
//     if (consonantDetector(consonantsArray, firstLetter)) {
//         wordArray.shift();
//         wordArray.push(firstLetter);
//         output = wordArray.join("") + "ay";
//     } else {
//         output = wordArray.join("") + "way";
//     }
//     return output;
// }


