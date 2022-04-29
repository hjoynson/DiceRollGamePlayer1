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


// // Player 2
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


