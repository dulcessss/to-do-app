function onReady(){
//const is used instead of var because it prevents accidental reassignment
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText= document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
    addToDoForm.addEventListener('submit', event => {
//prevents the page from reloading
      event.preventDefault();
//gets the text from the moment the user clicks submit
      let title = newToDoText.value;
//create a new bullet li
      let newLi = document.createElement('li');
//create a new input
      let checkbox = document.createElement('input');
//set the input's type as a checkbox
      checkbox.type = "checkbox";
//set the title
      newLi.textContent = title;
//attach the checkbox to the bullet or li element
      newLi.appendChild(checkbox);
//attach the new bullet or li element to the ul
      toDoList.appendChild(newLi);
//clears out the input bar so that you don't have to delete to add new To-Do
      newToDoText.value = '';
    });
}

window.onload = function(){
  onReady();
};
