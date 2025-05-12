import todoList from "../../todo.js";

const { add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList } = todoList;

const today = new Date().toISOString().split("T")[0];
const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

add({ title: "Test overdue", dueDate: yesterday, completed: false });
add({ title: "Test due today", dueDate: today, completed: false });
add({ title: "Test due later", dueDate: tomorrow, completed: false });

markAsComplete(1);

console.log("Overdue");
console.log(toDisplayableList(overdue()));
console.log("\nDue Today");
console.log(toDisplayableList(dueToday()));
console.log("\nDue Later");
console.log(toDisplayableList(dueLater()));
