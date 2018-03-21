// Function to enter choice from user and to create a random choice by computer.
function myfunction() {
  var user = prompt('Choose rock, paper or scissors')
  var computer, ran
  var ran = Math.floor(Math.random() * 3)
  if (ran == 1) {
    computer = 'rock'
  } else if (ran == 2) {
    computer = 'paper'
  } else {
    computer = 'scissors'
  }
  check(computer, user)
}
// Function to find out wheather you win/lose/draw.
function check(computer, user) {
  var result
  if (computer == 'rock' & user == 'rock') {
    result = 'draw'
  } else if(computer == 'rock'& user == 'paper') {
    result = 'win'
  } else if(computer == 'rock' & user == 'scissors')
    resutl = 'lose'
   if (computer == 'paper' & user == 'rock') {
    result = 'lose'
  } else if(computer =='paper' & user == 'paper') {
    result = 'draw'
  } else if(computer == 'paper' & user == 'scissors')
    result = 'win'
  if (computer == 'scissors' & user == 'rock') {
    result = 'win'
  } else if(computer =='scissors' & user == 'paper') {
    result = 'lose'
  } else {
    result = 'draw'
  }
  alert('Computer choose ' + computer)
  alert('You ' + result)
}

