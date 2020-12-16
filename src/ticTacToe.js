const Matrix = require('./Matrix')
class TicTacToe extends Matrix {
    constructor(){
        super()
    }
    loadBoard(){
        for (let i=0; i<3; i++){
            this.matrix[i]= []
            for (let b=0; b<3; b++) {
                this.matrix[i].push('.')
            }
        }
    }

    play(rowNum, columnNum, player) {
        player === 1 ? this.alter(rowNum, columnNum, 'x') : this.alter(rowNum, columnNum, '0')
    }

}

// let board = new TicTacToe()
// board.loadBoard()
// board.print()

// let board = new TicTacToe()
// board.loadBoard()

// board.play(2, 2, 1)
// board.play(0, 0, 2)
// board.print()
//prints 

module.exports = TicTacToe