var randomNumber = Math.floor(Math.random() * 100 + 1);
var numberPicked;
var maxNum = 100;
var minNum = 1;



$(document).ready(function(){
  /// Adding in the numbers /////
   for(var i = 1; i <= 100; i++){
    $('#body').append("<li class='number' id='"+i+"'>"+i+"</li>");
   };
  //////////Styling hover/////////
    $('.number').mouseenter(function(){
      $(this).fadeTo('fast', 0.5);
    });
    $('.number').mouseleave(function(){
      $(this).fadeTo('fast', 1);
    });
  //////////Number selection/////////////
    $('.number').click(function(){
        numberPicked = $(this).text();
      if(numberPicked < randomNumber) {
        for(var i = numberPicked; i >= minNum; i--){
          $("#"+i).hide();
        };
        minNum = numberPicked
      } else if(numberPicked > randomNumber){
        for(var i = numberPicked; i <= maxNum; i++){
          $("#"+i).hide();
        };
        maxNum = numberPicked - 1
      } else {
        alert("Correct! the number was " + randomNumber);
        $('#body').prepend("<h2 class='again'>Play Again?</h2>");
      };
      ////////Reloading the game///////////
    $('.again').click(function(){
        location.reload();
    });
  });
});








