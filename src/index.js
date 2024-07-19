//const { domSymbolTree } = require("jsdom/lib/jsdom/living/helpers/internal-constants");

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // const formIntercept = document.querySelector("#new-task-description");
  // const todoList = document.querySelector("#tasks");
  const todoForm = document.querySelector("#create-task-form");

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const listItemText = e.target["new-task-description"].value;

    // addListItem(listItemText, todoList);


    const taskList = document.getElementById("tasks")

    const taskLI = document.createElement("li")

    const newTaskDescriptionInputElement = document.getElementById('new-task-description')

    taskLI.append(newTaskDescriptionInputElement.value)

    const deleteTaskButton = document.createElement('button')
    deleteTaskButton.textContent = "X"
    deleteTaskButton.setAttribute('data-description', newTaskDescriptionInputElement)

    deleteTaskButton.addEventListener('click', () => {
      taskLI.remove()
      // add 'event' as param to the callback function  to access the parent node. 
      // console.log(event.target.parrentNode)
    })


    taskLI.append(deleteTaskButton)

    taskList.appendChild(taskLI)

    // clear the <input> withing the form after we're finished with our work.
    todoForm.reset()


  })
});

// function addListItem(someText, listName){
//   let listElement = document.createElement("li");
//   listElement.textContent = someText;
//   listName.appendChild(listElement);

// }



// create list item

//add list item to existing list


// const taskLI = document.createElement("li")

// //Append adds multiple items within an element block
// taskLI.append("hello", document.createElement())

