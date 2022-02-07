// /*-------------------------------- Constants --------------------------------*/


//     const winCombos = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ]

// /*---------------------------- Variables (state) ----------------------------*/

// //let gameBoard = [null, null,null,null,null,null,null,null,null,];

// let
// turn, 
// cell,  
// isWinner 


// /* --------------------set messages as constants for code brevity-----------------*/

// //const winMessage = `${currentPlayer} has won!!!!`;
// const drawMessage =  'its a tie. Play again.';
// //currentTurnMessage =   ;
//  const player1Message = "Take your turn player 1" ;
//  const player2Message = "Take your turn player 2" ;



// /*------------------------ Cached Element References ------------------------*/

//   gameStatusMessage = document.querySelector("#message")
//   boardClick = document.querySelector('.board')
//   cell = boardClick.querySelector('cell')
//   resetButton = document.querySelector('reset')


// /*----------------------------- Event Listeners -----------------------------*/
// cell.forEach((square) => {
//   square.addEventListener('click', handleClick)
// })

// document.getElementsByClassName('cell', handleClick)
// boardClick.addEventListener('click', handleClick)
// //resetButton.addEventListener('click', init)


// /*-------------------------------- Functions --------------------------------*/

//   init()
  

//   console.log (gameBoard)
//   console.log(boardClick)

  

//   function init(){
  
//       gameBoard = [null,null,null,null,null,null,null,null,null,]
//       turn = 1
//       isWinner = null 
  
//       render();

//   }

  

//   function handleClick(evt) {

//     buttonClick = true

//     console.log (turn)
//     console.log(boardClick)
//     console.log(cell)

//       const cellLetter = evt.target.textContent 

        
//       if ((turn = 1) && (buttonClick = true )  )   {(buttonClick = false ) && (turn = -1 )

//       }else if ((turn = -1) && (buttonClick = true )){(buttonClick = false) && (turn = 1)}
      
      
//       if ((buttonClick = true ) && (turn = 1)  ){(evt.target.textContent = 'X') && (buttonClick = false)    
//         } else if ((buttonClick = true ) && (turn = -1 )  ){(evt.target.textContent = 'O') && (buttonClick = false)    
//       }
      
      
      
      
   



//     // gameBoard.forEach((cell, idx) => { 
//     // if ((buttonClick = true) && (turn = 1)){
//     //   //cell[idx].value = 1
//     // } else if ((buttonClick = true) && (turn = -1)){
//     //   cell[idx].value = -1
//     // }

//     // } )
          

//     //     let cellIdx = parseInt(evt.target.id.replace('sq', ''))
        
//     //     if (boardClick[cellIdx] || (isWinner = true) ) {return 
//     //     }
//     //     boardClick[cellIdx] = turn
//     //     turn *= -1
        
//     //     isWinner = getWinner


//     //     if ((buttonClick = true) && (evt.target.value === 1 || evt.target.value -1)){
//     //       buttonClick = false
//     //     }
//     //     console.log(cellIdx)
//     //     render()

//       }


//   function render() {
//     gameBoard.forEach((boardSq, idx) => {
//       //let cellColor
//       //let cellLetter = 


//         if(handleClick.evt.target.value = 1){
//           evt.target.textConent = 'x'
//         }



//     //   if (boardClick[idx] === 1) {
//     //     boardClick[idx].textContent = 'X'
//     //   } else if (boardClick [idx] === -1) {
//     //     board[idx].textContent = 'O'
//     //   } else if (boardClick [idx] === null) {
//     //     //cellColor = 'white'
//     //     board[idx].textContent = 'h'
//     // }
  
  
  
    
//   }
//     )
    
//   }


//     if (!isWinner) {
//       gameStatusMessage.innerText = `It is ${turn === 1 ? 'X' : 'O'}'s turn!'`
//     } else if (isWinner === 'T'){
//       gameStatusMessage.innerText = `Cat's game!` 
//     } else {
//       gameStatusMessage.innerText = `${isWinner === 1 ? 'X' : 'O'} is the winner!`
//     }
  



// function getWinner () {
//   if (Math.abs(gameBoard[0] + gameBoard[1] + gameBoard[2]) === 3) return gameBoard[0]
//   if (Math.abs(gameBoard[3] + gameBoard[4] + gameBoard[5]) === 3) return gameBoard[3]
//   if (Math.abs(gameBoard[6] + gameBoard[7] + gameBoard[8]) === 3) return gameBoard[6]
//   if (Math.abs(gameBoard[0] + gameBoard[3] + gameBoard[6]) === 3) return gameBoard[0]
//   if (Math.abs(gameBoard[1] + gameBoard[4] + gameBoard[7]) === 3) return gameBoard[1]
//   if (Math.abs(gameBoard[2] + gameBoard[5] + gameBoard[8]) === 3) return gameBoard[2]
//   if (Math.abs(gameBoard[0] + gameBoard[4] + gameBoard[8]) === 3) return gameBoard[0]
//   if (Math.abs(gameBoard[2] + gameBoard[4] + gameBoard[6]) === 3) return gameBoard[2]


//     if (gameBoard.includes(null)){
//     return null
//   } else {
//     return 'T'
//   }
// }










  

//   /*--------------------------------Notes------------------------- */





/*-------------------------------- Constants --------------------------------*/

const winningPatterns = [
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 4, 8],
	[2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
let isWinner, gameBoard, playerTurn


/*------------------------ Cached Element References ------------------------*/
const message = document.querySelector('#message')
const gameStatusTxt = document.querySelector('#message')
// const gameBoard = document.querySelector('#board')



let cells = document.querySelectorAll('.cell')

const resetBtn = document.querySelector('#reset')


/*----------------------------- Event Listeners -----------------------------*/


cells.forEach((cell) => {
	cell.addEventListener('click', handleClick)
})



/*-------------------------------- Functions --------------------------------*/



init()

function init() {
	playerTurn = 1
	isWinner = null
	gameBoard = [null, null, null, null, null, null, null, null, null]
	render()
}


function render() {
	gameBoard.forEach((cell, idx) => {
		let cellLetter
		if (gameBoard[idx] === 1) {
			cellLetter = 'X'
		} else if (gameBoard[idx] === -1) {
			cellLetter = 'O'
		} else if (gameBoard[idx] === null) {
			cellLetter = ''
		}
		cells[idx].innerHTML = cellLetter
	})

	if (!isWinner) {
		message.innerText = `It's player ${playerTurn === 1 ? 'X' : '0'}'s turn!`
	} else if (isWinner === 'T') {
		message.innerText = `It's a tie!`
	} else {
		message.innerText = `Player ${isWinner === 1 ? 'X' : 'O'} wins!!!`
	}
}


function handleClick(event) {
	let squareId = parseInt(event.target.id.replace('sq', ''))
	if (gameBoard[squareId] || isWinner) {
		return
	}
	gameBoard[squareId] = playerTurn
	playerTurn *= -1
	isWinner = winner()
	render()
}


function winner() {
	if (Math.abs(gameBoard[0] + gameBoard[3] + gameBoard[6]) === 3) return gameBoard[0]
	if (Math.abs(gameBoard[1] + gameBoard[4] + gameBoard[7]) === 3) return gameBoard[1]
	if (Math.abs(gameBoard[2] + gameBoard[5] + gameBoard[8]) === 3) return gameBoard[2]
	if (Math.abs(gameBoard[0] + gameBoard[1] + gameBoard[2]) === 3) return gameBoard[0]
	if (Math.abs(gameBoard[3] + gameBoard[4] + gameBoard[5]) === 3) return gameBoard[3]
	if (Math.abs(gameBoard[6] + gameBoard[7] + gameBoard[8]) === 3) return gameBoard[6]
	if (Math.abs(gameBoard[0] + gameBoard[4] + gameBoard[8]) === 3) return gameBoard[0]
	if (Math.abs(gameBoard[2] + gameBoard[4] + gameBoard[6]) === 3) return gameBoard[2]

	if (gameBoard.includes(null)) {
		return null
	} else {
		return 'T'
	}
}









/*--------------------------------Notes------------------------- */




