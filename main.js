const input=document.getElementById('input')
const addBtn=document.getElementById('addBtn')
const taskBoard=document.getElementById('taskBoard')
let todoList=[]
addBtn.addEventListener("click",addTask)
function addTask(){
  let taskContent = input.value
  todoList.push(taskContent)
  console.log(todoList,'taskList')
  render()
}

function render(){
  let resultHTML ='';
  for(let i=0;i<todoList.length;i++){
    resultHTML +=`<div class="task">
    <div>${todoList[i]}</div>

    <div>
      <button>check</button>
      <button>delete</button>
    </div>

   </div>`
  }
  taskBoard.innerHTML=resultHTML
}