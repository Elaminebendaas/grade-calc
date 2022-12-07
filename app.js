//New row creation
const addRowBtn = document.getElementById('addRow')
const table = document.getElementById("table")

addRowBtn.addEventListener('click', newRow)

function newRow(){
    let newRow = document.createElement('tr')
    const nameInput = document.createElement('input')
    const gradeInput = document.createElement('input')
    const weightInput = document.createElement('input')


    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('placeholder','e.g Midterm 1')

    gradeInput.setAttribute('type', 'number')

    weightInput.setAttribute('type','number')


    table.insertRow()
    newRow.append(nameInput)
    newRow.append(gradeInput)
    newRow.append(weightInput)

}
