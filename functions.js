// Generate random number


let counting = 0;
let first_player = 4;
let second_player = 4;

// Set the image depends on Number
document.querySelectorAll("img")[0].setAttribute("src", "images/rps_1.png");
document.querySelectorAll("img")[1].setAttribute("src", "images/rps_1.png");

let start = document.querySelector('.container')

//play again button
let play_again = document.createElement('button')
play_again.setAttribute('class', 'btn btn-secondary btn-lg')
play_again.textContent = 'Play Again'
play_again.setAttribute('onClick', 'window.location.reload()')

//create button left player
let left_button = document.createElement('button')
left_button.textContent = 'Player 1'
left_button.setAttribute('class', 'btn btn-outline-danger btn-lg')
left_button.addEventListener('click', left)
start.appendChild(left_button)
//create button right player
let right_button = document.createElement('button')
right_button.textContent = 'Player 2'
right_button.setAttribute('class', 'btn btn-outline-danger btn-lg')
right_button.addEventListener('click', rigth)
start.appendChild(right_button)

//create break line
let breaks = document.createElement('br')
start.appendChild(breaks)
start.appendChild(play_again)

//right button function
function rigth(){
  if (counting == 0 && second_player == 4){
    second_player = Math.ceil(Math.random() * 3);
    counting++;
    temp = second_player.toString();
    document.querySelector('.announcer').textContent = 'Player 1 Turn';
    document.querySelectorAll("img")[1].setAttribute("src", "images/rps_" + second_player +".png");
  }
  else if (counting == 1 && second_player == 4) {
    second_player = Math.ceil(Math.random() * 3);
    document.querySelectorAll("img")[1].setAttribute("src", "images/rps_" +second_player+".png");
    comparison(first_player, second_player)
  }
}

//left button function
function left(){
  if (counting == 0 && first_player == 4){
    first_player = Math.ceil(Math.random() * 3);
    counting++;
    temp = first_player.toString();
    document.querySelector('.announcer').textContent = 'Player 2 Turn';
    document.querySelectorAll("img")[0].setAttribute("src", "images/rps_" +first_player+".png");
  }
  else if (counting == 1 && first_player == 4) {
    first_player = Math.ceil(Math.random() * 3);
    document.querySelectorAll("img")[0].setAttribute("src", "images/rps_" +first_player+".png");
    comparison(first_player, second_player)
  }
}

function comparison(first, second){
  if(first == 1){
    if(second == 3){
      document.querySelector("h1.announcer").textContent = "Player 1 Wins 🚩";
    }
    else if(second == 2){
      document.querySelector("h1.announcer").textContent = "Player 2 Wins 🚩";
    }else{
      document.querySelector("h1.announcer").textContent = "It is A Tie🍔"
    }
  }else if(first == 2){
    if(second == 1){
      document.querySelector("h1.announcer").textContent = "Player 1 Wins 🍌"
    }
    else if(second == 3){
      document.querySelector("h1.announcer").textContent = "Player 2 Wins 🍌";
    }else{
      document.querySelector("h1.announcer").textContent = "It is A Tie🍔"
    }
  }else if(first == 3){
    if(second == 2){
      document.querySelector("h1.announcer").textContent = "Player 1 Wins 🍕"
    }
    else if(second == 1){
      document.querySelector("h1.announcer").textContent = "Player 2 Wins 🍕"
    }else{
      document.querySelector("h1.announcer").textContent = "It is A Tie🍔"
    }
  }
}
