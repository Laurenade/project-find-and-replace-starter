// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.

const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
/* 
    function getCellElements (currentRowElement) {
        return currentRowElement.querySelectorAll(".cell")
    }
*/


// YOUR CODE GOES HERE

replaceAllButton.addEventListener("click", function() {
    let findBoxValue = findInput.value
    let replaceBoxValue = replaceInput.value
    const cellsArray = []
    for (let position = 1; position <= rowElements.length; position += 1) {
            currentRowElement = rowElements[position]
            function getCellElements (currentRowElement) {
                return currentRowElement.querySelectorAll(".cell")               
            }
            cellsArray.push(getCellElements)
            for (let position= 1; position <= cellsArray.length; position += 1) {
                if (cellsArray.includes(findBoxValue)) {
                    return cellsArray.innerHTML.replace(findBoxValue, replaceBoxValue)
                }
            }
    }
    //   console.log('good')
})

/*  
loop over rowElements 
getCellElements function used within rowElements loop
    - will return an array of cell info for a row
loop over cell info

GOAL:  Add a basic "find & replace" feature to our app
- User enters word/value into 'find' box.
- User enters word/value into 'replace' box.
- User clicks 'replace all' button.
    - Retrieve values entered into boxes.
    - A loop goes through the document and locates all instances of value entered 
        and pushes to array.
    - A loop goes through created array and changes all original values to new/replace value.
- All instances of word/value in 'find' box is replaced with the word/value in 'replace' box.

// -----1. Add a click event listener to the replaceAllButton
// -----2. On click, but outside of a loop, assign the values of the two input 
//        textboxes (findInput and replaceInput), so that you are only retrieving 
//        these values once per click.
// -----3. Write a loop which loops over the rowElements array (which is already 
//        provided in the starter code).
// -----4. Inside this loop, use the getCellElements() function (already provided in the 
//        starter code) and assign the resulting array of cell elements to a variable.
// -----5. Write a nested loop which loops over the array of cell elements.
// -----6. For each cell element, check if a cell contains the user-provided search 
//        string. Use the string method includes().
// -----7. If a cell does contain the user-provided search string, use innerHTML and the 
//        string method replace() to replace the user-provided search string with 
//        the user-provided replacement string.
// -----8. In all your loops, avoid using low-meaning index variables like "i" and "j".
*/


// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
