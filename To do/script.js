const addbtn=document.querySelector(".add-btn");
const newtask=document.querySelector(".input input");
const taskcontainer=document.querySelector(".tasks");
const error=document.querySelector(".error");
const count=document.querySelector(".count");

 let taskcount=0;

 const displaycount=(taskcount)=>{
    count.innerText= taskcount;
 }

 const addtask=()=>{
    const taskname= newtask.value.trim();
    error.style.display= "none";
    if(!taskname){
        setTimeout(()=>{
            error.style.display="block";
        },200);
    return;
}

 const task=`<div class="task">
    <input type="checkbox" class="task-check">
    <span class="taskname">${taskname}</span>
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
 </div>`;

 taskcontainer.insertAdjacentHTML("beforeend",task);

 const deletebtns=document.querySelectorAll(".delete");
 deletebtns.forEach((button)=>{
    button.onclick=()=>{
        button.parentNode.remove();
        if(!initialchecked){
            taskcount=taskcount-1;
        }
        displaycount(taskcount);
    };
 });

 const editbtns=document.querySelectorAll(".edit");
 editbtns.forEach((editbtn)=>{
    editbtn.onclick=(e)=>{
        let targetelement=e.target;
        if(!(e.target.className=="edit")){
            targetelement=e.target.parentElement;
        }
        newtask.value=targetelement.previousElementSibling?.innerText;
        targetelement.parentNode.remove();
        taskcount-=1;
        displaycount(taskcount);
    };
 });

 const taskscheck=document.querySelectorAll(".task-check");
 taskscheck.forEach((checkbox)=>{
    let initialchecked=checkbox.checked;
    checkbox.onchange=()=>{
        checkbox.nextElementSibling.classList.toggle("completed");
        if(checkbox.checked&& !initialchecked){
            taskcount-=1;
        }
        else if(!checkbox.checked&& initialchecked){
            taskcount+=1;
        }
        initialchecked=checkbox.checked;
        displaycount(taskcount);
    };
 });
 taskcount+=1;
 displaycount(taskcount);
 newtask.value="";
}


addbtn.addEventListener("click",addtask);


window.onload=()=>{
    taskcount=0;
    displaycount(taskcount);
    newtask.value="";
}




