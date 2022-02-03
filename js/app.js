const inputElement = document.getElementById('inMain')

const btnElement = document.getElementById('submit-button')

const ulElement = document.getElementById('todo-list')

btnElement.addEventListener('click', function(evt) {
  const li = document.createElement('li')
  const inp = document.querySelector('input')
  li.textContent = inp.value
  if (inp.value !== ""){

    document.querySelector('ul').appendChild(li)
   inp.value = ""
     console.dir(inp.value)
  }
})
