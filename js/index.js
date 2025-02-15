// Todo listesi
const todoList = [];

const todoForm = document.querySelector("#todoForm");
console.log(todoForm);

const listRender = () => {
  document.querySelector("#todoList").innerHTML = ""; //
  todoList.forEach((todo, index) => {
    console.log(index, todo);
    const todoItem = document.createElement("li"); // <li></li>
    todoItem.classList.add("listItem"); // <li class="listItem"></li>
    todoItem.innerHTML = `
       ${todo.message}
                <div style="display: flex; gap: 20px">
                  <i class="icon fi fi-rr-check"></i>
                  <i class="icon fi fi-rr-trash" id="${index}"></i>
                </div>
      `; // <li class="listItem">
      /* // Mürsel 
       <div style="display: flex; gap: 20px">
                  <i class="icon fi fi-rr-check"></i>
                  <i class="icon fi fi-rr-trash" id="${index}"></i>
                </div>
                </li> */
    document.querySelector("#todoList").appendChild(todoItem);
  });
  /* 
    <li class="listItem">
                Mürsel
                <div style="display: flex; gap: 20px">
                  <i class="icon fi fi-rr-check"></i>
                  <i class="icon fi fi-rr-trash"></i>
                </div>
              </li> */
};

todoForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Sayfanın yenilenmesini engeller.
  const todoMesageValue = event.target.elements.todoMessage.value;

  todoList.push({
    message: todoMesageValue,
    done: false,
  });

  listRender();

  todoForm.reset();
});
