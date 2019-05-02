/**
 * Represents a single task in a ToDo List
 */
class ToDoItem {
    title:string;
    description:string;
    startDate:Date;
    endDate:Date;
    isComplete:boolean;
    urgency:string;
    subTasks:Array<ToDoItem>;
}




/*
// Testing out the class
let testItem = new ToDoItem();
testItem.title = "Teach CPW 203";
testItem.startDate = new Date("April 30, 2019");
testItem.endDate = new Date();
testItem.description = "Lecture advanced JavaScript like a boss!";
testItem.isComplete = true;
if (testItem.isComplete) {
    
}
*/

// When Add Item is clicked
    // Get data off the page and wrap in ToDo object
    // Notify user and clear form
    // Save ToDo object

window.onload = function() {

    let addBtn = <HTMLButtonElement> document.querySelector("#create-item > button");
    addBtn.onclick = processNewItem;

}

function processNewItem() {
    let item:ToDoItem = getItemFromForm();
    saveItem(item);
    notifyUser();
    clearForm();
}

/**
 * Get all user input from Form
 * and wrap it in a ToDoItem
 */
function getItemFromForm():ToDoItem {
    let item = new ToDoItem();

    item.title = (<HTMLInputElement> document.getElementById("title")).value;
    item.description = (<HTMLTextAreaElement> document.getElementById("description")).value;

    let itemStartDate = (<HTMLInputElement> document.getElementById("start-date")).value;
    item.startDate = new Date(itemStartDate);

    let itemEndDate = (<HTMLInputElement> document.getElementById("end-date")).value;
    item.endDate = new Date(itemEndDate);

    item.isComplete = (<HTMLInputElement> document.getElementById("is-complete")).checked;

    let urgencyElem = <HTMLSelectElement> document.getElementById("urgency");
    item.urgency = urgencyElem.options[urgencyElem.selectedIndex].text;

    return item;
}

function saveItem(item:ToDoItem):void {
    // ensure user can use localStorage
    if (typeof(Storage) != "undefined") {
        localStorage.setItem("todo", item.title);
    }
}