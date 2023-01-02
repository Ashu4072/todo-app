let input = document.querySelector(".entered-list");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");
let count = document.getElementById("count-num");
let item = document.getElementsByClassName("item");
let countDiv = document.getElementById("countDiv");
let crossMark = document.getElementsByClassName("fa-solid fa-xmark")
// add btn disabled
console.log(count.innerHTML)
count.innerHTML = '';
input.addEventListener("keyup", () => {
  if (input.value.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

// add new tasks

addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
        <p class = "para"> ${input.value} </p>
          <div class="item-btn">
          <i class="fa-pen-to-square"></i>
              <i class="fa-solid fa-xmark"></i>
          </div>`;
    tasks.appendChild(newItem);
  console.log(tasks.childElementCount - 1)
   count.innerHTML = `count :${item.length}` ;
    input.value = "";
    
    // console.log(count);
  } else {
    alert("Please enter text");
  }
});

// remove tasks

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.remove();
    count.innerHTML = `count :${item.length}` ;
  }
});

// mark item as completed

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});



