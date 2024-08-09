// Task 1: Console log "Script running" and confirm your script.js is linked correctly

console.log("Script Running")

// Task 2:
// Console log the title of the document.
console.log(document.title)

// (Pink only) Task 3:
// Console log the id of the document's body.

console.log(document.body.id)

// Task 4:
// Select the img tag for Baby Yoda and save it in a variable.

let BabyYoda = document.querySelector("#baby-yoda-image")

// Console log the variable to confirm you selected it correctly.
 console.log(BabyYoda)

// (Yellow skip) Console log the alt of the variable to see the image's alternative caption.

console.log(BabyYoda.alt)

// Task 5:
// Select the p tag with the fun fact and save it in a variable.

let funFact = document.querySelector(".fun-fact")
                                     
// Console log the variable to confirm you selected it correctly.
console.log(funFact)

// (Yellow skip) Console log the textContent of the p tag to see the fun fact text

console.log(funFact.textContent)
// Task 6:
// Add an ID to the p tag with the quote in HTML (in the div with the class quote-container).

// Select the quote and save it in a variable.
let quote = document.querySelector("#quote")

// Console log the variable to confirm you selected it correctly.

console.log(quote)
// (Yellow skip) Task 7: 
// Add the class "information" to the two p tags before the quote in HTML (in the container div)


// Select the first of those p tags (selecting by class will always return the first match)
let info = document.querySelector(".information")

// Console log the variable to confirm you selected it correctly.

console.log(info)
// (Pink only, extra credit for others) Look up how to select multiple elements at once and select ALL p tags with the class

info = document.querySelectorAll(".information")

// (Pink only, extra credit for others) Console log the variable to confirm you selected it correctly 

console.log(info)

//ms gomes said that that was right^^^

// (Extra Credit for all) Use a for loop to console log the text content of each of the selected p tags with the class

for (let i=0; i<2; i++){
  
}
