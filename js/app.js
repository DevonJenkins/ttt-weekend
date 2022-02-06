/*-------------------------------- Constants --------------------------------*/


    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

/*---------------------------- Variables (state) ----------------------------*/
// 1) Define the required variables used to track the state of the game:
  // None of these variables will need to hold a value when they are defined

	// 1.1) Use an array to represent the squares on the board.    

	// 1.2) Use a turn variable to track whose turn it is.

	// 1.3) Use a winner variable to represent three different game states:
	  // a player that won
	  // a tie has occured
	  // or a game that is still in play.




let gameBoard = [null, null,null,null,null,null,null,null,null,];


let turn = '' //will be 1 or 2 depending on whose turn it is 
//let winner = playerWon, tie, gameInPlay   
let isWinner = null; 


//let sq0= (gameBoard[i] === 0) 





/* --------------------set messages as constants for code brevity-----------------*/

//const winMessage = `${currentPlayer} has won!!!!`;
const drawMessage =  'its a tie. Play again.';
//currentTurnMessage =   ;
 const player1Message = "Take your turn player 1" ;
 const player2Message = "Take your turn player 2" ;



/*------------------------ Cached Element References ------------------------*/

  gameStatusMessage = document.querySelector("#message")
  board = document.querySelector('.board')
  cell = board.querySelectorAll('#cell')
  resetButton = document.querySelector('#reset')


/*----------------------------- Event Listeners -----------------------------*/
cell.forEach((cell)=> {
  cell.addEventListener('click', handleClick)
})

board.addEventListener('click', handleClick)
resetButton.addEventListener('click', init())


/*-------------------------------- Functions --------------------------------*/

  init()
  

function sayHi(){
  console.log('hello')
}
  

  


  function init(){
  
      gameBoard = [null,null,null,null,null,null,null,null,null,]
      turn = 1
      winner = null 
    
      render();

  }

  

      function render() {
        gameBoard.forEach((cell, idx) => {
          //let cellColor
          let cellLetter

          if (cell === 1) {
            //cellColor = 'orange'
            cellLetter = 'X'
          } else if (cell === -1) {
            //cellColor = 'blue'
            cellLetter = 'O'
          } else if (cell === null) {
            //cellColor = 'white'
            cellLetter = ''
        }
        //cell[idx].style.background = cellColor
        cell[idx].style.textContent= cellLetter 
        
    })


    //   if (turn = 1){
    //   gameStatusMessage.textContent = player1Message
    // } else if (turn = 2){

    //   gameStatusMessage.textContent = player2Message
    // } 
    
    // if(turn === 1){
        
    //   evt.target.textContent = 'X' 
    
    //     //evt.taget.value = 1
    //     }
    //     else if(turn === -1){
    //     evt.target.textContent = 'O' 
    // }
  }



      // 3.3) The render function should:
        // 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration:

        //for(i = 0; i < 8; i++){}
          // 3.3.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
          // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
        // 3.3.2) Render a message reflecting the currrent game state:
          // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
            // Hint: Maybe use a ternary inside of a template literal here?
          // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
          // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
            // Hint (again): Maybe use a ternary inside a template literal here
    
        // 3.4) After completing this step, you should be able to manually change the values held in the board array in the initialization function and see the style of the corresponding square change on your page.
  

  function handleClick(evt) {
    let cellIdx = parseInt(evt.target.id.replace('sq', ''))
    
    if (gameBoard[cellIdx] || (isWinner = true) ) {return 
    }

    // buttonClick = true
    // if(turn === 1){
    // evt.target.textContent = 'X' 

    // //evt.taget.value = 1
    // }
    // else if(turn === -1){
    // evt.target.textContent = 'O' 


    // //evt.target.value = -1
    // }else {evt.target.textContent = ''} 

    // console.log(turn)   
    // console.log(gameBoard)
    
    render()

  }
  
  function handleTurn(){

    if (buttonClick = true )
{ turn = turn * -1}
  }


  //   if ((turn = 1 ) && (buttonClick = true)) {      (turn = turn * -1 )   && (buttonClick = false )

  //   }else if((turn = -1) && (buttonClick = true)){
  //         (turn = turn * -1) && (buttonClick = false)
  //   }
  // }
  
  




  

  /*--------------------------------Notes------------------------- */
  // 5) Next, the app should wait for the user to click a square and call a handleClick function
  // the handleClick function will...

	// 5.1) Obtain the index of the square that was clicked by:
	  // 5.1.1) "Extracting" the index from an id assigned to the element in the HTML 
		// Hint: Each id seems to correspond with an index in our board array. How could these be used if
		// we cleaned them up a bit?

	// 5.2) If the board has a value at the index, immediately return because that square is already taken.

	// 5.3) If winner is not null, immediately return because the game is over.

	// 5.4) Update the board array at the index with the value of turn.

	// 5.5) Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa).

	// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	  // The getWinner function will...

	  // 5.6.1) There are a couple methods you can use to find out if there is a winner.
	   // This is the first, more elegant way that takes advantage of the winningCombos array you wrote above in step 4.
	   // The 5.6.2 step is a little simpler to comprehend, but you'll need to write a lot more code.
	   // The 5.6.2 step also won't take advantage of the winningCombos array, but using it as a reference will help you build a solution.
	   // Choose only one path.
		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.2) This solution is less elegant, but might be easier to write on your own if you're struggling with the 5.6.1.X pseudocode.
		  // 5.6.2.1) For each one of the winning combinations you wrote in step 4, find the total of each winning combination.
		  // 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
		  // 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.3) Next, If there's no winner, check if there's a tie:

		// 5.6.4) Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T".
	  
		// 5.6.5) Otherwise return null.

// 5.7) All state has been updated, so render the state to the page (step 3.3).


// 6) Handle a player clicking the replay button:

	// 6.1) Add a replay button to the HTML document

	// 6.2) Store the new replay button element

	// 6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render)