function updatePage() {

// Get user input values
let nameInput = document.getElementById("userName").value;
let messageInput = document.getElementById("messText").value;
let selectedColor = document.getElementById("backgroundColor").value;

// Update greeting if name is entered
if (nameInput !== "") {
document.getElementById("userGreeting").innerHTML = "Hello " + nameInput + "!";
}

// Update message if message is entered
if (messageInput !== "") {
document.getElementById("userMessage").innerHTML = messageInput;
}

// Update background color if selected
if (selectedColor !== "") {
document.body.style.backgroundColor = selectedColor;
}

}