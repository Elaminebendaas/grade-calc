//New row creation
const addRowBtn = document.getElementById('addRow')
const table = document.getElementById("table")

addRowBtn.addEventListener('click', newRow)

function newRow(){
    let index = 1
    let newRow = table.insertRow()
    const nameInput = document.createElement('input')
    const gradeInput = document.createElement('input')
    const weightInput = document.createElement('input')


    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('placeholder','e.g Midterm 1')

    gradeInput.setAttribute('type', 'number')
    gradeInput.setAttribute('name', 'grade[]')
    gradeInput.setAttribute('min','0')

    weightInput.setAttribute('type','number')
    weightInput.setAttribute('name', 'weight[]')
    weightInput.setAttribute('min','0')


    newRow.append(nameInput)
    newRow.append(gradeInput)
    newRow.append(weightInput)
    index ++
}
