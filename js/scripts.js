//
var inputedSentence = [];
var numberOfRows;
var numberOfCols;
var multiArray = new Array();

var cryptoSquare = function(input) {
  if(/[a-zA-Z]/.test(input[0]) === true) {
    alert ("works")
  }
  else{
    alert ("doesnt works")
  }
  input = input.replace(/ /g,'');
  input = input.split("");

  numberOfCols = parseInt(Math.sqrt(input.length));
  numberOfRows = numberOfCols + 1;
  console.log(numberOfCols);

  for (i=0;i<numberOfCols;i++) {
    multiArray[i]=new Array();
    for (j=0;j<numberOfRows;j++) {
      multiArray[i][j]=0;
  }
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
