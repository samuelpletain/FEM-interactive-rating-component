function sendRating() {
  let rating = document.getElementsByName("rating");
  for(i=0;i<rating.length;i++){
    if (rating[i].checked) {
      document.getElementById("rating").innerHTML = rating[i].value;
    }
  }
  document.getElementById("prompt").classList.add("hidden");
  setTimeout(function() {
    document.getElementById("prompt").classList.add("disappear");
    document.getElementById("thanks").classList.add("appear");
    setTimeout(function() {
      document.getElementById("thanks").classList.add("show");
    }, 200);
  }, 500);
}

document.getElementById("submit-button").addEventListener("click", function(event){
  event.preventDefault();
});