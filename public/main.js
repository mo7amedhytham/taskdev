let task_name = document.getElementById('task-add');
let due_date = document.getElementById("due_date")
let priority = document.getElementById("task_priority")
const taskBTN = document.getElementById('task-btn')



taskBTN.addEventListener('click', async (event)=>{
    event.preventDefault()

    let task = {
    title: task_name.value,
    due_date: due_date.value,
    priority: priority.value,
    }

    if (!task.title) {
    console.warn("Task title is required");
    return;
  }

    try{
        const response = await fetch("http://localhost:3000/task_submit",{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(task)
                
        })
    }
    catch(err){
        console.error("an error has occured while fetching :  \n "+ err)
    }
})


