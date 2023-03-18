
window.addEventListener('load', () => {
    // todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    
    // let localItems = JSON.parse(localStorage.getItem('localtem'));
    // if(localItems === null){
    //     taskList = [];
    // }else{
    //     taskList = localItems;
    // }
    // taskList.push(input.value);
    // localStorage.setItem('localtem',JSON.stringify('localItem'))
    // showList();

    // function showList(){
    //     let output = '';
    //     let taskListShow = list
    //     let localItems = JSON.parse(localStorage.getItem('localtem'));

    //     if(localItems === null){
    //         taskList = [];
    //     }else{
    //         taskList = localItems;
    //     }   
    // }

    const form = document.querySelector('#taskForm');
    const input = document.querySelector('#taskInput');
    const list = document.querySelector('#tasks');
    const topBox = document.querySelector('header');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value

        if (!task) {
            const error = document.createElement('div');
            error.classList.add('error');
            const errorMessage = document.createTextNode('Try writing something you will want/have to do');
            error.appendChild(errorMessage);
            topBox.prepend(error);
            return;
        }

        const createTask = document.createElement('div');
        createTask.classList.add('task');

        list.appendChild(createTask);

        const taskContent = document.createElement('div');
        taskContent.classList.add('content');

        createTask.appendChild(taskContent);

        const taskInput = document.createElement('textarea');
        taskInput.value = task;
        taskInput.classList.add('text');
        taskInput.setAttribute('readonly','true');

        taskContent.appendChild(taskInput);

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('actions');

        createTask.appendChild(taskButtons);

        editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.classList.add('edit');

        taskButtons.appendChild(editButton);
        
        deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.classList.add('delete');
        
        taskButtons.appendChild(deleteButton);

        list.appendChild(createTask);

        input.value = '';

       editButton.addEventListener('click', () =>{
            if (editButton.innerText.toLowerCase() == 'edit')
            {
                editButton.innerText = 'Save';
                taskInput.removeAttribute('readonly');
                taskInput.focus();
            }else{
                taskInput.setAttribute('readonly', 'true');
                editButton.innerText = 'Edit';
            }
       })

       deleteButton.addEventListener('click', () =>{
            list.removeChild(createTask);
       })

    })
})