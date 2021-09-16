let player = {
    Name: "sepi",
    Chips: 145       

}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

function startGame()
{
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    playerEl.textContent = player.Name + " : $" + player.Chips
    renderGame()
}


function renderGame(){
   
    let message = ""
    sumEl.textContent = "sum : " + sum
    cardEl.textContent = "cards : " 
    for(let i = 0 ; i < cards.length ; i++){
        cardEl.textContent += cards[i] + " "
    }
    if (sum <= 20)
    message = "do you want to draw a new card ?"
    else if(sum === 21) 
    {
        message = " wohoo ! you've got blackjack"
        hasBlackJack = true
    }

    else {
        message = "you are out of game"
        isAlive = false
    }
    messageEl.innerText = message 

}
function newCard (){
    if (isAlive === true && hasBlackJack === false){
    let thirdCard = getRandomNumber()
    sum = sum + thirdCard
    cards.push (thirdCard)
    renderGame() }
}
function getRandomNumber()
{
    let numberRandom = Math.floor(Math.random()*13 + 1 )
    if (numberRandom === 1 ){
        return 11
    }
    else if(10 < numberRandom ){
        return 10

    } else {
        return numberRandom

    }
     
}