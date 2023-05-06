const container = document.querySelector('#container');
const submitButton = document.querySelector('#submit-button');
const xInput = document.querySelector('#input-principal');
const items = document.querySelector(".items");
const body = document.querySelector('#body');

submitButton.addEventListener('click', function(e){
    e.preventDefault();
    const xValue = xInput.value;
    console.log( xValue);
    if(xValue === ""){
       return alert("Plaese, fill out alls the fields!");
    }
    container.style.background = "orange";
    body.style.background = "black";
    items.children[1].textContent = xValue;
});
//xInput.addEventListener('change', function(e){
  //  console.log(e.target.value);
//});

