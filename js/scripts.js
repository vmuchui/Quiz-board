//back-end logic

$(document).ready(function(){
  $("#submit").click(function(){
    var checkResponse = function() {
      var question1 = document.getElementById('question1').value;
      var question2 = document.getElementById('question2').value;
      var question3 = document.getElementById('question3').value;
      var question4 = document.getElementById('question4').value;
      var question5 = document.getElementById('question5').value;
      var question6 = document.getElementById('question6').value;
      var answerCorrect = 0;

      if (question1=) {
        answerCorrect++
      }
      if (question2=) {
        answerCorrect++
      }
      if (question3=) {
        answerCorrect++
      }
      if (question4=) {
        answerCorrect++
      }
      if (question5=) {
        answerCorrect++
      }
    }
  });
});





//user interface logic starts here:
$(document).ready(function(){
  $("#button").click(function(){
    $(".card-deck").slideDown();
    $("#submit").slideDown();
    $(".disappear").fadeOut();
  });
});
