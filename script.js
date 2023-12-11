const fullNameInput = document.getElementById("fullName")
const addBtn = document.getElementById("add")
const dataBody = document.getElementById("dataBody")
const deleteFirstBtn = document.getElementById("deleteFirstBtn")
const deleteLastBtn = document.getElementById("deleteLastBtn")
let namesArray = []

addBtn.addEventListener("click", () => {
    if (!fullNameInput.value) return alert("Laukelis tuščias")

    const [name, surname] = fullNameInput.value.split(" ")

    const person = { name, surname }
    namesArray.push(person)

    const row = document.createElement("tr")
    const nameCell = document.createElement("td")
    const surnameCell = document.createElement("td")

    nameCell.innerText = person.name
    surnameCell.innerText = person.surname

    row.appendChild(nameCell)
    row.appendChild(surnameCell)

    dataBody.appendChild(row)

    localStorage.setItem("namesArray", JSON.stringify(namesArray))

    fullNameInput.value = ""
})

let getNamesArray = JSON.parse(localStorage.getItem("namesArray")) || []
namesArray = getNamesArray

namesArray.forEach(({ name, surname }) => {
    const row = document.createElement("tr")
    const nameCell = document.createElement("td")
    const surnameCell = document.createElement("td")

    nameCell.innerText = name
    surnameCell.innerText = surname

    row.appendChild(nameCell)
    row.appendChild(surnameCell)

    dataBody.appendChild(row)
})

function deleteFirst() {
    namesArray.shift()

    localStorage.setItem("namesArray", JSON.stringify(namesArray))

    refreshTable()
}

function deleteLast() {
    namesArray.pop()

    localStorage.setItem("namesArray", JSON.stringify(namesArray))

    refreshTable()
}

function refreshTable() {
    dataBody.innerHTML = ""

    namesArray.forEach(({ name, surname }) => {
        const row = document.createElement("tr")
        const nameCell = document.createElement("td")
        const surnameCell = document.createElement("td")

        nameCell.innerText = name
        surnameCell.innerText = surname

        row.appendChild(nameCell)
        row.appendChild(surnameCell)

        dataBody.appendChild(row)
    })
}

deleteFirstBtn.addEventListener("click", deleteFirst)
deleteLastBtn.addEventListener("click", deleteLast)
