//
var inputedSentence = [];
var numberOfRows;
var numberOfCols;
var multiArray = new Array();
var counter;
var outputSentence = [];

var cryptoSquare = function(input) {
  counter=0;
  if(/[a-zA-Z]/.test(input[0]) === true) {
    input = input.replace(/ /g,'');
    input = input.split("");
    numberOfCols = parseInt(Math.sqrt(input.length));
    numberOfRows = numberOfCols;
    for (y=0;y<numberOfRows; y++) {
      multiArray[y] = new Array();
      for (x=0;x<numberOfCols;x++) {
        multiArray[y][x] = input[counter]
        counter++;
        outputSentence.push(multiArray[y])
      }
     console.log(outputSentence);
    }


  }
  else{
    alert ("doesnt works")
  }


};


//
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    inputedSentence = $("#inputSentence").val();
    cryptoSquare(inputedSentence);
  })
});
