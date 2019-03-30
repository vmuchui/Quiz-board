//back-end logic

$(document).ready(function(){
  $("#submit").click(function(){
    function checkResponse() {
      var question1 = document.questions.question1.value;
      var question2 = document.questions.question2.value;
      var question3 = document.questions.question3.value;
      var question4 = document.questions.question4.value;
      var question5 = document.questions.question5.value;
      var question6 = document.questions.question6.value;
      var answerCorrect = 0;

      if (question1 === "ECMAjavascript") {
        answerCorrect++
      }
      if (question2 === "Modulus") {
        answerCorrect++
      }
      if (question3 === "ECMA") {
        answerCorrect++
      }
      if (question4 === "console") {
        answerCorrect++
      }
      if (question5 === "Cascading") {
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
