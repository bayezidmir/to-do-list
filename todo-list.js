const addItem = document.getElementById("add-item");
let count = 0;
addItem.addEventListener("click", function (e) {
  const itemContainer = document.getElementById("item-container");
  const inputField = document.getElementById("input-field").value;
  if (inputField == "") {
    alert`please enter an item to add`;
  } else {
    count++;
    const table = document.getElementById("table");
    const newItem = document.createElement("tr");
    newItem.innerHTML = `<th>${count}</th>
    <td>${inputField}</td>
    <td>
    <button class="btn btn-sm btn-success done" id='btn-done'>Done</button> 
    <button class="btn btn-sm btn-danger delete" id='btn-delete'>Delete</button>
    </td>`;
    itemContainer.appendChild(newItem);
    document.getElementById("input-field").value = "";

    const doneButtons = document.getElementsByClassName("done");
    for (const done of doneButtons) {
      done.addEventListener("click", function () {
        done.parentNode.parentNode.style.textDecoration = "line-through";
      });
    }

    const deleteButtons = document.getElementsByClassName("delete");
    for (const remove of deleteButtons) {
      remove.addEventListener("click", function () {
        remove.parentNode.parentNode.style.display = "none";
      });
    }
  }
});

const clearItem = document.getElementById("clear-item");
clearItem.addEventListener("click", function (e) {
  document.getElementById("input-field").value = "";
});

const itemContainer = document.getElementById("item-container");
document.getElementById("delete-all").addEventListener("click", function () {
  itemContainer.innerText = "";
});
