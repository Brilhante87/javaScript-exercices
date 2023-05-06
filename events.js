const container = document.querySelector('#container');
const submitButton = document.querySelector('#submit-button');
const nameInput = document.querySelector('#input-principal');
const items = document.querySelector(".items");
const body = document.querySelector('#body');

submitButton.addEventListener('click', function(e){
    e.preventDefault();
    const nameValue = nameInput.value;
    console.log( nameValue);
    if(nameValue === ""){
       return alert("Plaese, fill out alls the fields!");
    }
    container.style.background = "orange";
    body.style.background = "black";
    items.children[1].textContent = nameValue;
});
//nameInput.addEventListener('change', function(e){
  //  console.log(e.target.value);
//});

