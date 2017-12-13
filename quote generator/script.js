$(document).ready(function() {
  var tweet;
  $("#generate").click(function() {
    $("#quote").empty();

    function reqListener() {
      var joke = JSON.parse(this.responseText);
      $("#quote").append(joke.value.joke);
      tweet = joke.value.joke;
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://api.icndb.com/jokes/random", true);
    oReq.send();

    $("#quote").show();
    $("#mainContainer").addClass("shake");

    setTimeout(function(){
      $("#mainContainer").removeClass("shake");
    },500);
  });
  $("#tweet").click(function() {
    window.open("https://twitter.com/?status=".concat(tweet), '_blank');
  });
});