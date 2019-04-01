//back-end logic
$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();
    var arrayFirst = [];
    for (i = 1; i <= 5; i++) {
      var query = "questions" + i;
      arrayFirst.push(query);
    }
    var inputs = document.getElementById("questions").elements;
    var score = 0;
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == 'radio' && inputs[i].checked) {
        score++;
      }
    }
    if (score < 5) {
      alert("Please retake your test!!");
    } else {
      alert("You have answered all the questions!!!Good Job.");
    }


    var arrSecond = [];
    for (var index = 0; index < arrayFirst.length; index += 1) {
      var questions = parseInt($("input[name=" + arrayFirst[index] + "]:checked").val());
      arrSecond.push(questions);
    }
    var total = 0;
    for (var index = 0; index < arrSecond.length; index += 1) {
      total += arrSecond[index];
    }
    $("#scoreSheet").slideDown();
    document.getElementById('finalscore').innerHTML = "A total of " + total + "%";
    if (total >= 80) {
      document.getElementById('message').innerHTML = "You are awesooome!";
    } else if (total >= 50 && total < 80) {
      document.getElementById('message').innerHTML = "Fairly done";
    } else {
      document.getElementById('message').innerHTML = "Please consider redoing the test";
    }


  });
});






//user interface logic starts here:
$(document).ready(function() {
  $("#button").click(function() {
    $("#showFirst").slideDown();
    $("#openNext").slideDown();
    $(".disappear").fadeOut();
  });
  $("#openNext").click(function() {
    $("#showSecond").fadeIn();
    $("#openLast").fadeIn();
    $("#showFirst").fadeOut();
    $("#openNext").fadeOut();
  });
  $("#openLast").click(function() {
    $("#showLast").fadeIn();
    $("#submit").fadeIn();
    $("#reload").fadeIn();
    $("#showSecond").fadeOut();
    $("#openLast").fadeOut();
    $("#footer").slideDown();
  });

});
