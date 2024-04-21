
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addtask(){
    // if user doesn't enter something give alert msg 
    if(inputBox.value === ''){
        alert("Write something!");
    }
    else{
        // when user enter some task append it to that list class
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // to create X (cross tag)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // when the task is added and to add another task, empty it
    inputBox.value = "";

    saveData();
}

// to delete a particular task or mark or un-mark the task
listContainer.addEventListener("click",function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
    saveData();
},false);


// it will store the data inside the list conatiner under data
function saveData(){
    // and when ever we are going to input any task(data) or while we have to save it
    localStorage.setItem("data", listContainer.innerHTML);
}

// and we can call localStorage.getItem("data") ==> to get our data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
// this fucntion will be called everytime when we refresh our browser
showTask();