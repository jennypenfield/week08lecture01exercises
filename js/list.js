// list.js
// You are provided with two files. The index.html file contains an empty list
// of items and a form with a text input field and a button. When the user enters
// text and clicks the button it will invoke a function in the list.js file named addItem().
// The addItem() function currently reads the text from the input field and places it
// into a variable named text. Next, it empties the content of the text field. Your job
// is to update the addItem() function so that it creates a new list item and adds it
// to the end of the unordered list in index.html.

function addItem () {
  // get the text typed into the input field
  var text = document.getElementById('item').value
  var ordList = document.getElementById('list')
  // create a new list item and append it to the ordered list
  var newLiEl = document.createElement('li')
  newLiEl.appendChild(document.createTextNode(text))
  ordList.appendChild(newLiEl)
  // clear the text in the input field
  document.getElementById('item').value = ''
}
