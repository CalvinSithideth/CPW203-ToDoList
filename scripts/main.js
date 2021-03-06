var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addBtn = document.querySelector("#create-item > button");
    addBtn.onclick = processNewItem;
    var readItemBtn = document.querySelector("#read-item > button");
    readItemBtn.onclick = readItem;
};
var itemKey = "todo";
function readItem() {
    var item = JSON.parse(localStorage.getItem(itemKey));
    alert(item.title);
    alert(item.description);
}
function processNewItem() {
    var item = getItemFromForm();
    saveItem(item);
    notifyUser();
    clearForm();
    displayToDo(item);
}
function displayToDo(item) {
    var todoList = document.getElementById("todo-list");
    var itemPar = document.createElement("p");
    itemPar.innerText = item.title;
    itemPar.setAttribute("data-description", item.description);
    itemPar.onclick = toggleItemComplete;
    todoList.appendChild(itemPar);
}
function toggleItemComplete() {
    var currItem = this;
    currItem.classList.toggle("completed");
    var title = currItem.innerText;
    var description = currItem.getAttribute("data-description");
    alert("You completed " + title + ": " + description);
}
function clearForm() {
    var textElements = document.querySelectorAll("input[type=text], textarea");
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].value = "";
    }
    var isCompleteBox = document.querySelector("#is-complete");
    isCompleteBox.checked = false;
    var urgencyLow = document.querySelector("#urgencyLow");
    urgencyLow.checked = true;
}
function notifyUser() {
    alert("Your item was saved");
}
function saveItem(item) {
    var data = JSON.stringify(ToDoItem);
    console.log("Converting ToDoItem into JSON string...");
    console.log(data);
    if (typeof (Storage) != "undefined") {
        localStorage.setItem(itemKey, data);
    }
}
function getUrgencyFromForm(formID) {
    var urgencyRadioButtons = document.querySelectorAll("input[type=text], textarea");
    for (var button = 0; button < urgencyRadioButtons.length; button++) {
        if (urgencyRadioButtons[button].checked) {
            return urgencyRadioButtons[button].value;
        }
    }
}
function getItemFromForm() {
    var item = new ToDoItem();
    item.title = document.getElementById("title").value;
    item.description = document.getElementById("description").value;
    var itemStartDate = document.getElementById("start-date").value;
    item.startDate = new Date(itemStartDate);
    var itemEndDate = document.getElementById("end-date").value;
    item.endDate = new Date(itemEndDate);
    item.isComplete = document.getElementById("is-complete").checked;
    item.urgency = getUrgencyFromForm("create-item");
    return item;
}
