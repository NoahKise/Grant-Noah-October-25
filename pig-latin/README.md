####Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "For words beginning with 1 consonant it will move the first letter to the end."
Code: pigLatin("big");
Expected Output: "igb"

Test: "For words beginning with 1 consonant it will move the first letter to the end and add 'ay'."
Code: pigLatin("big");
Expected Output: "igbay"

Test: "For words beginning with 2 consonants it will move the first 2 letters to the end and add 'ay"."
Code: pigLatin("stick")
Expected Output: "ickstay"

Test: "For words beginning with 3 consonants it will move the first 3 letters to the end and add 'ay"."
Code: pigLatin("school")
Expected Output: "oolschay"

Test: "For words beginning with 4 consonants it will move the first 4 letters to the end and add 'ay"."
Code: pigLatin("schtick")
Expected Output: "ickschtay"

Test: "For words beginning with QU move the Q and the U to the end and add 'ay'."
Code: pigLatin("quiz")
Expected Output: "izquay".