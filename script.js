const ul = document.querySelector("ul");
let input = document.querySelector("input");
const button = document.querySelector("button");

function addItem(){
    let newItem = input.value;
    input.value = "";
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    li.append(span);
    li.textContent = newItem;
    li.appendChild(deleteButton);
    deleteButton.textContent = "Delete";
    ul.append(li);

    deleteButton.onclick = function(e) {
        ul.removeChild(li);
    }
    input.focus();
}