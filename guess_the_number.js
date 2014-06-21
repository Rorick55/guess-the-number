var randomNumber = Math.floor(Math.random() * 100 + 1);
var numberPicked;
var maxNum = 100;
var minNum = 0;



$(document).ready(function(){
  /// Adding in the numbers /////
   for(var i = 1; i <= 100; i++){
    var $li = $('<li>').attr({id: i, class: 'number'}).html(i);
    $('#body').append($li);
   };
  //////////Styling hover/////////
    $('.number').mouseenter(function(){
      $(this).addClass('opacity');
    });
    $('.number').mouseleave(function(){
      $(this).removeClass('opacity');
    });
  //////////Number selection/////////////
    $('.number').click(function(){
        var num = $(this).text();
        numberPicked = parseInt(num);
      if(numberPicked < randomNumber) {
        for(i = minNum; i <= numberPicked; i++){
          $("#"+i).addClass('hidden');
        };
        minNum = numberPicked;
      } else if(numberPicked > randomNumber){
        for(i = numberPicked; i <= maxNum; i++){
          $("#"+i).addClass('hidden');
        };
        maxNum = numberPicked;
      } else {
        $('h1').text('You Won!! The number was ' + randomNumber);
        $('#'+randomNumber).addClass('correct');
        // alert("Correct! the number was " + randomNumber);
        $('#body').prepend("<h2 class='again'>Play Again?</h2>");
      };
      ////////Reloading the game///////////
    $('.again').click(function(){
        location.reload();
    });
  });
});








