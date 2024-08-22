const inputData = document.querySelector('input')
let count = 1

function addTodo(){
if(inputData.value!==""){

    const div = document.createElement('div')
    const hx = document.createElement('h4')
    const btx = document.createElement('div')
    const todox = document.createElement('div')
    todox.setAttribute('class','todox')
    btx.setAttribute('class','btn')
    hx.innerHTML= count+ " - " + inputData.value

    // Delete button
    const dltbtn = document.createElement('button')
    dltbtn.innerHTML="Delete"
    dltbtn.setAttribute('onclick',`deleteTodo(${count})`)

    // Edit button
    const editbtn = document.createElement('button')
    editbtn.innerHTML="Edit"
    editbtn.setAttribute('onclick',`editTodo(${count})`)
    
    todox.appendChild(hx)
    btx.appendChild(editbtn)
    btx.appendChild(dltbtn)
    div.appendChild(todox)
    div.appendChild(btx)
    div.setAttribute('class','todo')
    div.setAttribute('id',`todo-${count}`)
    document.querySelector('#allTodo').appendChild(div)
    count +=1;
    inputData.value = ""
}

}

function editTodo(index){
    const element = document.querySelector(`#todo-${index}`)
    const addbtn = document.querySelector("#addbtn")
    addbtn.innerHTML="Edit Todo"
    addbtn.setAttribute('onclick',`updateTodo(${index})`)
    const num = element.firstChild.textContent.indexOf("-")
    const data = element.firstChild.textContent.slice(num+1)
    inputData.value = data

}

function updateTodo(index){
    if(inputData.value!==""){
        const element = document.querySelector(`#todo-${index}`)
        element.firstChild.innerHTML="<h4>"+index +" - " +inputData.value+"</h4>"


        const addbtn = document.querySelector("#addbtn")
        addbtn.innerHTML="Add Todo"
        addbtn.setAttribute('onclick',`addTodo(${index})`)
        inputData.value = ""

    }
}

function deleteTodo(index){
const element = document.querySelector(`#todo-${index}`)
element.parentNode.removeChild(element)

// this is another method to remove the node
// event.target.parentNode.remove()
}