console.log("test");
var myHonor = 1001;

function processData(data){
  var currentHonor = data.honor;
  if (currentHonor != myHonor)
  {
    $("#levelUp").text("Congrats on leveling up!!! Your old score: " + myHonor + "Your new score: " + currentHonor);
  }
  myHonor =currentHonor;
}

setInterval(() =>{
  $.ajax({url : "https://www.codewars.com/api/v1/users/chessmonger2112",success:processData})}
  ,1000)
