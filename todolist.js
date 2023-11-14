const todolist = [{
    name: 'Wake Up',
    duedate: '11/11/2013'
},
{
    name: 'eat breakfast',
    duedate: '11/12/2023'
}];

renderTodoList();

function renderTodoList(){
    let todolistHTML = '';


     todolist.forEach(function(todoObject, index){
        const {name, duedate} = todoObject;
        const html = `
        <P>
        ${name} ${duedate}
        <button class="js-delete-button">delete</button>
        </p>
        `;
        todolistHTML += html;
     });


    // for (let i=0; i<todolist.length; i++){
    //     const todoobject = todolist[i];
    //     const {name, duedate} = todoobject;
    //     const html = `
    //     <P>
    //     ${name} ${duedate}
    //     <button onclick="
    //     todolist.splice(${i}, 1);
    //     renderTodoList();
    //     ">delete</button>
    //     </p>
    //     `;
    //     todolistHTML += html;
    
    // }
    document.querySelector('.js-todo-list').innerHTML = todolistHTML;

    document.querySelectorAll('.js-delete-button').forEach((deletebutton, index)=>{
        deletebutton.addEventListener('click', ()=>{
            todolist.splice(index, 1);
        renderTodoList();
        })
    });
    
}

document.querySelector('.js-addtodo-button').addEventListener('click', ()=>{
       addTodo()   ;
})


addTodo = () => {
    const inputEle = document.querySelector('.js-input');
    const name = inputEle.value;

    const dateInputEle = document.querySelector('.js-date-input');
    const duedate = dateInputEle.value;
    todolist.push({
        //name: name,
        //duedate: duedate
        name,
        duedate
    });
    console.log(todolist);

    inputEle.value = '';

    renderTodoList();
}