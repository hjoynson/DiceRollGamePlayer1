// let User1Total = 0;

// //Generate random number from 1 to 6

// const firstRandomNum=
// Math.floor(Math.random() * 6) + 1 ;


// // images/dice1.jpg up to images/dice6.jpg

// const firstDiceImage = 'assets/dice' + firstRandomNum + '.png';

// document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

// //Generate random number from 1 to 6

// const secondRandomNum=
// Math.floor(Math.random() * 6) ;


// // images/dice1.jpg up to images/dice6.jpg

// const secondDiceImage = 'assets/dice' + secondRandomNum  + '.png';

// document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);


// // // Logic for winner

// if (firstRandomNum > secondRandomNum) {
//     document.querySelector('h1').innerHTML = 'The Winner is User 1';


// } else if (firstRandomNum < secondRandomNum)
// {
//     document.querySelector('h1').innerHTML = 'The Winner is User 2';
// } else { document.querySelector('h1').innerHTML = 'It is a draw';

// }


let User1Total = 0;

document.getElementById("roll").addEventListener("click", () => {  
    // Play a sound - slight delay - so maybe see if can cycle images /delay image or something
    // document.getElementById("sound").play()

    // Generate a number
    let diceRolled = Math.floor(Math.random()*6)+1;


    // Generate dice image 
    const diceImage = 'assets/dice' + diceRolled + '.png';

    // Insert dice image
    document.querySelectorAll('img')[0].setAttribute('src', diceImage);
    let score = User1Total += diceRolled;
    document.getElementById("score").innerHTML = score


// Player 2
// let User2Total = 1;

   
//         // document.getElementById("sound").play()
//     document.getElementById("roll").addEventListener("click", () => {  
    
    
//         // Generate a number
//         let diceRolled = Math.floor(Math.random()*6)+1;
    
    
//         // Generate dice image 
//         const seconddiceImage = 'assets/dice' + diceRolled + '.png';
    
//         // Insert dice image
//         document.querySelectorAll('img')[1].setAttribute('src', diceImage);
//         let score = User2Total += diceRolled;
//         document.getElementById("score").innerHTML = score


    // Create win/lose scenario 
    if(score >=20){
        document.getElementById("winLose").textContent = "You win!"
        User1Total = 0;
    }
    else if (diceRolled ==1){ 
        document.getElementById("winLose").textContent = "You rolled 1! You lose!"
        document.getElementById("score").textContent = ""
        User1Total = 0;
    }
})


//Button to refresh the page

const refreshButton = document.getElementById('refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click',() => {
document.getElementById("score").textContent = 0 
document.getElementById("winLose").textContent = ""

}) 


