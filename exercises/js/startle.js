// startle.js
function startle () {
  // output 'BOO' after a delayed reaction.
  setTimeout(booOutputStr, 3000)
}

function booOutputStr () {
  var paragraph = document.getElementById('reaction')
  paragraph.appendChild(document.createTextNode('BOOOOO!'))
}
