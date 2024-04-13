document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("interactive-form");
  var resultDiv = document.getElementById("result");
  var resultText = document.getElementById("result-text");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var selectedOption = document.querySelector('input[name="options"]:checked');
    if (selectedOption) {
      var score = parseInt(selectedOption.value);
      var result = getResult(score);
      resultText.textContent = result;
      resultDiv.style.display = "block";
    } else {
      alert("Please select an option.");
    }
  });

  function getResult(score) {
    if (score >= 20) {
      return "You got the best result!";
    } else if (score >= 15) {
      return "You got a good result!";
    } else if (score >= 10) {
      return "You got an average result.";
    } else {
      return "You got a poor result.";
    }
  }
});
