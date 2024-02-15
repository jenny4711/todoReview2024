const input=document.getElementById('input')
const addBtn=document.getElementById('addBtn')
const taskBoard=document.getElementById('taskBoard')
const checkBtn=document.getElementById('checkBtn')
const deleteBtn=document.getElementById('deleteBtn')
const plan=document.getElementById('plan')
let taps=document.querySelectorAll(".taskTaps div")
let underLine = document.getElementById("underLine");
let mode="all"
let filterList=[]
let todoList=[]
for(let i=1;i<taps.length;i++){
  taps[i].addEventListener("click",function(evt){filter(evt)})
  taps[i].addEventListener("click", (e) => moveUnderLine(e));
}




function randomId() {
  return "-" + Math.random().toString(36);
}

addBtn.addEventListener("click",addTask)


function moveUnderLine(evt){
  underLine.style.left = evt.currentTarget.offsetLeft + "px";
  underLine.style.width = evt.currentTarget.offsetWidth + "px";
  underLine.style.top =
    evt.currentTarget.offsetTop + evt.currentTarget.offsetHeight + "px";
}

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



function filter(evt) {
  mode = evt.target.id;
  filterList = [];
  if (mode === "all") {
    render();
  } else if (mode === "ongoing") {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].isComplete == false) {
        filterList.push(todoList[i]);
      }
    }

    render();
  } else if (mode === "done") {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].isComplete === true) {
        filterList.push(todoList[i]);
      }
    }
  }
  render();
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
  let list =[]
if(mode ==="all"){
list =todoList
}else if(mode === "ongoing"){
list = filterList
}else if(mode === "done"){
  list =filterList
}


  let resultHTML ='';
  for(let i=0;i<list.length;i++){
 
 const taskClass=list[i].isComplete?'taskDone':''
  
    resultHTML +=`<div class="task">
    <div class='${taskClass}'>${list[i].taskContent}</div>

    <div>
      <button id='checkBtn' onclick="handleCheck('${list[i].id}')">check</button>
      <button id='deleteBtn' onclick="handleDelete('${list[i].id}')">delete</button>
    </div>

   </div>`
  }
  taskBoard.innerHTML=resultHTML
}