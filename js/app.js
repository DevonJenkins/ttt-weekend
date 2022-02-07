





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




