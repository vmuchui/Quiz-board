//back-end logic

$(document).ready(function(){
  $("#submit").click(function(){
    function checkResponse(question1,question2,question3,question4,question5) {
      var question1 = document.getElementById('question1').value;
      var question2 = document.getElementById('question2').value;
      var question3 = document.getElementById('question3').value;
      var question4 = document.getElementById('question4').value;
      var question5 = document.getElementById('question5').value;
      var question6 = document.getElementById('question6').value;
      var answerCorrect = 0;

      if ("#question1 === ECMAjavascript") {
        answerCorrect++
      }
      if ("#question2 === Modulus") {
        answerCorrect++
      }
      if ("#question3 === ECMA") {
        answerCorrect++
      }
      if ("#question4 === console") {
        answerCorrect++
      }
      if ("#question5 === Cascading") {
        answerCorrect++
      }
    }
  });
});





//user interface logic starts here:
$(document).ready(function(){
  $("#button").click(function(){
    $("#showFirst").slideDown();
    $("#openNext").slideDown();
    $(".disappear").fadeOut();
  });
  $("#openNext").click(function(){
    $("#showSecond").fadeIn();
    $("#openLast").fadeIn();
    $("#showFirst").fadeOut();
    $("#openNext").fadeOut();

  });
  $("#openLast").click(function(){
    $("#showLast").fadeIn();
    $("#submit").fadeIn();
    $("#showSecond").fadeOut();
    $("#openLast").fadeOut();
  });
});
