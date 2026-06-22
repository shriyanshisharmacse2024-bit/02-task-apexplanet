const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if(name === "" || email === ""){
        message.innerHTML = "All fields are required!";
        message.style.color = "red";
    }
    else{
        message.innerHTML = "Form Submitted Successfully!";
        message.style.color = "green";
    }
});

function addTask(){

    let taskInput = document.getElementById("taskInput");

    if(taskInput.value === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}
