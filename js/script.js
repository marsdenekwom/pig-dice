var totalScore = 0;
var totalScore2 = 0;
var player1 = [];
var playerTwo = [];
var score = 0;
var score2 = 0;

function playertwo(){

}

$(document).ready(function() {
 $("#button-roll").click(function() {
   var roll = Math.floor(Math.random() * 6 + 1);
   turnScore += roll;
   document.getElementById('dice').innerHTML = roll;
   document.getElementById('turnscore').innerHTML = turnScore;
   if (roll == 1) {
     playerOne=[];
     $("#button-roll").hide();
     $("#holdButton").hide();
     $("#roll2").show();
     $("#hold2").show();
     turnScore = 0;
     document.getElementById('turnscore').innerHTML = totalScore;

   } else {
       turnScore += roll;
       playerOne.push(roll);
   }
 });
 $("#holdButton").click(function() {
   $("#button-roll").hide();
   $("#holdButton").hide();
   playerOne.forEach(function(playerone) {
     return score+= playerone;
   });
   document.getElementById('score').innerHTML = score;
   playerOne = [];
   turnScore = 0;
   document.getElementById('totalscore').innerHTML = totalScore;
 });
 $("#button-roll").click(function() {
   var roll2 = Math.floor(Math.random() * 6 + 1);
   turnScore2 += button-roll;
   document.getElementById('dicetwo').innerHTML = roll2;
   document.getElementById('totalscore').innerHTML = totalScore;
   if (roll2 == 1) {
     player2=[];
     $("#roll").show();
     $("#hold").show();
     $("#roll2").hide();
     $("#hold2").hide();
     turnScore2 = 0;
     document.getElementById('turnscore2').innerHTML = turnScore2;

   } else {
       turnScore2 += roll2;
       playerTwo.push(roll2);
   }
 });
 $("#hold2").click(function() {
 $("#roll").show();
 $("#hold").show();
 $("#roll2").hide();
 $("#hold2").hide();
   playerTwo.forEach(function(playertwo) {
     return score2+= playertwo;
   });
   document.getElementById('scoretwo').innerHTML = score2;
   playerTwo = [];
   turnScore2 = 0;
   document.getElementById('turnscore2').innerHTML = turnScore2;
 });
});
