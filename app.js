//New row creation
const addRowBtn = document.getElementById('addRow')
const table = document.getElementById("table")
addRowBtn.addEventListener('click', newRow)

//Grade output
const container = document.querySelector('.container')
const percentageGrade = document.createElement('p')
container.append(percentageGrade)
let percentage = false
let letterGrade = false



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

//Grade output Buttons
const percentBtn = document.getElementById('percentage')
const letterBtn = document.getElementById('letter-grade')
const calculate = document.getElementById('calculate')

percentBtn.addEventListener('click', percentTrue)
letterBtn.addEventListener('click', letterTrue)
calculate.addEventListener('click', gradeOutput)

function percentTrue(){
    letterGrade = false
    letterBtn.classList.remove('selected-btn')
    percentage = true
    percentBtn.classList.add('selected-btn')
}
function letterTrue() {
    percentage = false
    percentBtn.classList.remove('selected-btn')
    letterGrade = true
    letterBtn.classList.add('selected-btn')
}
function gradeOutput(){
    gradeCalc()
}

//Grade Calc prep Functions
function gradeCalc() {
    let grades = document.getElementsByName('grade[]')
    let weight = document.getElementsByName('weight[]')
    var finalgrades = []
    for (let i = 0; i<grades.length; i++){
        let grade = (grades[i].value/100)*weight[i].value
        finalgrades[i] = grade
        console.log(finalgrades[i])
    }
    if (percentage === true){
        percentageOutput(finalgrades)
    }//else if (letterGrade === true){
      //  lettergradeOutput(finalgrades)
    //}

}


//Grade Output Functions
function percentageOutput(array) {
    var t = 0
    for (let i=0; i<array.length; i++){
        t += array[i]
    }
    console.log(t)
    return percentageGrade.textContent = 'Your final grade is:' + t
}
function lettergradeOutput(array){
    var t = 0
    for (let i=0; i<array.length; i++){
        t += array[i]
    }
    if (t <50){
        return percentageGrade.textContent = 'Your final grade is:' + 'F'
    }else if (50<=t<55){
        return percentageGrade.textContent = 'Your final grade is:' + 'D'
    }else if (55<t<60){
        return percentageGrade.textContent = 'Your final grade is:' + 'D+'
    }else if (60<=t<64){
        return percentageGrade.textContent = 'Your final grade is:' + 'C'
    }else if (65<=t<60){
        return percentageGrade.textContent = 'Your final grade is:' + 'C+'
    }else if (60<=t<60){
        return percentageGrade.textContent = 'Your final grade is:' + 'B'
    }else if (60<=t<60){
        return percentageGrade.textContent = 'Your final grade is:' + 'B+'
    }else if (60<=t<60){
        return percentageGrade.textContent = 'Your final grade is:' + 'A-'
    }else if (60<=t<60){
        return percentageGrade.textContent = 'Your final grade is:' + 'A'
    }else if (60<=t<60){
        return percentageGrade.textContent = 'Your final grade is:' + 'A+'
    }
}
