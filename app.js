function onReady(){
//an array of to-dos
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
    function createNewToDo(){
//accesses the text input
      const newToDoText = document.getElementById('newToDoText');
/*prevents a user from submitting an empty to do item. 
Executes a return if newToDoText is false */
        if(!newToDoText.value) {return}

      toDos.push({
        title: newToDoText.value,
        complete: false
      });
      newToDoText.value = '';
      renderTheUI();
    }

    function renderTheUI(){
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';
//the forEach() method
      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type= "checkbox";
//adding the submitted to do to the ul as an li
        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
      });
    }
//listens for the event-- when the user clicks submit
    addToDoForm.addEventListener('submit', event => {
//keeps the page from reloading when the submit button is clicked
      event.preventDefault();
      createNewToDo();
    });

    renderTheUI();
}

window.onload = function(){
  onReady();
};
