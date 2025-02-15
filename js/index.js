// Todo listesi
let todoList = [];

const todoForm = document.querySelector("#todoForm");
console.log(todoForm);

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

const listRender = () => {
  console.log("Todo List:", todoList);
  document.querySelector("#todoList").innerHTML = ""; //
  todoList.forEach((todo, todoIndex) => {
    const todoItem = document.createElement("li"); // <li></li>
    todoItem.classList.add("listItem"); // <li class="listItem"></li>
    todoItem.innerHTML = `
       ${todo.message}
                <div style="display: flex; gap: 20px">
                  <i class="icon fi fi-rr-trash" id="todo-${todoIndex}"></i>
                </div>
      `;

    document.querySelector("#todoList").appendChild(todoItem);
    document
      .querySelector(`#todo-${todoIndex}`)
      .addEventListener("click", (event) => {
        todoList = todoList.filter((item, index) => {
          return index !== Number(event.target.id.split("-")[1]);
        });
        listRender();
      });
  });
};
