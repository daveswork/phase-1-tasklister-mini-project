document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const formIntercept = document.querySelector("#new-task-description");
  const todoList = document.querySelector("#tasks");
  const todoForm = document.querySelector("#create-task-form");

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const listItemText = e.target["new-task-description"].value;
    addListItem(listItemText, todoList);
  })
});

function addListItem(someText, listName){
  let listElement = document.createElement("li");
  listElement.textContent = someText;
  listName.appendChild(listElement);

}
