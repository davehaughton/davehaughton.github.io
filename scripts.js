

function userChoice(e){
    const paper = document.querySelector('.paper');
    const rock = document.querySelector('.rock');
    const scissors = document.querySelector('.scissors');
    const versus = document.querySelector('.versus');
    const user = document.querySelector('.user');
   
    versus.classList.add('show');
    user.classList.add('nogap');

    if(e == "rock"){
       
        paper.classList.add('hide');
        scissors.classList.add('hide');
    } else if(e == "paper"){
       
        rock.classList.add('hide');
        scissors.classList.add('hide');
    } else {
       
        paper.classList.add('hide');
        rock.classList.add('hide');
    }

    for(let i = 0; i < 10; i++){
        rand.push(Math.floor(Math.random() * 3) + 1);
    }

    myLoop(e);

}

const rand = [];
let j = 0;

function myLoop(e) {
    const computer = document.querySelector('.computer');
    const text= document.querySelector('.computer .text');
    const overlay= document.querySelector('.overlay');
    const overlayText= document.querySelector('.overlay .text');
    let comp;
  setTimeout(() => {
    //console.log(rand[j]); 
    computer.classList.add('show');

    if(rand[j] == 1){
        computer.classList.remove('paper');
        computer.classList.remove('scissors');
        computer.classList.add('rock');
        text.innerHTML = "Rock";
        comp = 'rock';
    } else if(rand[j] == 2){
        computer.classList.remove('rock');
        computer.classList.remove('scissors');
        computer.classList.add('paper');
        text.innerHTML = "Paper";
        comp = 'paper';
    } else {
        computer.classList.remove('rock');
        computer.classList.remove('paper');
        computer.classList.add('scissors');
        text.innerHTML = "Scissors";
        comp = 'scissors';
    }

    j++;

    if (j < rand.length) {
      myLoop(e); 
    } else {
        overlay.classList.add('showit');
        setTimeout(() => {
            overlay.classList.add('fadein');
            if(e == 'rock'){
                if(comp == 'scissors'){
                    overlayText.innerHTML = "You Win, Rock beats Scissors";
                } else if(comp == 'paper'){
                    overlayText.innerHTML = "You Lose, Paper beats Rock";
                } else {
                    overlayText.innerHTML = "It\'s a Rock draw";
                }

            } else if(e == 'paper'){

                if(comp == 'scissors'){
                    overlayText.innerHTML = "You Lose, Scissors beat Paper";
                } else if(comp == 'paper'){
                    overlayText.innerHTML = "It\'s a Paper draw";
                } else {
                    overlayText.innerHTML = "You Win, Paper beats Rock";
                }

            } else {

                if(comp == 'scissors'){
                    overlayText.innerHTML = "It\'s a Scissors draw";
                } else if(comp == 'paper'){
                    overlayText.innerHTML = "You Win, Scissors beat Paper";
                } else {
                    overlayText.innerHTML = "You Lose, Rock beats Scissors";
                }

            }



        }, 1000);
            
        }
  }, 50);
}

function playagin(){
    location.reload();
}