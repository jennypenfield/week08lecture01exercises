// exercise 1: print out the span elements:
var getTheSpans = document.getElementsByTagName('span')
console.log(getTheSpans)

// Write JavaScript that will select all of the div tags with a class of foo
// and log them to the console.
var getfooClassDivs = document.querySelectorAll('div.foo')
console.log(getfooClassDivs)

// exercise 3: Given the following HTML document, write JavaScript
// code that will remove any list elements containing the letter "a".
// For all remaining list items, set the element's title to the text of the item.
// EG: If the item's text is "sandwich" it would be removed. If the item's text is "egg"
// the item's title would be set to "egg".
removeListItemsContainingA()

function removeListItemsContainingA () {
  var liEl = document.getElementsByTagName('li')
  for (var i = 0; i < liEl.length; i++) {
    if (liEl[i].textContent.indexOf('a') !== -1) {
      liEl[i].remove()
    } else {
      liEl[i].title = liEl[i].textContent
    }
  }
  console.log(liEl)
}
