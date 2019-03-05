var totalScore = 0;
var totalScore2 = 0;
var player1 = [];
var player2 = [];
var score = 0;
var score2 = 0;

function playertwo(){

}

$(document).ready(function() {
 $("#button-roll").click(function() {
   var roll = Math.floor(Math.random() * 6 + 1);
   turnScore += roll;
   document.getElementById('dice').innerHTML = roll;
   document.getElementById('totalscore').innerHTML = totalScore;
   if (roll == 1) {
     playerOne=[];
     $("#button-roll").hide();
     $("#holdButton").hide();
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
     $("#button-roll").show();
     $("#holdButton").show();
     totalScore = 0;
     document.getElementById('totalscore').innerHTML = totalScore;

   } else {
       totalScore += button-roll;
       player2.push(button-roll);
   }
 });
 $("#holdButton").click(function() {
 $("#button-roll").show();
 $("#holdButton").show();
   player2.forEach(function(player2) {
     return score2+= player2;
   });
   document.getElementById('scoretwo').innerHTML = score2;
   playerTwo = [];
   turnScore2 = 0;
   document.getElementById('totalscore2').innerHTML = totalScore2;
 });
});
