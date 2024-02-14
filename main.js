const input=document.getElementById('input')
const addBtn=document.getElementById('addBtn')
const taskBoard=document.getElementById('taskBoard')
const checkBtn=document.getElementById('checkBtn')
const deleteBtn=document.getElementById('deleteBtn')
const plan=document.getElementById('plan')
let todoList=[]
function randomId() {
  return "-" + Math.random().toString(36);
}

addBtn.addEventListener("click",addTask)

function addTask(){
  
  let task={
    id:randomId(),
    taskContent:input.value,
    isComplete:false,
  }
  todoList.push(task)
  input.value =""

  render()
}

function handleDelete (id){
for(let i=0;i<todoList.length; i++){
  if(todoList[i].id === id){
    todoList.splice(i,1);
    break;
  }
}
render()
}

function handleCheck (id){
  console.log(id,'id')
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id == id) {
      todoList[i].isComplete = !todoList[i].isComplete;
      break;
    }
  }
  render();
  console.log(todoList);

}

function render(){
  let resultHTML ='';
  for(let i=0;i<todoList.length;i++){
 
 const taskClass=todoList[i].isComplete?'taskDone':''
  
    resultHTML +=`<div class="task">
    <div class='${taskClass}'>${todoList[i].taskContent}</div>

    <div>
      <button id='checkBtn' onclick="handleCheck('${todoList[i].id}')">check</button>
      <button id='deleteBtn' onclick="handleDelete('${todoList[i].id}')">delete</button>
    </div>

   </div>`
  }
  taskBoard.innerHTML=resultHTML
}