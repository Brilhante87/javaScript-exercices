const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const errorMessage = document.querySelector(".msg");
const items = document.querySelector(".item")

submitButton.addEventListener("click", (e) =>{
    e.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if(nameValue === "" || emailValue === ""){
        errorMessage.textContent = "Please fill out all the fields";
       //com as config feitas no css
        errorMessage.classList = "error";
        //errorMessage.style.background = "orange";
        setTimeout(() =>{
            errorMessage.textContent = "";
            errorMessage.classList = "";
        }, 3000);
        return;  
    }
    // On va creer <li> 
    const li = document.createElement("li");
   //La classe item et le textContent
    li.classList = "item";
    li.innerHTML = `Name: ${nameValue}<br />Email: ${emailValue}`;
     // On va ajouter li dans ul de items
     items.append(li);
     li.classList = "li";
    //li.style.background = "green";
    //li.style.color = "white";
    nameInput.value = "";
    emailInput.value = "";
});