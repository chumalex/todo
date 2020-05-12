const textInput = document.querySelectorAll(".textInput");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

let objText = {
  title: "",
  simpleText: ""
};

textInput.forEach(e => {
  e.addEventListener("change", function() {
    objText = { ...objText, [this.name]: this.value };
  });
});

btn.addEventListener("click", function() {
  if(objText.title.length == 0 || objText.simpleText.length == 0){
    alert('Add task!')
  } else {
    list.insertAdjacentHTML(
      "beforeend",
      `
      <li class="textElement list-group-item mb-3" data-el=${list.childElementCount}>
        <div class="text-block">
          <span class="title">${objText.title}</span>
          <hr>
          <p class="simpleText">${objText.simpleText}</p>
        </div>
        <button class="deleteBtn btn btn-danger">delete</button>
      </li>
      `
    );
  }
});

document.querySelector("body").addEventListener("click", function(event) {
  try{
    if(event.target.closest(".text-block").querySelector("span").classList.contains("active")){
      event.target.closest(".text-block").querySelector("span").classList.remove("active"); 
    }else{
      event.target.closest(".text-block").querySelector("span").classList.add("active"); 
    }
  }catch(e){}

  if (event.target.classList.contains("deleteBtn")) {
    list.removeChild(event.target.parentNode);
  }
});