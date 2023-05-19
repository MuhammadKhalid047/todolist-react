import bar from './img/bar.png';
import plus from './img/plus.svg'
import search from './img/search.png'
import right from './img/right.png'
import checklist from './img/checklist.png'
import calendar from './img/calendar.png'
import ellipsis from './img/ellipsis.png'
import './App.css';

function App() {
  return (
    <div>
        <div className=" fonts-Raleway position-absolute br-2 p-4 nav-bar" id="nav-bar">
          <div className=" fonts-Raleway d-flex justify-content-space-between font-ralway">
              <h2 className=" fonts-Raleway text-outer-space">Menu</h2>
              <img src={bar} alt="" className=" fonts-Raleway bar-icon" width="25px" onClick={toggleFunction}  style={{ marginTop: '6px' }}/>
          </div>
          <div className=" fonts-Raleway detail">
              <div className=" fonts-Raleway d-flex align-items-center gap-1 w-100 search-icon-input mt-2 p-1">
                  <img src={search} alt="search" width="23px"/>
                  <input type="search" placeholder="Search" className=" fonts-Raleway search p-1 w-100"/>
              </div>
              <div className=" fonts-Raleway tasks pt-4">
                  <h4 className=" fonts-Raleway text-outer-space pt-2">Tasks</h4>
                  <ul className=" fonts-Raleway font-14 text-outer-space task-list">
              {/* <a href=""> */}
                <li>
                  <img src={right} alt="right" width="17px" />
                  All <span className=" fonts-Raleway numTask">0</span>
                </li>
              {/* </a> */}
              {/* <a href=""> */}
                <li>
                  <img src={checklist} alt="checklist" width="17px" />
                  Pending <span className=" fonts-Raleway todayTask">0</span>
                </li>
              {/* </a> */}
              {/* <a href=""> */}
                <li>
                  <img src={calendar} alt="calendar" width="17px" />
                  Complete
                </li>
              {/* </a> */}
            </ul>
              </div>
          </div>
        </div>
        <div className=" fonts-Raleway todo-main p-4">
            <div className=" fonts-Raleway d-flex align-items-center justify-content-space-between">
                <div className=" fonts-Raleway d-flex gap-2">
                    <h1 className=" fonts-Raleway ">Today</h1>
                    <h1 className=" fonts-Raleway number br-2 todoCount">0</h1>
                </div>
                <div id="today" className=" fonts-Raleway " ></div>
            </div>
            <div className=" fonts-Raleway add-tasks pt-4">
                <span className=" fonts-Raleway d-flex align-items-center gap-1 p-2 br-2 " onClick={toggleRight} ><img src={plus} alt="plus" width="15px"/>Add New Task</span>
            </div>
            <ul id="toboCheck" className=" fonts-Raleway mt-3">
            </ul>
        </div>
        
        <div className=" fonts-Raleway right-slider p-4 br-2" id="right-slider">
            <div className=" fonts-Raleway newTask">
              <h2>Tasks</h2>
              <form action="" className=" fonts-Raleway taskInput" method="post">
                <input type="text" className=" fonts-Raleway font-14 d-block w-100 br-1 p-2 mt-3 newTask-input" id="inputTitle" placeholder="Task Title"/>
                <textarea name="description" placeholder="Description" id="inputDescription" className=" fonts-Raleway font-14 d-block w-100 br-1 p-2 mt-3 newTask-input-description" rows="3"></textarea>
                <label for="list" className=" fonts-Raleway mt-3 p-1 font-14">List</label>
                <select id="list" name="list" className=" fonts-Raleway font-14 mt-3 br-1">
                  <option value="personal" className=" fonts-Raleway font-14">Personal</option>
                  <option value="Work" className=" fonts-Raleway font-14">Work</option>
                  <option value="Friends" className=" fonts-Raleway font-14">Friends</option>
                </select>
                <br/>
                <label for="due-date" className=" fonts-Raleway font-14 mt-3 p-1 br-1">Due Date</label>
                <input type="date" name="due-date" id="due-date" className=" fonts-Raleway font-14 mt-3 br-1"/>
                <br/>
                
                <h3 className=" fonts-Raleway pt-4">Subtasks</h3>
                <div className=" fonts-Raleway pt-4 d-flex font-14">
                  <input type="text" placeholder="+ Add Task" id="subtaskInput" className=" fonts-Raleway br-1 subtask-input p-1 border-none"/>
                  <span className=" fonts-Raleway subtask-add pointer" onClick={newElement}>Add</span>	
                </div>
                <ul id="subtaskList"></ul>
                
                <div className=" fonts-Raleway d-flex justify-content-right align-items-center gap-4">
                  <input type="button" value="Delete Task" className=" fonts-Raleway pointer delete dstask font-bold border-none br-1" onclick="deleteTask()"/>
                  <span className=" fonts-Raleway save dstask br-1 font-bold border-none pointer font-14" onClick = {newTask}>Save Change</span>	
                </div>
              </form>
            </div>
          </div>
          
    </div> 
  );
}
function toggleFunction() {
  var x = document.getElementById("nav-bar");
  x.classList.toggle("nav-toggle");
  var y = document.getElementsByClassName("detail")[0];
  y.classList.toggle("detail-display");
  var z = document.getElementsByTagName("body")[0];
  z.classList.toggle("body-margin");
}

function toggleRight(){
  var x = document.getElementsByClassName("right-slider")[0];
    x.classList.toggle("right-slider-toggle");
    var z = document.getElementsByTagName("body")[0];
    z.classList.toggle("body-right-slider");
}

function currentDate(){
  
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  document.getElementById("today").innerHTML = today ;
}
// currentDate();

  window.onload = function() {
    loadTasks();
  };
  
//   // function colorChange(){
//   //   var listcol = document.getElementById("list");
//   //   var value = listcol.value;
//   //   if (value === "personal") {
//   //     categorySpan.innerHTML = '<span class="green"></span>Personal';
//   //   } else if(value === "Work"){
//   //     categorySpan.innerHTML = '<span class="red"></span>Work';
//   //   }else{
//   //     categorySpan.innerHTML = '<span class="blue"></span>Friends';
//   //   }
//   // }
  function newTask() {
    var inputTitle = document.getElementById("inputTitle");
    var descriptionInput = document.getElementById('inputDescription');
    var listInput = document.getElementById('list');
    var dueDateInput = document.getElementById('due-date');
    var subtaskList = document.getElementById('subtaskList');
    
    var storedValue = localStorage.getItem("subtaskListValue");
    document.getElementById("subtaskList").value = storedValue;

    var inputTitleValue = inputTitle.value;
    var descriptionInputValue = descriptionInput.value;
    var listInputValue = listInput.value;
    var dueDateInputValue = dueDateInput.value;
    
    if (inputTitleValue.trim() === "" || descriptionInputValue.trim() === "") {
      alert("Please enter a Title.");
      return;
    }
  
    var tasks = getTasks();
    tasks.push({
      title: inputTitleValue,
      description: descriptionInputValue,
      list: listInputValue,
      dueDate: dueDateInputValue,
      subTask :storedValue
    });
  
    localStorage.setItem("tasks", JSON.stringify(tasks));
    inputTitle.value = "";
    descriptionInput.value = "";
    listInput.value = "";
    dueDateInput.value = "";
    subtaskList.value = "";
    displayTasks();
  }
  function editTask(index) {
    var tasks = getTasks();
    var task = tasks[index];
    
    var inputTitle = document.getElementById("inputTitle");
    var descriptionInput = document.getElementById('inputDescription');
    var listInput = document.getElementById('list');
    var dueDateInput = document.getElementById('due-date');
    
    inputTitle.value = task.title;
    descriptionInput.value = task.description;
    listInput.value = task.list;
    dueDateInput.value = task.dueDate;
    
    tasks.splice(index, 1);
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // toggleRight();
    displayTasks();
    toggleRight()
  }
  

  function removeTask(index) {
    var tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
  
  function getTasks() {
    var tasks = localStorage.getItem("tasks");
    if (tasks) {
      return JSON.parse(tasks);
    }
    return [];
  }
 

  function displayTasks() {
    var todoList = document.getElementById("toboCheck");
    todoList.innerHTML = "";
  
    var tasks = getTasks();
    for (var i = 0; i < tasks.length; i++) {
      var task = tasks[i];
      var title = task.title;
      var description = task.description;
      var list = task.list;
      var dueDate = task.dueDate;
      var subTask = task.subTask;
      
      var liLength = document.getElementsByClassName("toboCheckli").length;

      document.getElementsByClassName("todoCount")[0].innerHTML = liLength +1;
      document.getElementsByClassName("todayTask")[0].innerHTML = liLength + 1;
      

      var newItem = document.createElement('li');
      newItem.className = 'd-flex align-items-center justify-content-space-between toboCheckli';
      var listClass = '';
        if (list === 'Work') {
          listClass = 'red';
        } else if (list === 'Friends') {
          listClass = 'blue';
        }else{
          listClass = 'green';
        }
        
      newItem.innerHTML = `
      <div class="">
        <div class="p-1 d-flex gap-2 todo-li">
          <input type="checkbox" name="task" id="taskCheck" value="task">
          <label for="task">${title}</label>
        </div>
        <div class="todo-li-date d-flex align-items-center gap-2">
          <span class="d-flex gap-1 align-items-center font-12 p-1"><img src="img/calendar.png" alt="" width="15px">${dueDate}</span>
          <span class="d-flex gap-1 align-items-center font-12 p-1"><span class="subtaskCount">0</span>Subtasks</span>
          <span class="d-flex gap-1 align-items-center font-12 p-1"><span class="${listClass}"></span>${list}</span>                        
          <a href="#" class="font-12 p-1 font-bold transition-3 moreHover pointer">More</a>
        </div>
        <div class="dropdown-content d-none mt-2">
          <h4>Description</h4>
          <p class="font-14 mt-2">${description}</p>
          <h4 class="mt-2">Subtasks</h4>
          <ol class="subtaskAdd font-14 d-flex-col gap-1 mt-2 listStyle-decimal">
            ${subTask}
          </ol>
        </div>
      </div>
      `;
      var subtaskList = document.querySelectorAll('.subtaskAdd li').length;
      document.getElementsByClassName('subtaskCount').innerHTML = subtaskList + 1;
      var dropdownLink = newItem.querySelector('.moreHover');
      dropdownLink.addEventListener('click', function (event) {
        event.preventDefault();
        var dropdownContent = event.target.parentElement.nextElementSibling;
        dropdownContent.classList.toggle('d-none');
      });
      // dropdownTask();
      var deleteLink = document.createElement('a');
      deleteLink.href = "#";
      deleteLink.className = "position-relative hover-drop";

      var deleteImage = document.createElement('img');
      deleteImage.src = ellipsis;
      deleteImage.alt = "Bar";
      deleteImage.width = "17px";

      var dropdownItems = document.createElement('div');
      dropdownItems.className = "d-flex-col dropdownItems position-absolute";

      var editSpan = document.createElement('span');
      editSpan.textContent = "Edit";
      editSpan.onclick= (function(index) {
        return function() {
          editTask(index);
        };
      })(i);

      var deleteSpan = document.createElement('span');
      deleteSpan.textContent = "Delete";
      deleteSpan.onclick = (function(index) {
        return function() {
          removeTask(index);
        };
      })(i);

      dropdownItems.appendChild(editSpan);
      dropdownItems.appendChild(deleteSpan);

      deleteLink.appendChild(deleteImage);
      deleteLink.appendChild(dropdownItems);

      var deleteContainer = document.createElement('div');
      deleteContainer.appendChild(deleteLink);
      newItem.appendChild(deleteContainer);

      todoList.appendChild(newItem);

    }
  }

  function loadTasks() {
     getTasks();
    displayTasks();
  }


  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("subtaskInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("subtaskList").appendChild(li);
    }
    document.getElementById("subtaskInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
    localStorage.setItem("subtaskListValue", document.getElementById("subtaskList").innerHTML);
  }
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
export default App;
