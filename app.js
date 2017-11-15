function onReady() {
  let newNum = 0;
    let toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');
    function createNewToDo(){
        const newToDoText = document.getElementById('newToDoText');
        if(!newToDoText.value){return;}
        toDos.push ({
            title: newToDoText.value,
            complete: false,
      id: newNum
        });
        newToDoText.value='';
    newNum++;
        renderTheUI();
    }

    function renderTheUI(){
        const toDoList = document.getElementById('toDoList');
            toDoList.textContent = '';
        toDos.forEach(function(toDo){
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            const delButton = document.createElement('button');
            checkbox.type = "checkbox";
            newLi.textContent = toDo.title;
            delButton.textContent = "Delete";
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(delButton);
        });

    delButton.addEventListener('click', event => {
        let newArray = toDos.filter(toDo => {return toDo.id !== id});
        toDos.splice(toDo.id, 1);
        toDos = newArray;
    });

    }

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
    });


    renderTheUI();
}

window.onload = function() {
    onReady();
};
