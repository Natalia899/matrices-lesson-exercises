class Matrix {
    constructor(rowNum, colNum) {
        this.matrix = this.generateMatrix(rowNum, colNum)
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }

    printAllMatrixNumbers() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                console.log(this.matrix[i][j])
            }
        }
    }

    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }

    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }

    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }
    alter(rowNum, colNum, newValue) {
        this.matrix[rowNum][colNum] = newValue
        return this.matrix
    }

    findCoordinate(value) {
    for (let i = 0; i < this.matrix.length; i++) {
        for (let j = 0; j < this.matrix[i].length; j++) {
             if(this.matrix[i][j] === value) {
                 return {x: i, y: j}
             }
        }
     }
 }

}

// let m = new Matrix(3, 4)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}



// let m = new Matrix(3, 4)
// m.print()
// //prints
// /*
// 1       2       3       4
// 5       6       7       8
// 9       10      11      12
// */

// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)






/* Do not remove the exports below */
module.exports = Matrix