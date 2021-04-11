const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})
Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/deleteTodo',{
            method:'delete',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile':todoId
            })
        })
        const data = await response.json()
        location.reload()
    } catch (error) {
        console.log(error)        
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    console.log(todoId)
    try {
        const response = await fetch('todos/markComplete',{
            method:'put',
            headers:{'Content-type': 'application/json'},
            body:JSON.stringify({
                'todoIdFromJSFile':todoId
            })
        }) 
        const data = await response.json() 
        location.reload()      
    } catch (error) {
        console.log(error)
    }
}