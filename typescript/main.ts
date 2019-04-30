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

