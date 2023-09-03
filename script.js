// Assigning HTML elements to variables

const inputText = document.getElementById("i9pii")
const listContainer = document.getElementById("i5bpg")

// Calling the function to load the data everytime the site is opened/refreshed
loadList()

// Function for creating a new div when "ADD" is pressed
function createTask(){
    if(inputText.value === "") // Checking if the the input is null and showing an alert if so
    {
        alert("You must type something first.")
    }
    else // If the input is a valid string
    {   
        let newTask = document.createElement("div") // Creating a new div element for the task
        newTask.className = "gjs-grid-column" // & assigning it's class
        newTask.id = "i4xgw" // & it's id
        
        // Setting it's content to HTML code using the pre-made template and adding the input text to it
        newTask.innerHTML = `
            <img id="isqhz" src="./check.png"/>
            <div id="i41az">` + inputText.value + `<br/></div><button type="button" id="izrdk">X</button>
        `
        // Appending the new div to the parent div which contains all the tasks
        listContainer.appendChild(newTask)

        // Clearing the input box
        inputText.value = ""

        // Saving the data
        saveList()
    }
}

// An event listener for handling clicks on the delete button
addEventListener("click", function(element){
    let parentDiv = element.target.parentElement
    if(parentDiv.id == "i4xgw" && element.target.id == "izrdk"){
        parentDiv.remove()
        saveList()
    }
})

// Function for saving the data in the browser
function saveList(){
    localStorage.setItem("listData", listContainer.innerHTML)
}

// Function for loading the data from the browser 
function loadList(){
    listContainer.innerHTML = localStorage.getItem("listData")
}