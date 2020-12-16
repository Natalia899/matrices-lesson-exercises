const Matrix = require('./Matrix')
class EmployeeMatrix extends Matrix {
    constructor() {
        super()
    }
    loadData(data){
        this.matrix = []
	    data.forEach(object => this.matrix.push((Object.values(object))))
    }

    getEmployees(department) {
        let employees = []
        for (let i=0; i<this.matrix.length; i++){
            if(this.matrix[i][2] === department) {
                employees.push(this.matrix[i][1])
            }
        } return employees
    }
    getTotalSalary(department) {
        let total = 0
        for (let i=0; i<this.matrix.length; i++){
            if(this.matrix[i][2]=== department) {
                total+= this.matrix[i][3]
            }
        } return total
    }
    findRichest(){
       let richest
        let highest = 0
        for (let i=0; i<this.matrix.length; i++){
            if (this.matrix[i][3]> highest){
                highest = this.matrix[i][3]
                richest = this.matrix[i][1]
            } 
        }return richest
    } 
}

let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
//m.print()
//prints
//console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
//console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
// e10021  Gillian Finance 2000
// e10725  Tibor   Design  1200
// e10041  Anisha  Finance 2300
// e10411  Jakub   Design  1600
// e11995  Mar     Design  1300
// e10732  Nisha   Design  1200

//console.log(m.getTotalSalary("Finance")) //prints 4300
//console.log(m.getTotalSalary("Design")) //prints 5300
console.log(m.findRichest()) //prints Anisha

/* Do not remove the exports below */
module.exports = EmployeeMatrix