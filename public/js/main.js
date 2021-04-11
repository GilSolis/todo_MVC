const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
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